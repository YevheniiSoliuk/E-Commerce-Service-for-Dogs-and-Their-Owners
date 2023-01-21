import React, {useState} from "react";
import Input from "./Input/Input";
import { IBrand } from "../../interfaces/Brand";
import { ICategory, ISubcategory } from "../../interfaces/Category";
import { addBrand, setCategory } from "../../features/FiltersSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

type ListProps = {
  title: string,
  items: IBrand[] | ICategory[] | undefined,
  subitems?: ISubcategory[]
}

const List = ({title, items, subitems}: ListProps) => {

  const [rotate, setRotate] = useState("before:rotate-45");
  const [showList, setShowList] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const toggleList = () => {
    rotate === "before:rotate-45" ? 
    setRotate("before:rotate-225 before:top-[8px]") : 
    setRotate("before:rotate-45")

    showList === false ?
    setShowList(true) :
    setShowList(false)
  }

  const isBrand = (item: any): item is IBrand => { 
    return 'description' in item;
  }

  return (
    <>
      <h2 className={"relative text-[16px] text-left mb-[15px] before:content[''] before:absolute before:w-[15px] before:h-[15px] before:border-b-[3px] before:border-r-[3px] before:border-green before:right-[30px] " + rotate + " hover:cursor-pointer"} onClick={toggleList}>{title}</h2>
      {showList && 
      <>
        <ul>
          {isBrand(items?.[0]) ?
          items?.map(brand => <li className="text-[12px] list-none hover:text-yellow active:text-yellow hover:cursor-pointer" key={brand.id}><Input id={brand.id.toString()} type="checkbox" name="brand" placeholder={brand.name} width="" action={()=>{dispatch(addBrand(brand as IBrand))}}/></li>) :
          items?.map(category => <li className="text-[12px] list-disc list-inside ml-[10px] mb-[10px]" key={category.name}>{category.name}
            <ul>
            {subitems?.map((subcategory: ISubcategory, index: number) => 
              subcategory.category_id === category.id ?
              <li className="text-[12px] list-disc list-inside ml-[10px] hover:text-yellow hover:cursor-pointer active:text-yellow" key={index} onClick={()=>dispatch(setCategory(subcategory))}>{subcategory.name}</li> : null
            )}
            </ul>
          </li>)
          }
        </ul>
      </>}
      <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
    </>
  )
}

export default List;