export enum Path {
  Home = "/",
  Sites = "/sites",
  Party = "/party",
}

export enum ApiPath {
  GetCheckoutSession = "/mercadopago-session",
  CreateTicket = "/create-tickets",
  UpdateTicket = "/update-ticket",
  GetTickets = "/get-tickets",
}

export type ApiEndpoints = ApiPath;
