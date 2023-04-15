import { DocumentReference } from 'firebase/firestore';

export interface ICategory {
  id: string;
  name: string;
  type: 'category';
}

export interface ISubcategory extends ICategory {
  categoryID: string;
  categoryRef: DocumentReference<string>;
}
