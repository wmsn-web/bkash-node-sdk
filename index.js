class Bkash {
  constructor({ appKey, appSecret, username, password, baseUrl }) {
    this.appKey = appKey;
    this.appSecret = appSecret;
    this.username = username;
    this.password = password;
    this.baseUrl = baseUrl || "https://checkout.pay.bka.sh/v1.2.0-beta";
  }

  async createPayment(amount, callbackURL) {
    // Example API call
    return {
      trxID: "TX12345",
      amount,
      callbackURL
    };
  }
}

module.exports = Bkash;
