import { useState, useRef, useEffect, RefObject } from "react";
import { awsS3Url } from "data";
import { Path } from "data/enum/Path";
import { Ticket, TicketKeys } from "types/payment";
import baseUrl from "utils/baseUrl";
import createTickets, { PaymentStatus } from "utils/createTickets";
import getMercadopagoSession from "utils/getMercadoPagoSession";

export enum FormStatus {
  Default = "Default",
  Loading = "Loading",
}

const DEFAULT_TICKET: Ticket = {
  [TicketKeys.Name]: "",
  [TicketKeys.Dni]: "",
};

interface UseFormProps {
  price: number;
}

type Status = FormStatus | PaymentStatus;

interface UseFormResponse {
  status: Status;
  tickets: Array<Ticket>;
  ticketsCount: number;
  hasMultipleTicket: boolean;
  ticketsWrapper: RefObject<HTMLDivElement>;
  handleSubmit: () => Promise<void>;
  addTicket: () => void;
  deleteTicket: (index: number) => void;
  updateTicket: (key: TicketKeys, value: string, index: number) => void;
}

const useForm = ({ price }: UseFormProps): UseFormResponse => {
  const ticketsWrapper = useRef<HTMLDivElement>(null);

  const [tickets, setTickets] = useState<Array<Ticket>>([DEFAULT_TICKET]);
  const [status, setStatus] = useState<Status>(FormStatus.Default);

  const ticketsCount = tickets.length;
  const hasMultipleTicket = ticketsCount > 1;

  const handleSubmit = async () => {
    setStatus(FormStatus.Loading);
    try {
      const { id, paymentUrl } = await getMercadopagoSession({
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
        auto_return: "approved",
        back_urls: {
          success: `${baseUrl}/${Path.Party}?status=${PaymentStatus.Success}`,
          failure: `${baseUrl}/${Path.Party}?status=${PaymentStatus.Failure}`,
          pending: `${baseUrl}/${Path.Party}?status=${PaymentStatus.Pending}`,
        },
      });
      await createTickets({ tickets, paymentId: id, paymentStatus: PaymentStatus.Pending });
      window.location.href = paymentUrl;
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
    handleSubmit,
    addTicket,
    deleteTicket,
    updateTicket,
  };
};

export default useForm;
