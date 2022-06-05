import { ReactElement } from "react";
import GenericModal, { GenericModalVariants } from "components/atoms/GenericModal/GenericModal";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";

interface CheckoutMercadoPagoProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutMercadoPago = (props: CheckoutMercadoPagoProps): ReactElement => {
  const da = "ddd";

  useIsoLayoutEffect(() => {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
      locale: "es-AR",
    });

    mp.checkout({
      preference: {
        id: "[ONE]SHOT",
      },
      render: {
        container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });
  }, []);

  return (
    <GenericModal variant={GenericModalVariants.Center} {...props}>
      hola<p>{da}</p>
    </GenericModal>
  );
};

export default CheckoutMercadoPago;
