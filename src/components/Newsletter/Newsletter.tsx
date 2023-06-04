import { useState } from 'react';
import { Button } from '../commons/Button/Button';
import { Input } from '../commons/Input/Input';
import { EmailContent } from '../commons/Email/EmailContent/EmailContent';

import emailjs from '@emailjs/browser';
import { render } from '@react-email/components';

import newsletterImage from '../../assets/images/messaging.png';
import { IProduct } from '../../interfaces/Order';
import AirbnbReviewEmail from '../commons/Email/EmailContent/example';

type NewsletterProps = {
  discountProducts: IProduct[];
};

const emailPreview = `Oferta nie do przeoczenia!👀 Zdobądź korzystne rabaty na wyżywienie!🍖`;

export const Newsletter: React.FC<NewsletterProps> = ({ discountProducts }) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(
      render(<EmailContent discountProducts={discountProducts} name={name} />, {
        pretty: true
      })
    );

    const emailParams: Record<string, unknown> | undefined = {
      email,
      email_title: emailPreview,
      email_content: render(
        <EmailContent discountProducts={discountProducts} name={name} />,
        {
          pretty: true
        }
      )
    };

    emailjs
      .send(
        'service_vus38fb',
        'template_bq9d74u',
        emailParams,
        'LextnAqXtONNSyoGy'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section
      className="flex justify-between items-center w-full h-[500px] bg-dark_green border-2 
      border-green rounded-[25px] py-[30px] px-[30px] mt-[60px] text-center"
    >
      <img src={newsletterImage} alt="newsletter_image" className="w-[40%]" />
      <div className="flex flex-col h-full justify-between items-center">
        <h2 className="text-[32px] font-bold mt-[20px] mb-[10px]">
          Zapisz się do newslettera
        </h2>
        <p className="text-[20px] mb-[30px]">
          Zapisz się na nasz newsletter, aby otrzymywać informacje o nowościach
          oraz promocjach w naszym sklepie.
        </p>
        <form
          className="w-full flex justify-between items-center"
          onSubmit={sendEmail}
        >
          <Input
            id="email"
            type="mail"
            name="email"
            placeholder="Email"
            width="w-[300px]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            width="w-[300px]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            type="submit"
            text="Zapisz się"
            value="subscribe"
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[150px] mb-[5px]"
          />
        </form>
        <p className="text-[14px]">
          Wyrażam zgodę na wykorzystywanie moich danych osobowych oraz
          informacji przez XXX Zoo oraz spółki partnerskie w tworzenia profili
          użytkowników służących do optymalizacji (personalizacji) ofert do
          momentu cofnięcia przeze mnie zgody na ich wykorzystywanie.
          Szczegółowe informacje znajdą Państwo w naszej Polityce prywatności.
        </p>
      </div>
    </section>
  );
};
