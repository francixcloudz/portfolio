export enum Path {
  Home = "/",
  Sites = "/sites",
  Party = "/party",
}

export enum ApiPath {
  MercadopagoSession = "/mercadopago-session",
  MercadopagoWebhook = "/mercadopago-webhook",
  CreateTickets = "/tickets-create",
  AddPaymentIdToTickets = "/tickets-add-paymentId",
  GetTickets = "/get-tickets",
}

export type ApiEndpoints = ApiPath;
