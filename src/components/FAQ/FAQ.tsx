import * as React from 'react';
import { Accordeon, AccordeonProps } from '../commons/Accordeon/Accordeon';

export type FAQProps = {
  faqs: AccordeonProps[];
};

export const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <section className="text-center mt-[90px]">
      <h1 className="text-[48px]">Często zadawane pytania</h1>
      <div className="w-[700px] h-[3px] bg-yellow my-[36px] ml-auto mr-auto"></div>
      {faqs.map((question: AccordeonProps, index: number) => (
        <Accordeon
          key={index}
          title={question.title}
          content={question.content}
        />
      ))}
    </section>
  );
};
