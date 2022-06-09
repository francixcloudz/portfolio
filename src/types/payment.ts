export interface PaymentDetailsMercadoPago {
  items: Array<{
    id: string;
    title: string;
    description: string;
    picture_url: string;
    category_id: string;
    quantity: number;
    currency_id: string;
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
