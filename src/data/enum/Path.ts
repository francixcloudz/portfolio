export enum Path {
  Home = "/",
  Sites = "/sites",
  Party = "/party",
  PartyThankYouPage = "/party/thank-you",
}

export enum ApiPath {
  MercadopagoSession = "/mercadopago-session",
  MercadopagoWebhook = "/mercadopago-webhook",
  CreateTickets = "/tickets-create",
  UpdateTickets = "/tickets-update",
  GetTickets = "/get-tickets",
}

export type ApiEndpoints = ApiPath;
