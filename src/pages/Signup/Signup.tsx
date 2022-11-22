import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button/Button";
import Input from "../../components/commons/Input/Input";
import Select from "../../components/commons/Select/Select";
import SigninByServiceButton from "../../components/commons/SigninByServiceButton/SigninByServiceButton";

import google from "../../assets/icons/google-logo.svg";
import facebook from "../../assets/icons/facebook-logo.svg";
import linkedin from "../../assets/icons/linkedin-logo.svg";
import { AppDispatch } from "../../store/store";
import { checkEmailNewsletter, checkSMSNewsletter, checkTerms } from "../../features/registration/ContactFormSlice";
import axios from "axios";

const REGISTER_URL: string = "user/register/";

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [province, setProvince] = useState("Wojewodztwo");
  const [place, setPlace] = useState("Miejscowosc");

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const payload: object = {
      name: name,
      surname: lastname,
      email: email,
      phone_number: phone,
      state: province,
      city: place,
      post_code: postalCode,
      street: street,
      login: login,
      password: password,
      password_repeat: repeatPassword
    }
    
    console.log(payload);

    try{
      const response = await axios.create({
        baseURL: "http://localhost:8090/",
      }).post(
        REGISTER_URL,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      console.log(response.data);
      navigate("/profile");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div className="my-[80px] text-left mx-[100px]">
        <h2 className="text-[48px] mb-[60px]">Rejestracja</h2>  
        <form method="post" onSubmit={onHandleSubmit} className="flex justify-between bg-dark_green/80 rounded-2xl border-2 border-green px-[40px]">
          <div>
            <h3 className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Dane Kontaktowe</h3>
            <Input id="name" type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Imię" width="w-[340px]"/>
            <Input id="nazwisko" type="text" name="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder="Nazwisko" width="w-[340px]"/>
            <Input id="age" type="date" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Wiek" width="w-[340px]"/>
            <Select id="sex" name="sex" values={["Mężczyzna", "Kobieta", "Inne"]} placeholder="Płeć" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" forPage="" value={sex} onChange={(e)=>{setSex(e.target.value)}}/>
            <Input id="email" type="mail" name="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="E-mail" width="w-[340px]"/>
            <Input id="phone" type="phone" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Numer komurkowy" width="w-[340px]"/>
          </div>
          <div>
            <h3 className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Adres Dostawy</h3>
            <Select id="wojew" name="wojews" values={["dolnośląskie", "mazowieckie", "pomorskie"]} placeholder="Województwo" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" forPage="" value={province} onChange={(e)=>{setProvince(e.target.value)}}/>
            <Select id="place" name="places" values={["Wrocław", "Lublin", "Warszawa"]} placeholder="Miejscowość" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" forPage="" value={place} onChange={(e)=>{setPlace(e.target.value)}}/>
            <Input id="street" type="text" name="street" value={street} onChange={(e)=>{setStreet(e.target.value)}} placeholder="Ulica" width="w-[340px]"/>
            <Input id="post" type="text" name="postal-code" value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}} placeholder="Kod posztowy" width="w-[340px]"/>
          </div>
          <div>
            <h3 className="w-[310px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Dane Logowania</h3>
            <Input id="login" type="text" name="login" value={login} onChange={(e)=>{setLogin(e.target.value)}} placeholder="Login" width="w-[340px]"/>
            <Input id="pass" type="password" name="pass" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Hasło" width="w-[340px]"/>
            <Input id="repeat-pass" type="password" name="pass" value={repeatPassword} onChange={(e)=>{setRepeatPassword(e.target.value)}} placeholder="Powtórz hasło" width="w-[340px]"/>
            <Input id="check" type="checkbox" name="enews" placeholder="Chcę otrzymywać E-mail Newsletter (możliwość późniejszej rezygnacji)" action={()=>{dispatch(checkEmailNewsletter())}}/>  <br/>
            <Input id="check1" type="checkbox" name="enews" placeholder="Chcę otrzymywać SMS Newsletter (możliwość późniejszej rezygnacji)" action={()=>{dispatch(checkSMSNewsletter())}}/>  <br/>
            <Input id="check2" type="checkbox" name="enews" placeholder="Akceptuję warunki regulaminu i polityki prywatności. Zgadzam się na otrzymywanie informacji dotyczących zamówień w myśl ustawy z dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną." action={()=>{dispatch(checkTerms())}}/>  
            <br/>
            <div className="flex justify-end mt-[30px] mb-[50px]">
              <Button text="Zarejestruj konto" type="submit" value="signup" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[220px]"/>
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