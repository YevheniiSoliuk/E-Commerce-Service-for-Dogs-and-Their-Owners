import * as React from 'react';
import { Accordeon } from '../commons/Accordeon/Accordeon';
import { faqsType, faqType } from '../../utils/db';

export const FAQ: React.FC<faqsType> = ({ faqs }) => {
  return (
    <section className="text-center mt-[90px]">
      <h1 className="text-[48px]">Często zadawane pytania</h1>
      <div className="w-[700px] h-[3px] bg-yellow my-[36px] ml-auto mr-auto"></div>
      {faqs.length === 0 ? (
        <section className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] my-[30px] mx-[50px]">
          <h2 className="text-[32px] text-center">Loading....</h2>
        </section>
      ) : (
        faqs.map((faq: faqType, index: number) => (
          <Accordeon key={index} title={faq.question} content={faq.answer} />
        ))
      )}
    </section>
  );
};
