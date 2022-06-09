import { useState, useRef, useEffect } from "react";
import { awsS3Url } from "data";
import { Path } from "data/enum/Path";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useMercadoPago from "hooks/useMercadoPago";
import { Ticket, TicketKeys } from "types/payment";
import baseUrl from "utils/baseUrl";
import createTicket from "utils/createTicket";

export enum Status {
  Default = "Default",
  Loading = "Loading",
  Success = "Success",
  Failure = "Failure",
  Pending = "Pending",
}

const DEFAULT_TICKET: Ticket = {
  [TicketKeys.Name]: "",
  [TicketKeys.Dni]: "",
};

interface UseFormProps {
  price: number;
}

const useForm = ({ price }: UseFormProps) => {
  const ticketsWrapper = useRef<HTMLDivElement>(null);

  const [tickets, setTickets] = useState<Array<Ticket>>([DEFAULT_TICKET]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [status, setStatus] = useState(Status.Default);

  const { initSDK, openCheckoutPage } = useMercadoPago();

  useIsoLayoutEffect(() => {
    initSDK(() => setIsFormVisible(true));
  }, []);

  const ticketsCount = tickets.length;
  const hasMultipleTicket = ticketsCount > 1;

  const handleSubmit = async () => {
    try {
      setStatus(Status.Loading);
      const { data } = await createTicket(tickets);
      const { id } = data.ref["@ref"];
      const backUrl = `${baseUrl}/${Path.Party}?id=${id}`;
      // openCheckoutPage({
      //   statement_descriptor: "[ONE]SHOT",
      //   items: [
      //     {
      //       id: "[ONE]SHOT Pass",
      //       title: "[ONE]SHOT Pass",
      //       currency_id: "ARS",
      //       picture_url: `${awsS3Url}/OneShot.png`,
      //       description: "Pass to [ONE]SHOT Private Event",
      //       category_id: "tickets",
      //       quantity: ticketsCount,
      //       unit_price: price,
      //     },
      //   ],
      //   binary_mode: false,
      //   auto_return: "approved",
      //   back_urls: {
      //     success: `${backUrl}&status=${Status.Success}`,
      //     failure: `${backUrl}&status=${Status.Failure}`,
      //     pending: `${backUrl}&status=${Status.Pending}`,
      //   },
      //   payment_methods: {
      //     installments: 1,
      //   },
      // });
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
    isFormVisible,
    ticketsWrapper,
    handleSubmit,
    addTicket,
    deleteTicket,
    updateTicket,
  };
};

export default useForm;
