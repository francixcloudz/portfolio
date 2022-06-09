export interface PaymentDetailsMercadoPago {
  statement_descriptor: string;
  items: {
    id: string;
    title: string;
    currency_id: string;
    picture_url: string;
    description: string;
    category_id: string;
    quantity: number;
    unit_price: number;
  }[];
  binary_mode: boolean;
  auto_return: string;
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  payment_methods: {
    installments: number;
  };
}
export enum TicketKeys {
  Name = "name",
  Dni = "dni",
}

export interface Ticket {
  [TicketKeys.Name]: string;
  [TicketKeys.Dni]: string;
}
