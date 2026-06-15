import selfie from '../assets/selfie.png'

const HomePage = () => {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden
    flex flex-col items-center justify-center gap-10
    bg-linear-to-b from-[#FFDADA] via0% to-[#FFEBEB] via-11% to-[#FFE8E8] via-70% to-[#F5B6B6] via-100%
    dark:bg-white">
      <div className="pt-10 mt-[10vh] flex flex-col items-center justify-center gap-5">

        <div className="border-b-2 pb-8 border-[#3D1876] ">
          <h1 className="text 2xl text-[#3D1876] font-bold italic">
            Refletir, entender, ressignificar, transformar.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={selfie} />
          <h2 className="text-[#3D1876] font-bold text-2xl">
            Magali Leite Pastorino
          </h2>
          <h3 className="text-[#3D1876]">
            Psicóloga Clínica
          </h3>
        </div>

      </div >

    </div >
  )
}

export default HomePage;