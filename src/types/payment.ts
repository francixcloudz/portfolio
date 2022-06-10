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
