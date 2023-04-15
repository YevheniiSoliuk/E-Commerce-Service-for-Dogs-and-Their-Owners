import { getDocs } from 'firebase/firestore';
import { IStatus } from '../interfaces/Order';
import { statusCol } from '../utils/db';

export const getStatuses = () => {
  const statuses: IStatus[] = [];

  const statusesDocs = async () => {
    return await getDocs(statusCol);
  };

  statusesDocs().then((resolve) => {
    resolve.forEach((statusDoc) => {
      const status = statusDoc.data();
      statuses.push(status);
    });
  });

  return statuses;
};
