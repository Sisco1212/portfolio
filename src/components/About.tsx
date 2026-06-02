import {
FaUser,
FaEnvelope,
FaLocationDot,
} from "react-icons/fa6";


export default function About() {
return ( <section
   id="about"
   className="section-padding"
 > <div className="grid lg:grid-cols-2 gap-10">

    <div className=" p-10">
      <p className="uppercase text-blue-400 tracking-[5px] text-sm">
        About Me
      </p>

      <h2 className="text-5xl mt-4 font-bold uppercase">
        About Me
      </h2>

      <p className="mt-8 text-white/70">
        I'm Sito, a passionate Front-end Developer
        and Game Developer focused on building
        immersive digital experiences with premium
        UI, cinematic motion and modern frontend
        technologies.
      </p>

      {/* <button className="mt-10 px-8 py-4 border border-blue-500 hover:bg-blue-500 transition">
        Download CV
      </button> */}
    </div>

      <div className="relative">

{/* Glow Behind Card */}

  <div
    className="
      absolute
      inset-0
      scale-50
      rounded-3xl
      bg-blue-800/30
      blur-[70px]
      -z-10
    "
  />

{/* Card */}

  <div
    className="
      relative
      rounded-[20px]
      p-10
      space-y-6
      bg-[#0B1220]/60
      border
      border-white/15
      backdrop-blur-xl
    "
  >
     <div className="flex items-center gap-5 pb-5 border-b border-white/15"> 
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center"> 
      <FaUser className="text-white text-sm" /> 
      </div> 
      <div> 
        <p className="text-white font-bold text-sm"> Name </p> 
        <h3 className="text-md mt-1 text-white/70"> Sito Patrick </h3> 
        </div> 
        </div> 
        <div className="flex items-center gap-5 pb-5 border-b border-white/15"> 
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center"> 
        <FaEnvelope className="text-white text-sm" /> 
        </div> 
        <div> 
          <p className="text-white font-bold text-sm"> Email </p> 
          <h3 className="text-md mt-1 text-white/70"> sitopatrick2004@gmail.com </h3> 
          </div> 
          </div> 
          <div className="flex items-center gap-5 pb-5 border-b border-white/15"> 
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center"> 
          <FaLocationDot className="text-white text-sm" /> 
          </div> 
          <div> 
            <p className="text-white font-bold text-sm"> Location </p> 
            <h3 className="text-md mt-1 text-white/70"> Nigeria </h3> 
            </div> 
            </div> 
            <div className="flex items-center gap-5"> 
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center"> 
              <div className="w-3 h-3 rounded-full bg-green-400" /> 
              </div> 
              <div> 
                <p className="text-white font-bold text-sm"> Availability </p> 
                <h3 className="text-md mt-1 text-white/70"> Available for work </h3> </div> </div>
  </div>

</div>


     

  </div>
</section>


);
}
