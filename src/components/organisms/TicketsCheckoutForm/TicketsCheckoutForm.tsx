import { ReactElement, ComponentProps, useState } from "react";
import { awsS3Url } from "data";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useMercadoPago from "hooks/useMercadoPago";
import { Ticket, TicketKeys } from "types/payment";
import {
  Container,
  ButtonsWrapper,
  AddTicketButton,
  SubmitButton,
  TicketsWrapper,
  TicketItem,
  TicketDetails,
  DeleteTicketButton,
  DniInput,
  NameInput,
} from "./TicketsCheckoutForm.styled";

const TicketsCheckoutForm = ({ ...rest }: ComponentProps<typeof Container>): ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [tickets, setTickets] = useState<Array<Partial<Ticket>>>([{}]);
  const hasMultipleTicket = tickets.length > 1;

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
    <Container onSubmit={handleSubmit} {...rest}>
      {isFormVisible && (
        <>
          <TicketsWrapper>
            {tickets.map(({ name, dni }, index) => (
              <TicketItem key={dni}>
                {/* eslint-disable-next-line react/no-array-index-key */}
                <TicketDetails key={`${name}-${dni}-${index}`}>
                  <NameInput
                    type="text"
                    placeholder="Nombre completo"
                    value={tickets[index][TicketKeys.Name] || ""}
                    onChange={(event) => updateTicket(TicketKeys.Name, event.target.value, index)}
                  />
                  <DniInput
                    type="number"
                    placeholder="DNI"
                    value={tickets[index][TicketKeys.Dni] || ""}
                    onChange={(event) => updateTicket(TicketKeys.Dni, event.target.value, index)}
                  />
                </TicketDetails>
                {hasMultipleTicket && (
                  <DeleteTicketButton onClick={() => deleteTicket(index)}>x</DeleteTicketButton>
                )}
              </TicketItem>
            ))}
          </TicketsWrapper>
          <ButtonsWrapper>
            <AddTicketButton type="button" onClick={() => addTicket()}>
              Agregar otro ticket
            </AddTicketButton>
            <SubmitButton type="submit">Comprar ticket{hasMultipleTicket && "s"}</SubmitButton>
          </ButtonsWrapper>
        </>
      )}
    </Container>
  );
};

export default TicketsCheckoutForm;
