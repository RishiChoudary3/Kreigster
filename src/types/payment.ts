export interface PaymentResponse {
  response: {
    txnStatus: string;
    txnMessage: string;
    txnId: string;
    amount: string;
    paymentMode: string;
    bankRefNum?: string;
  };
}

export interface PaymentError {
  message: string;
  code?: string;
}