import Image from "next/image";
import img from "../assets/Guaxinim.jpg"
// import { useState } from "react";

// const [span, setSpan] = useState(false)

// const showSpan = () => {
//   setSpan(!span)
// }

export default function Home() {
  return (
    <>
      <section className="bg-[url(../assets/bg-section.jpg)] bg-cover bg-no-repeat h-screen w-auto">
        <div className="">
          <Image src={img} alt="guaxino" className=" h-1/3 w-auto rounded-full"/>
          <h2 className="text-center text-white">alguma coisa</h2>
        </div>
      </section>
      <section className="bg-[url(../assets/bg-section.jpg)] bg-cover bg-no-repeat h-screen w-auto">
        {/* <button onClick={showSpan} className="text-white">clique</button>
        {span && (
          <span>clique fora</span>
        )} */}
      </section>
    </>
  );
}
