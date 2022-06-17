import { useState, useRef, useEffect, RefObject } from "react";
import { awsS3Url } from "data";
import { ApiPath, Path } from "data/enum/Path";
import { Ticket, TicketKeys } from "types/payment";
import createMercadopagoSession from "utils/createMercadopagoSession";
import createTickets from "utils/createTickets";

export enum Status {
  Default = "default",
  RequiredFieldsError = "RequiredFieldsError",
  Loading = "loading",
  Saving = "saving",
}

export enum PaymentStatus {
  Success = "success",
  Failure = "failure",
  Pending = "pending",
}

const DEFAULT_TICKET: Ticket = {
  [TicketKeys.Name]: "",
  [TicketKeys.Dni]: "",
};

interface UseFormProps {
  price: number;
}

interface UseFormResponse {
  status: Status;
  tickets: Array<Ticket>;
  ticketsCount: number;
  hasMultipleTicket: boolean;
  ticketsWrapper: RefObject<HTMLDivElement>;
  paymentUrl: string | null;
  handleSubmit: () => Promise<void>;
  addTicket: () => void;
  deleteTicket: (index: number) => void;
  updateTicket: (key: TicketKeys, value: string, index: number) => void;
}

const useForm = ({ price }: UseFormProps): UseFormResponse => {
  const ticketsWrapper = useRef<HTMLDivElement>(null);

  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [tickets, setTickets] = useState<Array<Ticket>>([DEFAULT_TICKET]);
  const [status, setStatus] = useState<Status>(Status.Default);

  const ticketsCount = tickets.length;
  const hasMultipleTicket = ticketsCount > 1;

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  const mercadoPagoPreferences = {
    statement_descriptor: "[ONE]SHOT",
    items: [
      {
        id: "[ONE]SHOT Pass",
        title: "[ONE]SHOT Pass",
        currency_id: "ARS",
        picture_url: `${awsS3Url}/OneShot.png`,
        description: "Pass to [ONE]SHOT Private Event",
        category_id: "tickets",
        quantity: ticketsCount,
        unit_price: price,
      },
    ],
    payer: {
      name: tickets[0][TicketKeys.Name],
      identification: {
        type: "DNI",
        number: tickets[0][TicketKeys.Dni],
      },
    },
    external_reference: `DNI - ${tickets[0][TicketKeys.Dni]}`,
    auto_return: "all",
    back_urls: {
      success: `${rootDomain}${Path.Party}?thankYou=true&paymentStatus=${PaymentStatus.Success}`,
      failure: `${rootDomain}${Path.Party}?thankYou=true&paymentStatus=${PaymentStatus.Failure}`,
      pending: `${rootDomain}${Path.Party}?thankYou=true&paymentStatus=${PaymentStatus.Pending}`,
    },
    notification_url: `${rootDomain}/api${ApiPath.MercadopagoWebhook}?source_news=webhooks`,
    payment_methods: {
      installments: 1,
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  const handleSubmit = async () => {
    if (tickets.some(({ name, dni }) => !name || !dni)) {
      setStatus(Status.RequiredFieldsError);
      return;
    }
    setStatus(Status.Loading);
    try {
      const { preferenceId, paymentUrl: newPaymentUrl } = await createMercadopagoSession(
        mercadoPagoPreferences,
      );
      setStatus(Status.Saving);
      await createTickets({ tickets, preferenceId });
      setTimeout(() => {
        setPaymentUrl(newPaymentUrl);
      }, 3000);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const addTicket = () => {
    setTickets((previousState) => [...previousState, DEFAULT_TICKET]);
  };

  useEffect(() => {
    if (ticketsWrapper.current && ticketsWrapper.current?.lastChild) {
      (ticketsWrapper.current.lastChild as HTMLDivElement).scrollIntoView();
    }
  }, [ticketsCount]);

  const deleteTicket = (index: number) => {
    setTickets((previousState) => {
      const newState = [...previousState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const updateTicket = (key: TicketKeys, value: string, index: number) => {
    setTickets((previousState) => {
      const newState = [...previousState];
      newState.splice(index, 1, { ...previousState[index], [key]: value });
      return newState;
    });
  };

  return {
    status,
    tickets,
    ticketsCount,
    hasMultipleTicket,
    ticketsWrapper,
    paymentUrl,
    handleSubmit,
    addTicket,
    deleteTicket,
    updateTicket,
  };
};

export default useForm;
