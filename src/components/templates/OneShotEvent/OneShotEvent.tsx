import { ReactElement, useContext } from "react";
import CheckoutMercadoPago from "components/organisms/CheckoutMercadoPago/CheckoutMercadoPago";
import { LoadingContext } from "components/organisms/Loading/Loading";
import useGenericModal from "hooks/useGenericModal";
import Loader from "./Loader/Loader";
import {
  Container,
  FlyerContent,
  OneShotLogo,
  BrandName,
  DetailsVariant,
  Details,
  MobileCTAButton,
} from "./OneShotEvent.styled";

const OneShotEvent = (): ReactElement => {
  const { isLoaded } = useContext(LoadingContext);

  const { isOpenModal, openModal, handleClose } = useGenericModal();

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <Container>
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
        <MobileCTAButton onClick={() => openModal()}>RESERVAR LUGARES</MobileCTAButton>
      </Container>
      <CheckoutMercadoPago isOpen={isOpenModal} onClose={handleClose} />
    </>
  );
};

export default OneShotEvent;
