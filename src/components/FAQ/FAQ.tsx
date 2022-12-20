import * as React from 'react';
import Accordeon, { AccordeonProps } from '../commons/Accordeon/Accordeon';

const FAQ: React.FC<{list: AccordeonProps[]}> = ({list}) => {
  return (
    <div className="text-center mt-[90px]">
      <h1 className="text-[48px]">Często zadawane pytania</h1>
      <div className="w-[700px] h-[3px] bg-yellow my-[36px] ml-auto mr-auto"></div>
      {list.map((question: AccordeonProps, index: number) => <Accordeon key={index} title={question.title} content={question.content}/>)}
    </div>
  );
};

export default FAQ