export default function Hero() {
  return (
    <section className="w-full min-h-screen relative">
      <img
        alt=""
        src="/img/Hero/HeroBg.png"
        className="absolute w-full -z-[1]  "
        draggable="false"
      />

      <div className="flex gap-x-[1vw] pt-[6vh] pl-[6vw]">
        <img
          alt=""
          src="/img/Hero/NavLogo.png"
          className="w-[3vw] h-[6vh] "
          draggable="false"
        />
        <h1 className="text-[2vw] font-mitr text-white">EZParenting</h1>
      </div>

      <div className="flex justify-center items-center gap-x-[2vw]">
        <h1 className="text-[2.4vw]/[2.5vw] font-inter text-white pr-[4vw]">
          Lebih Mudah Jalani Peranmu sebagai <br/> Orang Tua dengan EzParenting
        </h1>
        <img
          alt=""
          src="/img/Hero/IconHero.png"
          className="w-[30vw] h-[45vh] "
          draggable="false"
        />
      </div>
    </section>
  );
}
