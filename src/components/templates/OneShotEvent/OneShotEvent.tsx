import { ReactElement, useContext, useEffect, useRef } from "react";
import { LoadingContext } from "components/organisms/Loading/Loading";
import ThankYouDetails from "components/organisms/ThankYouDetails/ThankYouDetails";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types/animations";
import OneShotImage from "assets/images/brand/OneShot/logo_white.png";
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
  FlyerContent,
} from "./OneShotEvent.styled";
import useAnimation from "./utils/useAnimation";

interface OneShotEventProps {
  isThankYouPage?: boolean;
}

// TODO: Modularize
const OneShotEvent = ({ isThankYouPage }: OneShotEventProps): ReactElement => {
  const { isLoaded, isDelayLoaded } = useContext(LoadingContext);

  const mainImage = useRef<HTMLDivElement>(null);
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { setAnimation, startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
  });

  useIsoLayoutEffect(() => {
    setAnimation();
  }, []);

  useEffect(() => {
    if (isDelayLoaded) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [isDelayLoaded]);

  return (
    <>
      <Loader mainImage={mainImage} isLoaded={isLoaded} isDelayLoaded={isDelayLoaded} />
      <Container>
        <FlyerWrapper>
          <Flyer>
            <OneShotLogo ref={mainImage} src={OneShotImage} alt="OneShot Logo" priority />
            <FlyerContent ref={(node) => ref("FlyerContent", node)}>
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
            </FlyerContent>
          </Flyer>
          {!isThankYouPage && (
            <MobileCTAButton ref={(node) => ref("MobileCTAButton", node)} href="#Tickets">
              RESERVAR LUGARES
            </MobileCTAButton>
          )}
        </FlyerWrapper>
        {isThankYouPage ? (
          <ThankYouDetails ref={(node) => ref("EventDetails", node)} />
        ) : (
          <StyledTicketsCheckoutForm ref={(node) => ref("EventDetails", node)} id="Tickets" />
        )}
      </Container>
    </>
  );
};

export default OneShotEvent;
