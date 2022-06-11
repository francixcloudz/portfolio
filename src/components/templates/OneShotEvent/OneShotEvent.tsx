import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { GenericModalVariants } from "components/atoms/GenericModal/GenericModal";
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import { LoadingContext } from "components/organisms/Loading/Loading";
import { PaymentStatus } from "components/organisms/TicketsCheckoutForm/utils/useForm";
import useGenericModal from "hooks/useGenericModal";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types/animations";
import addPaymentIdToTickets from "utils/AddPaymentIdToTickets";
import OneShotImage from "assets/images/brand/OneShot/logo_white.png";
import moonshot from "assets/images/emojis/Moonshot.png";
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
  ThankYouModal,
  QRCodeWrapper,
  InformationWrapper,
} from "./OneShotEvent.styled";
import useAnimation from "./utils/useAnimation";

interface PaymentInfo {
  preferenceId: string;
  paymentId: string;
}

// TODO: Modularize
const OneShotEvent = (): ReactElement => {
  const { query } = useRouter();

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  const { isLoaded, isDelayLoaded } = useContext(LoadingContext);

  const mainImage = useRef<HTMLDivElement>(null);
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { setAnimation, startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
  });

  const {
    isOpenModal: isOpenThankYouModal,
    openModal: openThankYouModal,
    handleClose: handleCloseThankYouModal,
  } = useGenericModal();

  useIsoLayoutEffect(() => {
    setAnimation();
  }, []);

  useEffect(() => {
    if (isDelayLoaded) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [isDelayLoaded]);

  useEffect(() => {
    const queryValues = { ...query };
    if (queryValues.thankYou) openThankYouModal();
    const preferenceId = queryValues.preference_id as string;
    const paymentId = queryValues.payment_id as string;
    const status = queryValues.paymentStatus as PaymentStatus;
    if (status) setPaymentStatus(status);
    if (preferenceId && paymentId) {
      const newPaymentInfo = { preferenceId, paymentId };
      setPaymentInfo(newPaymentInfo);
      addPaymentIdToTickets(newPaymentInfo);
    }
  }, [query]);

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
          <MobileCTAButton ref={(node) => ref("MobileCTAButton", node)} href="#Tickets">
            RESERVAR LUGARES
          </MobileCTAButton>
        </FlyerWrapper>

        <StyledTicketsCheckoutForm ref={(node) => ref("EventDetails", node)} id="Tickets" />
      </Container>
      <ThankYouModal
        isOpen={isOpenThankYouModal}
        onClose={handleCloseThankYouModal}
        variant={GenericModalVariants.Center}
      >
        <Details variant={DetailsVariant.ExtraLarge} style={{ marginBottom: 0 }}>
          DATOS DE TU COMPRA
        </Details>
        <InformationWrapper>
          <Details variant={DetailsVariant.Large} style={{ marginTop: "1rem" }}>
            {paymentStatus === PaymentStatus.Pending && "PAGO PENDIENTE"}
            {paymentStatus === PaymentStatus.Failure && "PAGO FALLIDO"}
            {paymentStatus === PaymentStatus.Success && "PAGO EXITOSO"}
          </Details>

          {paymentStatus === PaymentStatus.Success && paymentInfo && (
            <>
              <QRCodeWrapper>
                <QRCode
                  value={paymentInfo.paymentId}
                  size={150}
                  style={{ height: "auto", maxWidth: "100%", width: "150px" }}
                />
              </QRCodeWrapper>
              <SectionTitle
                title="GRACIAS"
                subtitle="PODRAN INGRESAR CON SU DNI Y/O CON ESTE CODIGO QR"
                emoji={moonshot}
                isWhite
              />
            </>
          )}
        </InformationWrapper>
      </ThankYouModal>
    </>
  );
};

export default OneShotEvent;
