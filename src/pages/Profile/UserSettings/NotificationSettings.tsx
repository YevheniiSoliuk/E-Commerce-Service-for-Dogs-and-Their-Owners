import { checkEmailNewsletter, checkEmailTransmition, checkSMSNewsletter } from '../../../features/registration/ContactFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';

import { Input } from '../../../components/commons/Input/Input';

export const NotificationSettings = () => {
  const {
    checkedEmailNewsletter, 
    checkedSMSNewsletter, 
    checkedEmailTransmition
  } = useSelector((state: any) => state.contactForm);

  const dispatch: AppDispatch = useDispatch();
  
  return (
    <section 
      className="w-[950px] h-[100%] bg-dark_green border-2 border-green 
      rounded-[25px] py-[40px] px-[50px]"
    >
      <h2 className="text-[32px] text-left mb-[50px]">Powiadomienia</h2>
      <Input 
        id="toggle1" 
        type="toggle" 
        name="toggle" 
        state={checkedEmailNewsletter} 
        placeholder="Chcę otrzymywać E-mail Newsletter (możliwość późniejszej rezygnacji)" 
        action={()=>{dispatch(checkEmailNewsletter())}}
      />
      <Input 
        id="toggle2" 
        type="toggle" 
        name="toggle" 
        state={checkedSMSNewsletter} 
        placeholder="Chcę otrzymywać SMS Newsletter (możliwość późniejszej rezygnacji)" 
        action={()=>{dispatch(checkSMSNewsletter())}}
      />
      <Input 
        id="toggle3" 
        type="toggle" 
        name="toggle" 
        state={checkedEmailTransmition} 
        placeholder="Wyrażam zgodę na przekazanie adresu e-mail do ceneo.pl, okazje.info oraz opineo.pl w celu zbadania opinii o poziomie zadowolenia z zakupu w sklepie." 
        action={()=>{dispatch(checkEmailTransmition())}}
      />
    </section>
  );
}