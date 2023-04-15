import { useState } from 'react';

export type AccordeonProps = {
  title: string;
  content: string;
};

export const Accordeon: React.FC<AccordeonProps> = ({ title, content }) => {
  const [rotate, setRotate] = useState('before:rotate-45');
  const [showContent, setShowContent] = useState(false);

  const toggleList = () => {
    rotate === 'before:rotate-45'
      ? setRotate('before:rotate-225 before:top-[8px]')
      : setRotate('before:rotate-45');

    setShowContent(!showContent);
  };

  return (
    <div className="w-full bg-dark_green border-green border-2 rounded-[15px] px-[30px] py-[30px] mb-[40px]">
      <h2
        className={
          "relative text-[32px] text-left hover:text-yellow before:content[''] before:absolute before:w-[15px] before:h-[15px] before:border-b-[3px] before:border-r-[3px] before:border-green before:right-[30px] before:hover:border-yellow hover:cursor-pointer " +
          rotate
        }
        onClick={toggleList}
      >
        {title}
      </h2>
      {showContent ? (
        <p className="text-[14px] text-left mt-[30px]">{content}</p>
      ) : null}
    </div>
  );
};
