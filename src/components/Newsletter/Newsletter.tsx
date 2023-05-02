import { Button } from '../commons/Button/Button';
import { Input } from '../commons/Input/Input';
import newsletterImage from '../../assets/images/messaging.png';

export const Newsletter = () => {
  return (
    <section
      className="flex justify-between items-center w-full h-[500px] bg-dark_green border-2 
      border-green rounded-[25px] py-[30px] px-[30px] mt-[60px] text-center"
    >
      <img src={newsletterImage} alt="newsletter_image" className="w-[600px]" />
      <div className="flex flex-col h-full justify-between items-center">
        <h2 className="text-[32px] mt-[20px] mb-[10px]">
          Zapisz sie do newslettera
        </h2>
        <p className="text-[16px] mb-[30px]">
          Zapisz się na nasz newsletter, aby otrzymywać informacje o nowościach
          oraz promocjach w naszym sklepie.
        </p>
        <div className="w-full flex justify-between items-center">
          <Input
            id="email"
            type="mail"
            name="Email"
            placeholder="Email"
            width="w-[300px]"
          />
          <Input
            id="name"
            type="text"
            name="Name"
            placeholder="Name"
            width="w-[300px]"
          />
          <Button
            text="Zapisz się"
            value="subscribe"
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[150px] mb-[5px]"
            onClick={() => {
              console.log('Zapisz się');
            }}
          />
        </div>
        <p className="text-[12px]">
          Wyrażam zgodę na wykorzystywanie moich danych osobowych oraz
          informacji przez Maxi Zoo oraz spółki partnerskie w tworzenia profili
          użytkowników służących do optymalizacji (personalizacji) ofert do
          momentu cofnięcia przeze mnie zgody na ich wykorzystywanie.
          Szczegółowe informacje znajdą Państwo w naszej Polityce prywatności.
        </p>
      </div>
    </section>
  );
};
