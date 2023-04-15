import React from 'react';

type ButtonProps = {
  text: string;
  value: string;
  type?: 'button' | 'submit' | 'reset';
  styles: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  value,
  styles,
  onClick,
  disabled
}) => {
  return (
    <>
      {disabled ? (
        <button
          type={type}
          className={styles}
          value={value}
          onClick={onClick}
          disabled
        >
          {text}
        </button>
      ) : (
        <button type={type} className={styles} value={value} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};
