import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa";


export default function Contact() {
return ( <section
   id="contact"
   className="section-padding"
 > <div className=" relative">

    <div className="absolute inset-0  opacity-10"></div>

    <p className="uppercase text-blue-400 tracking-[5px] text-sm">
contact me </p>

  <h2 className="text-5xl font-bold mt-4 uppercase">
    get in touch
  </h2>

    <div className="mt-10 gap-5 relative z-10">

 <div className="flex items-center gap-5 pb-5 border-b border-white/15"> 
        <div className="w-16 h-16 rounded-xl text-2xl bg-white/5 flex items-center justify-center"> 
        <FaEnvelope className="text-white" /> 
        </div> 
        <div> 
          <p className="text-white font-bold text-sm"> Email </p> 
          <h3 className="text-md mt-1 text-white/70"> sitopatrick2004@gmail.com </h3> 
          </div> 
          </div> 
 <div className="flex items-center gap-5 pt-5 pb-5 border-b border-white/15"> 
        <div className="w-16 h-16 rounded-xl text-2xl bg-white/5 flex items-center justify-center"> 
        <FaGithub className="text-white" /> 
        </div> 
        <div> 
          <p className="text-white font-bold text-sm"> Github </p> 
          <h3 className="text-md mt-1 text-white/70"> Sisco1212 </h3> 
          </div> 
          </div> 
 <div className="flex items-center gap-5 pb-5 pt-5"> 
        <div className="w-16 h-16 rounded-xl text-2xl bg-white/5 flex items-center justify-center"> 
        <FaLinkedin className="text-white" /> 
        </div> 
        <div> 
          <p className="text-white font-bold text-sm"> LinkedIn </p> 
          <h3 className="text-md mt-1 text-white/70"> Sito Patrick </h3> 
          </div> 
          </div> 

    </div>

  </div>
</section>


);
}
