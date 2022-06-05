export interface SessionResponse {
  amount: {
    currency: string;
    value: number;
  };
  applicationInfo: {
    adyenLibrary: {
      name: string;
      version: string;
    };
  };
  countryCode: string;
  expiresAt: string;
  id: string;
  merchantAccount: string;
  reference: string;
  returnUrl: string;
  sessionData: string;
}
