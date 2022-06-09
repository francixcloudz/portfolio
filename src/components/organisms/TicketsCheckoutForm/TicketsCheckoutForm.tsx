import { forwardRef, ComponentProps, ForwardedRef } from "react";
import { GenericModalVariants } from "components/atoms/GenericModal/utils/data";
import useGenericModal from "hooks/useGenericModal";
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
  InfoModal,
  DetailsTitle,
  DetailsContent,
  StyledInlineLoader,
} from "./TicketsCheckoutForm.styled";
import useForm, { Status } from "./utils/useForm";

interface TicketsCheckoutFormProps {
  minimumAge?: number;
}

const PRODUCT_PRICE = 600;

// TODO: Modularize
const TicketsCheckoutForm = forwardRef(
  (
    { minimumAge, ...rest }: TicketsCheckoutFormProps & ComponentProps<typeof Container>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      status,
      tickets,
      ticketsCount,
      hasMultipleTicket,
      ticketsWrapper,
      handleSubmit,
      addTicket,
      deleteTicket,
      updateTicket,
    } = useForm({ price: PRODUCT_PRICE });

    const {
      isOpenModal: isOpenInfoModal,
      openModal: openInfoModal,
      handleClose: handleCloseInfoModal,
    } = useGenericModal();

    return (
      <>
        <Container {...rest} ref={ref}>
          <TagsWrapper>
            <InfoButton onClick={() => openInfoModal()}>
              <InfoIcon />
              Detalles del evento
            </InfoButton>
            {minimumAge && (
              <LockBanner>
                <LockIcon />
                Prohibida la entrada a menores de {minimumAge}
              </LockBanner>
            )}
          </TagsWrapper>
          <TicketsWrapper ref={ticketsWrapper}>
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
            <AddTicketButton
              type="button"
              onClick={() => addTicket()}
              disabled={status === Status.Loading}
            >
              Agregar otro ticket
            </AddTicketButton>
            <SubmitButton
              id="paycontainer"
              onClick={() => handleSubmit()}
              disabled={status === Status.Loading}
            >
              {status === Status.Loading ? (
                <StyledInlineLoader />
              ) : (
                `Comprar ${ticketsCount} ticket${hasMultipleTicket ? "s" : ""}`
              )}
            </SubmitButton>
            <TotalPrice>Total: ${ticketsCount * PRODUCT_PRICE}</TotalPrice>
          </ButtonsWrapper>
        </Container>
        <InfoModal
          isOpen={isOpenInfoModal}
          onClose={handleCloseInfoModal}
          variant={GenericModalVariants.Center}
        >
          <DetailsTitle>FECHA</DetailsTitle>
          <DetailsContent>Viernes 27 - Junio 2022 - 00.00hs</DetailsContent>
          <DetailsTitle>UBICACION</DetailsTitle>
          <DetailsContent>Malagueño 2274, Córdoba</DetailsContent>
          <SubmitButton href="https://goo.gl/maps/7NNbSpKZ7qYUEGaw6">
            ABRIR GOOGLE MAPS
          </SubmitButton>
          <DetailsTitle>INFORMACION ADICIONAL</DetailsTitle>
          <DetailsContent>Conservadoras permitidas</DetailsContent>
        </InfoModal>
      </>
    );
  },
);

export default TicketsCheckoutForm;
