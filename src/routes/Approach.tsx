import logowatermark from '../assets/logowatermark.png'

const Approach: React.FC = () => {

  return (
    <div
      className="w-[100vw] h-[100vh] overflow-hidden
      flex flex-col items-center justify-center gap-10
      bg-linear-to-b from-[#FFDADA] via0% to-[#FFEBEB] via-11% to-[#FFE8E8] via-70% to-[#F5B6B6] via-100%
    dark:bg-white"
    >
      <h1>
        Página "ABORDAGEM" em construção!!!
      </h1>

      <div className="flex flex-col items-center justify-center">
        <img src={logowatermark} />
        <h2 className="text-[#3D1876] font-bold text-2xl">
          Magali Leite Pastorino
        </h2>
        <h3 className="text-[#3D1876]">
          Psicóloga Clínica
        </h3>
      </div>

    </div>
  )

}

export default Approach