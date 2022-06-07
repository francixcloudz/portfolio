import { ReactElement, useContext } from "react";
import { LoadingContext } from "components/organisms/Loading/Loading";
import useResponsive from "hooks/useResponsive";
import breakpoints from "styles/theme/data/breakpoints";
import Loader from "./Loader/Loader";
import {
  Container,
  FlyerWrapper,
  Flyer,
  OneShotLogo,
  BrandName,
  DetailsVariant,
  Details,
  MobileCTAButton,
  StyledTicketsCheckoutForm,
} from "./OneShotEvent.styled";

const OneShotEvent = (): ReactElement => {
  const { isLoaded } = useContext(LoadingContext);

  const isMobile = useResponsive(breakpoints.large);

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <Container isMobile={isMobile}>
        <FlyerWrapper isMobile={isMobile}>
          <Flyer isMobile={isMobile}>
            <OneShotLogo />
            <BrandName>[ONE]SHOT</BrandName>
            <Details variant={DetailsVariant.Medium} style={{ marginBottom: 0 }}>
              NUEVA CORDOBA
            </Details>
            <Details variant={DetailsVariant.Small} style={{}}>
              LISTA PRIVADA
            </Details>
            <Details variant={DetailsVariant.Large} style={{ marginBottom: 0 }}>
              VIERNES
            </Details>
            <Details variant={DetailsVariant.ExtraLarge} style={{ marginBottom: 0 }}>
              17 JUNIO '22
            </Details>
            <Details variant={DetailsVariant.Medium} style={{}}>
              FIESTA CACHENGUE
            </Details>
            <Details variant={DetailsVariant.Small} style={{ marginBottom: 0 }}>
              SONIDO DE ALTA CALIDAD
            </Details>
            <Details variant={DetailsVariant.Medium} style={{}}>
              CONSERVADORAS PERMITIDAS
            </Details>
            <Details variant={DetailsVariant.Small} style={{ marginBottom: 0 }}>
              LINE UP
            </Details>
            <Details variant={DetailsVariant.Medium} style={{}}>
              TEIKO - DJ NICO MARCO - DJ R.
            </Details>
          </Flyer>
          {isMobile && <MobileCTAButton href="#Tickets">RESERVAR LUGARES</MobileCTAButton>}
        </FlyerWrapper>
        <StyledTicketsCheckoutForm id="Tickets" />
      </Container>
    </>
  );
};

export default OneShotEvent;
