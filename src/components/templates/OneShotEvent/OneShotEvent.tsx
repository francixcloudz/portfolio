import { ReactElement, useContext } from "react";
import { GenericModalVariants } from "components/atoms/GenericModal/GenericModal";
import { LoadingContext } from "components/organisms/Loading/Loading";
import TicketsCheckoutForm from "components/organisms/TicketsCheckoutForm/TicketsCheckoutForm";
import useGenericModal from "hooks/useGenericModal";
import useResponsive from "hooks/useResponsive";
import breakpoints from "styles/theme/data/breakpoints";
import Loader from "./Loader/Loader";
import {
  Container,
  FlyerContent,
  OneShotLogo,
  BrandName,
  DetailsVariant,
  Details,
  MobileCTAButton,
  Modal,
} from "./OneShotEvent.styled";

const OneShotEvent = (): ReactElement => {
  const { isLoaded } = useContext(LoadingContext);

  const isMobile = useResponsive(breakpoints.large);

  const { isOpenModal, openModal, handleClose } = useGenericModal();

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <Container isMobile={isMobile}>
        <FlyerContent>
          <OneShotLogo />
          <BrandName>[ONE]SHOT</BrandName>
          <Details variant={DetailsVariant.Medium}>NUEVA CORDOBA</Details>
          <Details variant={DetailsVariant.Small}>LISTA PRIVADA</Details>
          <Details variant={DetailsVariant.Large}>VIERNES</Details>
          <Details variant={DetailsVariant.ExtraLarge}>17 JUNIO '22</Details>
          <Details variant={DetailsVariant.Medium}>FIESTA CACHENGUE</Details>
          <Details variant={DetailsVariant.Small}>SONIDO DE ALTA CALIDAD</Details>
          <Details variant={DetailsVariant.Medium}>CONSERVADORAS PERMITIDAS</Details>
          <Details variant={DetailsVariant.Small}>LINE UP</Details>
          <Details variant={DetailsVariant.Medium}>TEIKO - DJ NICO MARCO - DJ R.</Details>
        </FlyerContent>
        {isMobile ? (
          <MobileCTAButton onClick={() => openModal()}>RESERVAR LUGARES</MobileCTAButton>
        ) : (
          <TicketsCheckoutForm />
        )}
      </Container>
      {isMobile && (
        <Modal variant={GenericModalVariants.Center} isOpen={isOpenModal} onClose={handleClose}>
          <TicketsCheckoutForm />
        </Modal>
      )}
    </>
  );
};

export default OneShotEvent;
