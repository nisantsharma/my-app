import React,{useState} from "react"
import './App.css';
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
import tick from "./images/icon-complete.svg";
import {format} from "date-fns";

function App() {
  const [confirmed,setConfirmed]=useState(false);
  const [name,setName]=useState("");
  const[cardNumber,setCardNumber]=useState("");
  const[date,setDate]=useState("01/23");
  const[cvc,setCvc]=useState("");
  return (
    <>
  <section>
  <div className="absolute -z-10 w-full">
  <picture>
    <source media="(min-width:768px)" srcSet={bgDesktop}/>
    <img src={bgMobile} alt="" className="w-full lg:w-1/3"/>
  </picture>
  </div>
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
    <div className="mt-10 mx-5 grid  grid-cols-1 ">
    <article className="front-card p-5 flex flex-col justify-between">
      <img src={logo} alt="" className='w-20 lg:w-28'/>
      <div>
        <h2 className='text-white text-xl lg:text-3xl mb-6 tracking-widest'>
        {cardNumber}  </h2>
        <ul className='flex items-center justify-between'>
          <li className='text-white uppercase text-xl tracking-widest'>
            {name}
          </li>
          <li className='text-white text-xl tracking-widest'>
          {format(new Date(date), "MM/yy")}
          </li>
        </ul>
      </div>
    </article>


    <article className="back-card relative lg:ml-20" >
    <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">
    {cvc}
    </p>
    </article>
    </div>
    <div className="pt-8 px-5 p-20 ">
      {!confirmed && <form className='flex flex-col justify-center gap-8 max-w-lg lg:h-screen'>
       <div> <label htmlFor='cardholder_name'>cardholder Name:</label>
        <input type="text" name="cardholder_name" id='cardholder_name' placeholder='e.g- NISANT SHARMA'
         required
         value={name}
         onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div> <label htmlFor='card_number'>CARD NUMBER:</label>
        <input type="text" name="card_number" id="card_number" 
        placeholder='e.g- 1234 5678 9012 3456 ' required 
        value={cardNumber.replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
         onChange={(e)=>setCardNumber(e.target.value)}
        maxLength={19} />
        </div>
      <article className='flex items-center justify-between gap-8'>
        <div className="flex-1"> <label htmlFor='expiry_date'>EXP.Date (MM/YY):</label>
        <input type="month" name="expiry_date" id="expiry_date" placeholder='e.g- "MM YY" '
        required 
        value={date}
         onChange={(e)=>setDate(e.target.value)}
        />
        </div>
        <div className="flex-1"> <label htmlFor='cvc'>CVC:</label>
        <input type="number" name="cvc" id="cvc" placeholder='e.g- 123 ' required
        value={cvc}
         onChange={(e)=>setCvc(e.target.value)}
        maxLength={3} />
        </div>
        </article>
        <button type='submit' className="btn" onClick={()=> setConfirmed(true)}>
        CONFIRM</button>
      </form>}
    {confirmed&&<ThankYou setConfirmed={setConfirmed}/>}
    </div>
  </div>
  </section>
    </>
  );
}

 function ThankYou({setConfirmed}) {
  return(<>
  <div className="flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto mt-96">
  <img src={tick} alt="" className="block mx-auto"/>
  <h1> Thank You!</h1>
  <p className="text-slate-400 text-center"> 
  we've added your card details
  </p>
  <button onClick={()=> setConfirmed(false)}
  className="btn block mx-auto mt-10 w-full">Continue</button>
   </div>
  </>)
  };



export default App;
