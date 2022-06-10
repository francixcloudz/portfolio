export interface PaymentDetailsMercadopago {
  statement_descriptor: string;
  items: Array<{
    id: string;
    title: string;
    currency_id: string;
    picture_url: string;
    description: string;
    category_id: string;
    quantity: number;
    unit_price: number;
  }>;
  binary_mode: boolean;
  auto_return: string;
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  notification_url: string;
}
export enum TicketKeys {
  Name = "name",
  Dni = "dni",
}

export interface Ticket {
  [TicketKeys.Name]: string;
  [TicketKeys.Dni]: string;
}

export interface TicketsSchema {
  tickets: Array<Ticket>;
  preferenceId: string;
  paymentId: string;
  paymentStatus: string;
}
