import { useState } from "react";
import { awsS3Url } from "data";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useMercadoPago from "hooks/useMercadoPago";
import { Ticket, TicketKeys } from "types/payment";

interface UseFormProps {
  price: number;
}

const useForm = ({ price }: UseFormProps) => {
  const [tickets, setTickets] = useState<Array<Partial<Ticket>>>([{}]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { initSDK, openCheckoutPage } = useMercadoPago();

  useIsoLayoutEffect(() => {
    initSDK(() => setIsFormVisible(true));
  }, []);

  const hasMultipleTicket = tickets.length > 1;

  const handleSubmit = () => {
    openCheckoutPage({
      statement_descriptor: "[ONE]CORP",
      items: [
        {
          id: "[ONE]SHOT Pass",
          title: "[ONE]SHOT Pass",
          currency_id: "ARS",
          picture_url: `${awsS3Url}/OneShot.png`,
          description: "Pass to [ONE]SHOT Private Event",
          category_id: "tickets",
          quantity: tickets.length,
          unit_price: price,
        },
      ],
      binary_mode: false,
      auto_return: "approved",
      back_urls: {
        success: "https://www.success.com",
        failure: "http://www.failure.com",
        pending: "http://www.pending.com",
      },
      payment_methods: {
        installments: 1,
      },
    });
  };

  const addTicket = () => {
    setTickets((previousState) => [...previousState, {}]);
  };

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
    tickets,
    ticketsCount: tickets.length,
    hasMultipleTicket,
    isFormVisible,
    handleSubmit,
    addTicket,
    deleteTicket,
    updateTicket,
  };
};

export default useForm;
