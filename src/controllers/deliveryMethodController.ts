import { getDoc, getDocs } from 'firebase/firestore';
import { IDeliveryMethod } from '../interfaces/DeliveryMethod';
import { deliveryMethodCol } from '../utils/db';

export const getDeliveryMethods = () => {
  const deliveryMethods: IDeliveryMethod[] = [];

  const deliveryMethodsDocs = async () => {
    return await getDocs(deliveryMethodCol);
  };

  deliveryMethodsDocs().then((resolve) => {
    resolve.forEach((deliveryMethodDoc) => {
      const deliveryMethod = deliveryMethodDoc.data();
      deliveryMethod.id = deliveryMethodDoc.id;

      if (deliveryMethod.postalPunctsRefs) {
        deliveryMethod.postalPuncts = [];

        deliveryMethod.postalPunctsRefs.forEach((postalPunctRef) => {
          const postalPunctDoc = async () => {
            return await getDoc(postalPunctRef);
          };

          postalPunctDoc().then((resolve) => {
            if (resolve.exists()) {
              const postalPunct = resolve.data();
              postalPunct.id = resolve.id;
              deliveryMethod.postalPuncts.push(postalPunct);
            }
          });
        });
      }

      deliveryMethods.push(deliveryMethod);
    });
  });

  return deliveryMethods;
};
