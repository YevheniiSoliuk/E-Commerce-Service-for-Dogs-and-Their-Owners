import React from "react";
import Button from "../../components/commons/Button/Button";
import Input from "../../components/commons/Input/Input";
import Select from "../../components/commons/Select/Select";
import SigninByServiceButton from "../../components/commons/SigninByServiceButton/SigninByServiceButton";
import { Link } from "react-router-dom";

import google from "../../assets/icons/google-logo.svg";
import facebook from "../../assets/icons/facebook-logo.svg";
import linkedin from "../../assets/icons/linkedin-logo.svg";

const Signup = () => {
  return (
    <>
      <div className="my-[80px] text-left mx-[100px]">
        <h2 className="text-[48px] mb-[60px]">Rejestracja</h2>  
        <form method="post" onSubmit={()=> {console.log("post")}} className="flex justify-between bg-dark_green/80 rounded-2xl border-2 border-green px-[40px]">
          <div>
            <h3 className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Dane Kontaktowe</h3>
            <span className="block text-[20px] mb-[17px] ml-[5px]">Zamawiasz jako:</span>
            <div className="flex justify-between mb-[20px] ml-[5px]">
              <Input id="firm" type="radio" name="typ" placeholder="Firma"/>
              <Input id="customer" type="radio" name="typ" placeholder="Osoba prywatna"/>
            </div>
            <Input id="name" type="text" name="name" placeholder="Imię"/>
            <Input id="nazwisko" type="text" name="lastname" placeholder="Nazwisko"/>
            <Input id="email" type="mail" name="mail" placeholder="E-mail"/>
            <Input id="phone" type="phone" name="phone" placeholder="Numer komurkowy"/>
          </div>
          <div>
            <h3 className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Adres Dostawy</h3>
            <Select id="wojew" name="wojews" values={["Dolnośląskie", "Mazowieckie", "Pomorskie"]} placeholder="Województwo" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" icon={false}/>
            <Select id="powiat" name="powiats" values={["Wrocław", "Lublin", "Warszawa"]} placeholder="Powiat" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" icon={false}/>
            <Select id="gmina" name="gminas" values={["Wrocław", "Lublin", "Warszawa"]} placeholder="Gmina" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" icon={false}/>
            <Select id="place" name="places" values={["Wrocław", "Lublin", "Warszawa"]} placeholder="Miejscowość" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" icon={false}/>
            <Input id="street" type="text" name="street" placeholder="Ulica"/>
            <Input id="post" type="text" name="postal-code" placeholder="Kod posztowy"/>
          </div>
          <div>
            <h3 className="w-[310px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Dane Logowania</h3>
            <Input id="login" type="text" name="login" placeholder="Login"/>
            <Input id="pass" type="password" name="pass" placeholder="Hasło"/>
            <Input id="pass" type="password" name="pass" placeholder="Powtórz hasło"/>
            <Input id="check" type="checkbox" name="enews" placeholder="Chcę otrzymywać E-mail Newsletter (możliwość późniejszej rezygnacji)"/>  <br/>
            <Input id="check1" type="checkbox" name="enews" placeholder="Chcę otrzymywać SMS Newsletter (możliwość późniejszej rezygnacji)"/>  <br/>
            <Input id="check2" type="checkbox" name="enews" placeholder="Akceptuję warunki regulaminu i polityki prywatności. Zgadzam się na otrzymywanie informacji dotyczących zamówień w myśl ustawy z dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną."/>  <br/>
            <div className="flex justify-end mt-[30px] mb-[50px]">
            <Link to="/profile">
              <Button text="Zarejestruj konto" value="signup" width="w-[220px]" onClick={()=>{}}/>
            </Link>
            </div>
          </div>
        </form>
      </div>
      <div >
        <h2 className="w-full text-[40px] text-center leading-[40px] mt-[80px] mb-[50px]">Zarejestruj się za pomocą</h2>
        <div className="flex justify-center mb-[80px]">
          <SigninByServiceButton value="google" onClick={() => {}} src={google} alt="google" text="Google"/>
          <div className="mx-[70px]">
            <SigninByServiceButton value="facebook" onClick={() => {}} src={facebook} alt="facebook" text="Facebook"/>
          </div>
          <SigninByServiceButton value="linkedin" onClick={() => {}} src={linkedin} alt="linkedin" text="Linkedin"/>
        </div>
      </div>
    </>
  )
}

export default Signup;