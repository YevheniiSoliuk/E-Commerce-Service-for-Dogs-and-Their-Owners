import React from "react";

type ButtonProps = {
  text: string, 
  value: string,
  width: string,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({text, value, width, onClick}: ButtonProps) => {
  return (
    <button className={`h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 ${width}`} value={value} onClick={onClick}>{text}</button>
  )
}

export default Button;