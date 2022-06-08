import { forwardRef, ComponentProps, ForwardedRef, useState } from "react";
import { TicketKeys } from "types/payment";
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
  TotalPrice,
  InfoButton,
  InfoIcon,
  LockBanner,
  LockIcon,
  TagsWrapper,
} from "./TicketsCheckoutForm.styled";
import useForm from "./utils/useForm";

const PRODUCT_PRICE = 600;

const TicketsCheckoutForm = forwardRef(
  ({ ...rest }: ComponentProps<typeof Container>, ref: ForwardedRef<HTMLDivElement>) => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const {
      tickets,
      ticketsCount,
      hasMultipleTicket,
      isFormVisible,
      handleSubmit,
      addTicket,
      deleteTicket,
      updateTicket,
    } = useForm({ price: PRODUCT_PRICE });

    return (
      <Container {...rest} ref={ref}>
        <TagsWrapper>
          <InfoButton onClick={() => setIsInfoModalOpen(true)}>
            <InfoIcon />
            Detalles del evento
          </InfoButton>
          <LockBanner>
            <LockIcon />
            Prohibida la entrada a menores de 20
          </LockBanner>
        </TagsWrapper>
        {isFormVisible && (
          <>
            <TicketsWrapper>
              {new Array(ticketsCount).fill(null).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TicketItem key={`TicketItem-${index}`}>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <TicketDetails key={`TicketDetails-${index}`}>
                    <NameInput
                      type="text"
                      placeholder="Nombre completo"
                      value={tickets[index][TicketKeys.Name] || ""}
                      onChange={(event) => updateTicket(TicketKeys.Name, event.target.value, index)}
                    />
                    <DniInput
                      type="tel"
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
              <SubmitButton onClick={() => handleSubmit()}>
                Comprar ticket{hasMultipleTicket && "s"}
              </SubmitButton>
              <TotalPrice>Total: ${tickets.length * PRODUCT_PRICE}</TotalPrice>
            </ButtonsWrapper>
          </>
        )}
      </Container>
    );
  },
);

export default TicketsCheckoutForm;
