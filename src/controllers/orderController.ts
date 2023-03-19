import { getDoc, getDocs } from "firebase/firestore";
import { IOrder } from "../interfaces/Order";
import { orderCol } from "../utils/db";

export const getOrders = () => {
  let orders: IOrder[] = [];

  const orderDocs = async () => {
    return await getDocs(orderCol);
  }

  orderDocs().then(resolve => {
    resolve.forEach(orderDoc => {
      let order = orderDoc.data();
      
      if(order.statusRef !== null)
      {
        const statusDoc = async () => {
          return await getDoc(order.statusRef!);
        }

        statusDoc().then(resolve => {
          if(resolve.exists())
          {
            order.status = resolve.data();
          }
        })
      }

      if(order.deliveryMethodRef !== null)
      {
        const deliveryMethodDoc = async () => {
          return await getDoc(order.deliveryMethodRef!);
        } 

        deliveryMethodDoc().then(resolve => {
          if(resolve.exists())
          {
            let deliveryMethod = resolve.data();
            deliveryMethod.id = resolve.id;
            order.deliveryMethod = deliveryMethod;
          }
        })
      }

      if(order.paymentMethodRef !== null)
      {
        const paymentMethodDoc = async () => {
          return await getDoc(order.paymentMethodRef!);
        }

        paymentMethodDoc().then(resolve => {
          if(resolve.exists())
          {
            let paymentMethod = resolve.data();
            paymentMethod.id = resolve.id;
            order.paymentMethod = paymentMethod;
          }
        })
      }

      orders.push(order);
    })
  })

  return orders;
}