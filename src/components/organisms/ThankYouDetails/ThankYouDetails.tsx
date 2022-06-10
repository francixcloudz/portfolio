import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Loader from "components/atoms/Loader/Loader";
import updateTickets from "utils/updateTickets";
import { Details, DetailsVariant } from "../../templates/OneShotEvent/OneShotEvent.styled";
import { Container, QRCodeWrapper, PaymentDetailsWrapper } from "./ThankYouDetails.styled";

interface PaymentInfo {
  preferenceId: string;
  paymentId: string;
}

const ThankYouDetails = forwardRef<HTMLDivElement>(({ ...rest }, ref) => {
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
    <Container ref={ref} {...rest}>
      <PaymentDetailsWrapper>
        {paymentInfo ? (
          <QRCodeWrapper>
            <QRCode
              value={paymentInfo.paymentId}
              size={250}
              style={{ height: "auto", maxWidth: "100%", width: "250px" }}
            />
            <Details variant={DetailsVariant.Large} style={{ marginTop: "3rem" }}>
              GRACIAS
            </Details>
          </QRCodeWrapper>
        ) : (
          <Loader />
        )}
      </PaymentDetailsWrapper>
    </Container>
  );
});

export default ThankYouDetails;
