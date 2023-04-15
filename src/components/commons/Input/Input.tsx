import { ChangeEventHandler, useEffect, useState } from 'react';
import avatar from '../../../assets/images/avatar.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

type InputProps = {
  id?: string;
  type: string;
  name?: string;
  value?: string;
  state?: boolean | string;
  required?: boolean;
  placeholder?: string;
  width?: string;
  imgSrc?: string;
  price?: number;
  action?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  value,
  required,
  placeholder,
  width,
  state,
  imgSrc,
  price,
  action,
  onChange
}) => {
  const [isCheck, setIsCheck] = useState(false);
  const { brands } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    if (brands.length === 0) {
      setIsCheck(false);
    }
  }, [brands]);

  const toggleCheck = () => {
    if (action !== undefined) {
      action();
    }

    setIsCheck(!isCheck);
  };

  return (
    <>
      {type === 'checkbox' && (
        <div className="flex relative items-center ml-[25px]">
          {required ? (
            <input
              id={id}
              type={type}
              name={name}
              className="absolute left-[-20px] h-0 w-0 peer"
              required
            />
          ) : (
            <input
              id={id}
              type={type}
              name={name}
              className="absolute left-[-20px] h-0 w-0 peer"
              checked={isCheck}
            />
          )}
          <span className="absolute top-[15px] left-0 h-[20px] w-[20px] bg-yellow rounded-[5px] border-2 border-green ml-[-20px] peer-checked:before:content[''] peer-checked:before:w-[12px] peer-checked:before:h-[10px] peer-checked:before:border-b-[3px] peer-checked:before:border-r-[3px] peer-checked:before:border-green peer-checked:before:rotate-45 peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.4rem] peer-checked:before:-translate-y-[0.4rem] peer-checked:before:rounded-[3px] peer-invalid:border-dark_red"></span>
          {name === 'brand' ? (
            <label
              htmlFor={id}
              className="flex items-center w-[330px] ml-[15px] text-[12px] text-green tracking-normal mb-[10px]"
              onClick={toggleCheck}
            >
              <img
                src={imgSrc}
                alt={placeholder}
                className="inline-block w-[50px] h-[50px] border-full mr-[10px]"
              />
              <span className="text-[14px]">{placeholder}</span>
            </label>
          ) : (
            <label
              htmlFor={id}
              className="w-[330px] ml-[15px] text-[12px] text-green tracking-normal"
              onClick={action}
            >
              {placeholder}
            </label>
          )}
        </div>
      )}
      {type === 'radio' && (
        <div className="flex relative items-center mx-[30px] my-[10px] mb-[5px]">
          {required ? (
            <input
              id={id}
              type={type}
              name={name}
              value={value}
              checked={state === value}
              className="absolute left-[-20px] h-5 w-5 peer"
              onChange={onChange}
              required
            />
          ) : (
            <input
              id={id}
              type={type}
              name={name}
              value={value}
              checked={state === value}
              className="absolute left-[-20px] h-5 w-5 peer"
              onChange={onChange}
            />
          )}
          {name === 'payments' ? (
            <>
              <span className="absolute top-[30px] left-0 h-[20px] w-[20px] bg-yellow rounded-full border-2 border-green ml-[-20px] peer-checked:before:content-[''] peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-green peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.3rem] peer-checked:before:-translate-y-[0.3rem] peer-checked:before:rounded-full"></span>
              <label htmlFor={id} className="ml-[20px] text-[24px] text-green">
                <img
                  src={imgSrc}
                  alt={placeholder}
                  className="inline-block w-[100px] h-[80px] mr-[30px] hover:cursor-pointer"
                  onClick={action}
                />
                {placeholder}
              </label>
            </>
          ) : name === 'deliveries' ? (
            <>
              <span className="absolute top-[15px] left-0 h-[20px] w-[20px] bg-yellow rounded-full border-2 border-green ml-[-20px] peer-checked:before:content-[''] peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-green peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.3rem] peer-checked:before:-translate-y-[0.3rem] peer-checked:before:rounded-full"></span>
              <label
                htmlFor={id}
                className="flex items-center justify-between w-[100%] h-[50px] ml-[20px] text-[24px] text-green"
              >
                <img
                  src={imgSrc}
                  alt={placeholder}
                  className="inline-block w-[45px] mr-[30px] hover:cursor-pointer"
                  onClick={action}
                />
                <p className="w-[70%] text-left">{placeholder}</p>
                {price === 0 ? (
                  <p className="ml-[20px]">Gratis</p>
                ) : (
                  <p className="ml-[20px]">{price} zł</p>
                )}
              </label>
            </>
          ) : (
            <>
              <span className="absolute top-[30px] left-0 h-[20px] w-[20px] bg-yellow rounded-full border-2 border-green ml-[-20px] peer-checked:before:content-[''] peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-green peer-checked:before:absolute peer-checked:before:left-[50%] peer-checked:before:top-[50%] peer-checked:before:-translate-x-[0.3rem] peer-checked:before:-translate-y-[0.3rem] peer-checked:before:rounded-full"></span>
              <label htmlFor={id} className="ml-[5px] text-[14px] text-green">
                {placeholder}
              </label>
            </>
          )}
        </div>
      )}
      {type === 'toggle' && (
        <div className="flex relative items-center mx-5 mb-[30px]">
          {state === true ? (
            <>
              <input
                id={id}
                type="checkbox"
                name={name}
                className="absolute left-[-20px] h-0 w-0 peer"
                checked
              />
              <span className="inline-block relative h-[30px] w-[50px] bg-yellow/80 rounded-full border-2 border-green ml-[-20px] before:content[''] before:absolute before:bg-orange before:top-[-2px] before:left-[-2px] before:w-[30px] before:h-[30px] before:border-2 before:border-green before:rounded-full before:transition-all before:ease-linear before:duration-200 peer-checked:before:translate-x-[17px] peer-checked:bg-orange"></span>
            </>
          ) : (
            <>
              <input
                id={id}
                type="checkbox"
                name={name}
                className="absolute left-[-20px] h-0 w-0 peer"
              />
              <span className="inline-block relative h-[30px] w-[50px] bg-yellow/80 rounded-full border-2 border-green ml-[-20px] before:content[''] before:absolute before:bg-orange before:top-[-2px] before:left-[-2px] before:w-[30px] before:h-[30px] before:border-2 before:border-green before:rounded-full before:transition-all before:ease-linear before:duration-200"></span>
            </>
          )}
          <label
            htmlFor={id}
            className="w-full ml-[30px] text-[12px] text-green tracking-normal"
            onClick={action}
          >
            {placeholder}
          </label>
        </div>
      )}
      {type === 'file' && (
        <>
          <label
            htmlFor={id}
            className="absolute top-[60px] left-[520px]"
            onClick={action}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[50px] h-[50px] fill-green hover:fill-yellow hover:stroke-green hover:cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            id={id}
            type={type}
            name={name}
            className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-1"
          />
        </>
      )}
      {type !== 'checkbox' &&
        type !== 'radio' &&
        type !== 'file' &&
        type !== 'toggle' && (
          <div className="flex flex-wrap justify-start flex-col text-left">
            <label
              htmlFor={id}
              className="text-sm underline decoration-1 decoration-green mb-[5px] ml-[20px]"
            >
              {placeholder}
            </label>
            {required ? (
              <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={
                  width +
                  ' h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0 placeholder:text-green/50 invalid:border-dark_red'
                }
                required
              />
            ) : (
              <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={
                  width +
                  ' h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0 placeholder:text-green/50 invalid:border-dark_red'
                }
              />
            )}
          </div>
        )}
    </>
  );
};
