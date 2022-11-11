import React from "react";

type ButtonProps = {
  text: string,
  value: string,
  type?: "button" | "submit" | "reset" | undefined,
  styles: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, type, value, styles, onClick}: ButtonProps) => {
  return (
    <button type={type} className={styles} value={value} onClick={onClick}>{text}</button>
  )
}

export default Button;