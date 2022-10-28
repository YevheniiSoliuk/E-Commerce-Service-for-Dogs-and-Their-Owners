import React from "react";

type ButtonProps = {
  text: string, 
  value: string,
  styles: string,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({text, value, styles, onClick}: ButtonProps) => {
  return (
    <button className={styles} value={value} onClick={onClick}>{text}</button>
  )
}

export default Button;