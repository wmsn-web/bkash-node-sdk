class Bkash {
  constructor({ appKey, appSecret, username, password, baseUrl }) {
    this.appKey = appKey;
    this.appSecret = appSecret;
    this.username = username;
    this.password = password;
    this.baseUrl = baseUrl || "https://checkout.pay.bka.sh/v1.2.0-beta";
  }

  async createPayment(amount, callbackURL) {
    return { trxID: "TX12345", amount, callbackURL };
  }

  async executePayment(paymentID) {
    return { paymentID, status: "Success", trxID: "TX12345" };
  }

  async refundPayment(paymentID, amount) {
    return { paymentID, refundedAmount: amount, status: "Refunded" };
  }
}

module.exports = Bkash;
