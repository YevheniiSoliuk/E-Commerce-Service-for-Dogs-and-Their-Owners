import React from 'react';

type SigninButtonProps = { 
  value: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  src: string,
  alt: string,
  text: string
}

const SigninByServiceButton = ({value, onClick, src, alt, text}: SigninButtonProps) => {
  return (
    <button className="w-[200px] h-[200px] bg-dark_green border-2 border-green hover:border-yellow rounded-[10px]" value={value} onClick={onClick}>
      <img src={src} alt={alt} className="block ml-auto mr-auto"/>
      <p className="text-center text-[20px] hover:text-yellow mt-[10px]">{text}</p>
    </button>
  )
}

export default SigninByServiceButton;