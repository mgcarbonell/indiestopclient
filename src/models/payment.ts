export default class Payment {
  public static apiUrl = process.env.REACT_APP_SERVER_URL as string
  static post = async (data: any): Promise<any> => {
    const response = await fetch(`${Payment.apiUrl}/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
  }
  static get = async () => {
    const response = await fetch(`${Payment.apiUrl}/stripe`)
    const data = await response.json()
    return data
  }

  static createPaymentIntent = async (data: any): Promise<any> => {
    const response = await fetch(
      `${Payment.apiUrl}/stripe/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    const json = await response.json()
    return json
  }
}
// import ApiCall from "./apicall"

// class StripeCall extends ApiCall {
//   constructor() {
//     super(process.env.REACT_APP_SERVER_URL as string, "stripe")
//   }
// }
// const StripePayment: StripeCall = new StripeCall()

// export default StripePayment
