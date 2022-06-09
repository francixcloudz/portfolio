export enum Path {
  Home = "/",
  Sites = "/sites",
  Party = "/party",
}

export enum ApiPath {
  MercadopagoSession = "/mercadopago-session",
  CreateTickets = "/create-tickets",
  UpdateTicketsWebhook = "/update-tickets-webhook",
  GetTickets = "/get-tickets",
}

export type ApiEndpoints = ApiPath;
