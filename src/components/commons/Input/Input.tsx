import React, { ChangeEventHandler } from "react";
import avatar from "../../../assets/images/avatar.png";

type InputProps = {
  id: string,
  type: string,
  name: string,
  value?: string,
  placeholder: string | undefined,
  width: string,
  action?: ()=>void,
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({id, type, name, value, placeholder, width, action, onChange}: InputProps) => {

  return (
    <>
      {type === "checkbox" &&
        <div className="flex relative items-center ml-[25px]">
          <input id={id} type={type} name={name} className="absolute left-[-20px] h-0 w-0 peer"/>
          <span className="absolute top-1 left-0 h-[20px] w-[20px] bg-yellow rounded-[5px] border-2 border-green ml-[-20px] peer-checked:before:content[''] peer-checked:before:w-[12px] peer-checked:before:h-[10px] peer-checked:before:border-b-[3px] peer-checked:before:border-r-[3px] peer-checked:before:border-green peer-checked:before:rotate-45 peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.4rem] peer-checked:before:-translate-y-[0.4rem] peer-checked:before:rounded-[3px]"></span>
          {name === "brand" ?
          <label htmlFor={id} className="flex items-center w-[330px] ml-[15px] text-[12px] text-green tracking-normal mb-[10px]">
            <img src={avatar} alt={placeholder} className="inline-block w-[30px] h-[30px] border-full mr-[10px]"/>
            {placeholder}
          </label> : 
          <label htmlFor={id} className="w-[330px] ml-[15px] text-[12px] text-green tracking-normal" onClick={action}>
            {placeholder}
          </label>}
        </div>
      }
      {type === "radio" &&
        <div className="flex relative items-center mx-5 mb-[5px]">
          <input id={id} type={type} name={name} className="absolute left-[-20px] h-0 w-0 peer" checked/>
          <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-yellow rounded-full border-2 border-green ml-[-20px] peer-checked:before:content-[''] peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-green peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.3rem] peer-checked:before:-translate-y-[0.3rem] peer-checked:before:rounded-full"></span>
          <label htmlFor={id} className="ml-[5px] text-[14px] text-green" onClick={action}>
            {placeholder}
          </label>
        </div>
      }
      {type !== "checkbox" && type !== "radio" &&
        <div className="flex flex-wrap justify-start flex-col text-left">
          <label htmlFor={id} className="text-sm underline decoration-1 decoration-green mb-[5px] ml-[20px]">{placeholder}</label>
          <input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={width + " h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0 placeholder:text-green/50"}/>
        </div>
      }
    </>
  )
}

export default Input;