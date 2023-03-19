import { getDocs } from "firebase/firestore";
import { IPaymentMethod } from "../interfaces/PaymentMethod";
import { paymentMethodCol } from "../utils/db";

export const getPaymentMethods = () => {
  let paymentMethods: IPaymentMethod[] = [];

  const paymentMethodsDocs = async () => {
    return await getDocs(paymentMethodCol);
  }

  paymentMethodsDocs().then(resolve => {
    resolve.forEach(paymentMethodDoc => {
      let paymentMethod = paymentMethodDoc.data();
      paymentMethod.id = paymentMethodDoc.id;
      paymentMethods.push(paymentMethod);
    })
  })

  return paymentMethods;
}