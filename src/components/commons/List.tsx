import React, {useState} from "react";
import Input from "./Input/Input";

type ListProps = {
  type: string,
  title: string,
  items: string[]
}

const List = ({type, title, items}: ListProps) => {

  const [rotate, setRotate] = useState("before:rotate-45");
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    rotate === "before:rotate-45" ? 
    setRotate("before:rotate-225 before:top-[8px]") : 
    setRotate("before:rotate-45")

    showList === false ?
    setShowList(true) :
    setShowList(false)
  }

  return (
    <>
      <h2 className={"relative text-[16px] text-left mb-[15px] before:content[''] before:absolute before:w-[15px] before:h-[15px] before:border-b-[3px] before:border-r-[3px] before:border-green before:right-[30px] " + rotate} onClick={toggleList}>{title}</h2>
      {showList && 
      <>
        <ul>
          {type === "brands" ? 
          items.map(brand => <li className="text-[12px] list-none hover:text-yellow active:text-yellow hover:cursor-pointer" key={brand}><Input id={brand} type="checkbox" name="brand" placeholder={brand} width=""/></li>) :
          items.map(category => <li className="text-[12px] list-disc list-inside ml-[10px] hover:text-yellow hover:cursor-pointer" key={category}>{category}</li>)  
          }
        </ul>
        <p className="text-[12px] text-left underline decoration-1 hover:text-yellow hover:cursor-pointer">Pokaż więcej</p>
      </>}
      <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
    </>
  )
}

export default List;