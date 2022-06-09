export interface PaymentDetailsMercadoPago {
  id: string;
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
}
export enum TicketKeys {
  Name = "name",
  Dni = "dni",
}

export interface Ticket {
  [TicketKeys.Name]: string;
  [TicketKeys.Dni]: string;
}
