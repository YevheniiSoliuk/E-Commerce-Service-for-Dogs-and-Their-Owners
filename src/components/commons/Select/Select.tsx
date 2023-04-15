import React from 'react';

type SelectProps = {
  id: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  values: string[];
  placeholder: string;
  forPage: string;
  styles: string;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  onChange,
  values,
  placeholder,
  forPage,
  styles
}) => {
  return (
    <div>
      {forPage === 'walk-history' ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            className={styles}
            value={value}
            onChange={onChange}
          >
            {values.map((value) => (
              <option key={id} value={value} className="border-2">
                {value}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-wrap justify-start flex-col text-left">
          <label
            htmlFor={id}
            className="text-sm underline decoration-1 decoration-green mb-[5px] ml-[20px]"
          >
            {placeholder}
          </label>
          <select
            id={id}
            name={name}
            className={styles}
            value={value}
            onChange={onChange}
          >
            {values.map((value) => (
              <option key={id} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
