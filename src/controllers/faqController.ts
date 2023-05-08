import { getDocs } from 'firebase/firestore';
import { faqType, faqCol } from '../utils/db';

export const getFAQ = async (type: string) => {
  let faqs: faqType[] = [];

  try {
    const faqsDocs = await getDocs(faqCol);

    faqsDocs.forEach((faqDoc) => {
      if (type === faqDoc.id) {
        faqs = [...faqDoc.data().faqs];
      }
    });
  } catch (e) {
    console.log(e);
  }

  return faqs;
};
