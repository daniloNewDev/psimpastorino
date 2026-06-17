import selfie from '../assets/selfie.png'
import BaloomITPProps from '../components/BaloomITP';
import mandalabaloom1 from '../assets/photobaloom/mandalabaloom1.png'

import BaloomITLProps from '../components/BaloomITL';
import atendimento1 from '../assets/photobaloom/atendimento1.png'
import atendimento3 from '../assets/photobaloom/atendimento3.png'

import BaloomITRProps from '../components/BaloomITR'
import atendimento2 from '../assets/photobaloom/atendimento2.png'

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

        <div className="w-full mt-12 text-[#3D1876] font-bold text-xl flex flex-col items-center justify-center">
          <h2>TRANSFORME SUA VIDA COM</h2>
          <h2>A PSICOLOGIA ANALÍTICA</h2>
        </div>

        <BaloomITPProps
          image={mandalabaloom1}
          title={`Viva uma vida mais leve e significativa!`}
          description={`Melhore seus relacionamentos, supere traumas e desenvolva seu potencial criativo. Descubra um propósito de vida que ressoa verdadeiramente com você.`}
        />

      </div >

      <div className="w-full mt-6 mb-8 text-[#3D1876] font-bold text-xl flex flex-col items-center justify-center">
        <h2>Agende sua consulta e</h2>
        <h2>sua jornada de</h2>
        <h2>autoconhecimento hoje mesmo!</h2>
      </div>

      <BaloomITLProps
        image={atendimento1}
        title={"Fortaleça Relacionamentos"}
        description={"A terapia melhora a comunicação, resolve conflitos e fortalece relacionamentos saudáveis."}
      />

      <div className="w-full my-6 text-[#3D1876] text-xl flex flex-col items-center justify-center">
        <h2 className="font-bold">Supere Traumas</h2>
        <p>A terapia pode ajudar a processar os traumas e</p>
        <p>encontrar maneiras de superá-los.</p>
      </div>

      <BaloomITRProps
        image={atendimento2}
        title={"Gerencie Emoções"}
        description={"A terapia pode ajudar a entender e gerenciar suas emoções."}
      />

      <div className="w-full my-6 text-[#3D1876] text-xl flex flex-col items-center justify-center">
        <h2 className="font-bold">Entenda sua Identidade</h2>
      </div>

      <BaloomITLProps
        image={atendimento3}
        title={"Sua Identidade"}
        description={"A terapia pode ser um espaço seguro para explorar questões pessoais e ganhar clareza sobre a própria identidade."}
      />

    </div >
  )
}

export default HomePage;