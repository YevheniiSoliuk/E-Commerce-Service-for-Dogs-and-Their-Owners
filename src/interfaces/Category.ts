export interface ICategory {
  name: string,
  id: number
}

export interface ISubcategory extends ICategory {
  category_id: number
}