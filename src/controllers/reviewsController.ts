import { getDocs } from 'firebase/firestore';
import { shopReviewsCol } from '../utils/db';
import { IShopReviews } from '../interfaces/Reviews';

export const getShopReviews = async () => {
  const shopReviews: IShopReviews[] = [];

  try {
    const shopReviewsSnapshot = await getDocs(shopReviewsCol);

    shopReviewsSnapshot.forEach((shopReview) => {
      if (shopReview.exists()) {
        shopReviews.push(shopReview.data());
      }
    });
  } catch (error) {
    console.log(error);
  }

  return shopReviews;
};
