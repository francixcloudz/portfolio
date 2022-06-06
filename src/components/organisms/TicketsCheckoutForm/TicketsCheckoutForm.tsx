import { ReactElement, useState } from "react";
import { awsS3Url } from "data";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useMercadoPago from "hooks/useMercadoPago";
import { Ticket, TicketKeys } from "types/payment";
import {
  FormContainer,
  AddTicketButton,
  SubmitButton,
  TicketWrapper,
  TicketDetails,
  DeleteTicketButton,
  DniInput,
  NameInput,
} from "./TicketsCheckoutForm.styled";

const TicketsCheckoutForm = (): ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [tickets, setTickets] = useState<Array<Partial<Ticket>>>([{}]);

  const { initSDK, openCheckoutPage } = useMercadoPago();

  useIsoLayoutEffect(() => {
    initSDK(() => setIsFormVisible(true));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
          unit_price: 600,
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
    setTickets((previousState) => [...previousState].splice(index, 1));
  };

  const updateTicket = (key: TicketKeys, value: string, index: number) => {
    setTickets((previousState) =>
      [...previousState].splice(index, 1, { ...previousState[index], [key]: value }),
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {isFormVisible && (
        <>
          {tickets.map(({ name, dni }, index) => (
            <TicketWrapper>
              <TicketDetails key={`${name}-${dni}`}>
                <NameInput
                  value={tickets[index][TicketKeys.Name] || ""}
                  onChange={(event) => updateTicket(TicketKeys.Name, event.target.value, index)}
                />
                <DniInput
                  value={tickets[index][TicketKeys.Dni] || ""}
                  onChange={(event) => updateTicket(TicketKeys.Dni, event.target.value, index)}
                />
              </TicketDetails>
              <DeleteTicketButton onClick={() => deleteTicket(index)}>Delete</DeleteTicketButton>
            </TicketWrapper>
          ))}
          <AddTicketButton onClick={() => addTicket}>Add</AddTicketButton>
          <SubmitButton type="submit" />
        </>
      )}
    </FormContainer>
  );
};

export default TicketsCheckoutForm;
