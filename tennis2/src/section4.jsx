import img1 from './assets/pexels-cottonbro-5740529.jpg';

export default function Section4() {
  return (
    <section className="relative bg-black mt-10">
      <div className="flex flex-col h-full w-full items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center">
          Master the Game with Data
        </h1>
        <div className="flex flex-wrap h-auto w-full gap-4 p-4 items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-full sm:w-[20rem]">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              Top Aces This Week
            </h1>
            <img src={img1} className="object-fill h-[10rem] rounded" />
            <p className="text-left mt-1.5 text-lg md:text-xl lg:text-2xl">Carlos Alcaraz</p>
            <h5 className="text-sm md:text-base">15 aces</h5>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-full sm:w-[20rem]">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              Fastest Serves
            </h1>
            <img src={img1} className="object-fill h-[10rem] rounded" />
            <p className="mt-1.5 text-lg md:text-xl lg:text-2xl text-center">Nick Kyrgios: 135 mph</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-full sm:w-[20rem]">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              Upset Picks
            </h1>
            <img src={img1} className="object-fill h-[10rem] rounded" />
            <p className="hidden hover:visible text-center text-sm md:text-base">
              Select from top ATP & WTA players. Optimize your roster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}