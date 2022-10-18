import React from "react";

type SelectProps = {
  id: string,
  name: string,
  values: string[],
  placeholder: string,
}

const Select = ({id, name, values, placeholder}: SelectProps) => {
  return (
    <div className="flex flex-wrap justify-start flex-col text-left">
      <label htmlFor={id} className="text-sm underline decoration-1 decoration-green mb-[5px] ml-[20px]">{placeholder}</label>
      <select id={id} name={name} className="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0">
        {values.map(value => <option key={id} value={value} className="boreder-2">{value}</option>)}
      </select>
    </div>
  )
}

export default Select;
