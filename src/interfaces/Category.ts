export interface ICategory {
  name: string,
  id: number,
  subcategories: Array<ISubcategory>
}

export interface ISubcategory extends ICategory {
  category_id: number
}