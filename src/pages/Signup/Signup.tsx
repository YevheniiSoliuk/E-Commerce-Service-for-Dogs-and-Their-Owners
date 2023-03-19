import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { checkEmailNewsletter, checkSMSNewsletter, checkTerms } from "../../features/registration/ContactFormSlice";
import { useRegisterMutation } from "../../features/auth/ApiAuthSlice";
import { isErrorWithMessage, isFetchBaseQueryError } from "../../helpers";
import { setCredentials } from "../../features/auth/AuthSlice";
import { IUser } from "../../interfaces/User";

import { Button } from "../../components/commons/Button/Button";
import { Input } from "../../components/commons/Input/Input";
import { Select } from "../../components/commons/Select/Select";
import { signUpUser } from "../../controllers/auth/user";

export const Signup = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("male");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [homeNumber, setHomeNumber] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const [province, setProvince] = useState<string>("Wojewodztwo");
  const [place, setPlace] = useState<string>("Miejscowosc");

  const [errMsg, setErrMsg] = useState<string>("");
  const [register] = useRegisterMutation();

  const terms: boolean = useSelector((state: RootState) => state.contactForm.checkedTerms);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");

    !terms ? setErrMsg("Check terms!") : setErrMsg("");
  }, [
    name, lastname, age, sex, email, phone, street, homeNumber, 
    postalCode, login, password, repeatPassword, terms
  ])

  const clearFields = () => {
    setLogin("");
    setPassword("");
    setEmail("");
    setPhone("");
    setProvince("");
    setPlace("");
    setPostalCode("");
    setStreet("");
    setHomeNumber("");
    setLogin("");
    setPassword("");
    setRepeatPassword("");
  }

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const payload: IUser = {
      name: name,
      lastname: lastname,
      email: email,
      phoneNumber: phone,
      address: {
        state: province,
        homeNumber: homeNumber,
        city: place,
        postalCode: postalCode,
        street: street
      },
      login: login,
      password: password,
      id: "",
      uid: "",
      photoURL: null,
      coins: null,
      addressRef: null,
      favouriteProductsRefs: null,
      favouriteProductsIDs: null,
      animalsRefs: null,
      animalsIDs: null,
      ordersRefs: null,
      ordersIDs: null
    }

    try {
      // const userData = await register(payload).unwrap();
      // const token: string = userData["Token"]["acccess token"];
      // const user: IUser = {
      //   id: userData["User Info"].id,
      //   name: userData["User Info"].name,
      //   lastname: userData["User Info"].surname,
      //   email: userData["User Info"].email,
      //   phoneNumber: userData["User Info"].phone_number, 
      //   login: userData["User Info"].login,
      //   password: userData["User Info"].password,
      //   photoURL: userData["User Info"].photo_url,
      //   address: userData["User Info"].address_id,
      //   coins: userData["User Info"].coins,
      //   is_admin: userData["User Info"].is_admin,
      //   favouriteProductsIDs: userData["User Info"].favourites
      // }
      
      // dispatch(setCredentials({user, token}));
      signUpUser(payload);
      clearFields();
      navigate("/profile");
    } catch(err) {   
      if(isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setErrMsg(errMsg);
      } else if(isErrorWithMessage(err)) {
        setErrMsg(err.message);
      } else {
        setErrMsg("Login Failed");
      } 
    }
  }

  return (
      <main className="my-[80px] text-left mx-[100px]">
        <h2 className="text-[48px] mb-[60px]">Rejestracja</h2>
        {errMsg ? 
          <div 
            className="w-full bg-dark_green/80 text-dark_red text-[20px] rounded-2xl border-2 
            border-green mb-[40px] py-[20px] pl-[30px]"
          >{errMsg}</div> : null
        }
        <form 
          method="post" 
          onSubmit={onHandleSubmit} 
          className="flex justify-between bg-dark_green/80 rounded-2xl border-2 border-green px-[40px]"
        >
          <section>
            <h3 className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center leading-[40px] tracking-normal">Dane Kontaktowe</h3>
            <Input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e)=>{setName(e.target.value)}} 
              placeholder="Imię" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="nazwisko" 
              type="text" 
              value={lastname} 
              onChange={(e)=>{setLastname(e.target.value)}} 
              placeholder="Nazwisko" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="age" 
              type="date" 
              value={age} 
              onChange={(e)=>{setAge(e.target.value)}} 
              placeholder="Wiek" 
              width="w-[340px]"
              required={true}/>
            <Select 
              id="sex" 
              values={["Mężczyzna", "Kobieta", "Inne"]} 
              placeholder="Płeć" 
              styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] 
              shadow-md mb-[30px] px-[20px] py-[10px] outline-0" 
              forPage=""
              value={sex} 
              onChange={(e)=>{setSex(e.target.value)}}/>
            <Input 
              id="email" 
              type="mail"
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} 
              placeholder="E-mail" 
              width="w-[340px]" 
              required={true}/>
            <Input 
              id="phone" 
              type="phone"
              value={phone} 
              onChange={(e)=>{setPhone(e.target.value)}} 
              placeholder="Numer komurkowy"
              width="w-[340px]"
              required={true}/>
          </section>
          <section>
            <h3 
              className="w-[300px] text-[32px] mb-[34px] mt-[39px] text-center 
              leading-[40px] tracking-normal"
            >Adres Dostawy</h3>
            <Select 
              id="wojew"
              values={["dolnośląskie", "mazowieckie", "pomorskie"]} 
              placeholder="Województwo" 
              styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] 
              shadow-md mb-[30px] px-[20px] py-[10px] outline-0" 
              forPage="" 
              value={province} 
              onChange={(e)=>{setProvince(e.target.value)}}/>
            <Select 
              id="place" 
              values={["Wrocław", "Lublin", "Warszawa"]} 
              placeholder="Miejscowość" 
              styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] 
              shadow-md mb-[30px] px-[20px] py-[10px] outline-0" 
              forPage="" 
              value={place} 
              onChange={(e)=>{setPlace(e.target.value)}}/>
            <Input 
              id="street" 
              type="text" 
              value={street} 
              onChange={(e)=>{setStreet(e.target.value)}} 
              placeholder="Ulica" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="home-number" 
              type="text" 
              value={homeNumber} 
              onChange={(e)=>{setHomeNumber(e.target.value)}} 
              placeholder="Nr domu" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="post" 
              type="text" 
              value={postalCode} 
              onChange={(e)=>{setPostalCode(e.target.value)}} 
              placeholder="Kod posztowy" 
              width="w-[340px]"
              required={true}/>
          </section>
          <section>
            <h3 
              className="w-[310px] text-[32px] mb-[34px] mt-[39px] text-center 
              leading-[40px] tracking-normal"
            >Dane Logowania</h3>
            <Input 
              id="login" 
              type="text"
              value={login} 
              onChange={(e)=>{setLogin(e.target.value)}} 
              placeholder="Login" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="pass" 
              type="password" 
              value={password} 
              onChange={(e)=>{setPassword(e.target.value)}} 
              placeholder="Hasło" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="repeat-pass" 
              type="password" 
              value={repeatPassword} 
              onChange={(e)=>{setRepeatPassword(e.target.value)}} 
              placeholder="Powtórz hasło" 
              width="w-[340px]"
              required={true}/>
            <Input 
              id="check" 
              type="checkbox" 
              placeholder="Chcę otrzymywać E-mail Newsletter (możliwość późniejszej rezygnacji)" 
              action={()=>{dispatch(checkEmailNewsletter())}}/>  <br/>
            <Input 
              id="check1" 
              type="checkbox" 
              placeholder="Chcę otrzymywać SMS Newsletter (możliwość późniejszej rezygnacji)" 
              action={()=>{dispatch(checkSMSNewsletter())}}/>  <br/>
            <Input 
              id="check2" 
              type="checkbox" 
              placeholder="Akceptuję warunki regulaminu i polityki prywatności. Zgadzam się na otrzymywanie informacji dotyczących zamówień w myśl ustawy z dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną." 
              action={()=>{dispatch(checkTerms())}}
              required={true}/>  <br/>
            <div className="flex justify-end mt-[30px] mb-[50px]">
              {errMsg !== "" ? 
                <Button 
                  text="Zarejestruj konto" 
                  type="submit" 
                  value="signup" 
                  styles="h-[50px] bg-orange/70 border-2 border-green rounded-3xl text-green 
                  text-base font-lemon px-6 py-2 w-[220px]" 
                  disabled={true}/> :
                <Button 
                  text="Zarejestruj konto" 
                  type="submit" 
                  value="signup" 
                  styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
                  text-green text-base font-lemon px-6 py-2 w-[220px]"/>
              }
            </div>
          </section>
        </form>
      </main>
  )
}