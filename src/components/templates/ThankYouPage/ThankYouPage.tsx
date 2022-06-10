import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Loader from "components/atoms/Loader/Loader";
import updateTickets from "utils/updateTickets";
import OneShotImage from "assets/images/brand/OneShot/logo_white.png";
import { BrandName, Details, DetailsVariant } from "../OneShotEvent/OneShotEvent.styled";
import {
  Container,
  BrandWrapper,
  OneShotLogo,
  QRCodeWrapper,
  StyledQRCode,
  PaymentDetailsWrapper,
} from "./ThankYouPage.styled";

interface PaymentInfo {
  preferenceId: string;
  paymentId: string;
}

const ThankYouPage = (): ReactElement => {
  const { query } = useRouter();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  useEffect(() => {
    const queryValues = { ...query };
    const preferenceId = queryValues.preference_id as string;
    const paymentId = queryValues.payment_id as string;
    if (preferenceId && paymentId) {
      const newPaymentInfo = { preferenceId, paymentId };
      setPaymentInfo(newPaymentInfo);
      updateTickets(newPaymentInfo);
    }
  }, [query]);

  return (
    <Container>
      {paymentInfo ? (
        <PaymentDetailsWrapper>
          <QRCodeWrapper>
            <StyledQRCode
              value={paymentInfo.paymentId}
              size={250}
              style={{ height: "auto", maxWidth: "100%", width: "250px" }}
            />
            <Details variant={DetailsVariant.Large} style={{ marginBottom: 0 }}>
              GRACIAS
            </Details>
          </QRCodeWrapper>
        </PaymentDetailsWrapper>
      ) : (
        <Loader />
      )}
      <BrandWrapper>
        <OneShotLogo src={OneShotImage} alt="OneShot Logo" priority />
        <BrandName>[ONE]SHOT</BrandName>
      </BrandWrapper>
    </Container>
  );
};

export default ThankYouPage;
