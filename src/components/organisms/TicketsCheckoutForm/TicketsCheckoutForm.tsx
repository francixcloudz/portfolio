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
  StyledFullScreenMessage,
  StyledPayButton,
} from "./TicketsCheckoutForm.styled";
import useForm, { Status } from "./utils/useForm";
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";

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
      paymentUrl,
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
              onClick={() => (status === Status.Loading ? null : addTicket())}
            >
              Agregar otro ticket
            </AddTicketButton>

            {status === Status.RequiredFieldsError && (
              <LockBanner>
                <LockIcon />
                Tienes campos sin completar
              </LockBanner>
            )}

            <SubmitButton
              id="paycontainer"
              onClick={() => (status === Status.Loading ? null : handleSubmit())}
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
          <DetailsContent>Viernes 17 - Junio 2022 - 00.00hs</DetailsContent>
          <DetailsTitle>UBICACION</DetailsTitle>
          <DetailsContent>Malagueño 2274, Córdoba</DetailsContent>
          <SubmitButton href="https://goo.gl/maps/7NNbSpKZ7qYUEGaw6">
            ABRIR GOOGLE MAPS
          </SubmitButton>
          <DetailsTitle>INFORMACION ADICIONAL</DetailsTitle>
          <DetailsContent>Conservadoras permitidas</DetailsContent>
        </InfoModal>
        {status === Status.Saving && (
          <StyledFullScreenMessage>
            <SectionTitle title="Pago pendiente" subtitle="alias: oneshot" principal isWhite />
            <DetailsContent style={{ marginTop: "0.5rem" }}>
              Para finalizar el registro realiza una transferencia
            </DetailsContent>
            <DetailsTitle style={{ marginTop: "0" }}>
              Total: ${ticketsCount * PRODUCT_PRICE} ({ticketsCount} ticket
              {hasMultipleTicket ? "s" : ""})
            </DetailsTitle>
            <StyledPayButton
              target="_blank"
              href={`https://wa.me/5492995769384?text=${encodeURIComponent(
                "Hola! Te envio el comprobante de pago de mis entradas. Mi DNI es: ",
              )}`}
            >
              ENVIAR COMPROBANTE
            </StyledPayButton>
            {/* {paymentUrl ? (
              <StyledPayButton target="_self" href={paymentUrl}>
                Pagar
              </StyledPayButton>
            ) : (
              <>
                <DetailsContent>Generando link de pago...</DetailsContent>
                <StyledInlineLoader />
              </>
            )} */}
          </StyledFullScreenMessage>
        )}
      </>
    );
  },
);

export default TicketsCheckoutForm;
