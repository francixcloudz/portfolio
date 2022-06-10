import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import updateTickets from "utils/updateTickets";
import OneShotImage from "assets/images/brand/OneShot/logo_white.png";
import { Container, OneShotLogo } from "./ThankYouPage.styled";

const ThankYouPage = (): ReactElement => {
  const { query } = useRouter();

  useEffect(() => {
    if (query) {
      console.log(query);
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { preference_id, payment_id } = query;
      updateTickets({
        preferenceId: String(preference_id),
        paymentId: String(payment_id),
      });
    }
  }, []);

  return (
    <Container>
      <OneShotLogo src={OneShotImage} alt="OneShot Logo" priority />
    </Container>
  );
};

export default ThankYouPage;
