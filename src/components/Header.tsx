import logoName from '../assets/logoName.png'
import logoHeader from '../assets/logoHeader.png'
import menuclose from '../assets/menuclose.png'
import menuhamburger from '../assets/menuhamburger.png'
import logowatermark from '../assets/logowatermark.png'

import { useState } from 'react'

import { Link } from 'react-router-dom'


const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <header className="h-[10vh] w-[100vw] m-0 p-0
     grid grid-cols-2 overflow-hidden fixed
    overflow-auto 
    bg-linear-to-b from-[#FFDADA] via0% to-[#FFEBEB] via-11% to-[#FFE8E8] via-70% to-[#F5B6B6] via-100%"
    >
      <div className="sm:hidden flex">
        <button
          onClick={() => setOpen(!open)}
          className="flex"
        >
          <img src={menuhamburger} className="w-[45px] h-[45px] ml-4 mt-auto mb-auto" />
        </button>
      </div>

      <div className="h-[10vh] flex items-center justify-center">
        <img className="w-[60%]" src={logoName}></img>
        <img className="h-[80%]" src={logoHeader}></img>
      </div>

      {open && (
        <div
          className="fixed inset-0
          bg-gradient-to-b from-[#FFDADA] to-[#F5B6B6]
          sm:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className={`fixed top-0 left-0 h-screen w-full bg-[#FFDADA] transform
      ${open ? 'translate-x-0' : '-translate-x-full'}
      transition-transform duration-300 ease-in-out sm:hidden`}
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            {/* Botão de fechar */}
            <div className="flex justify-start pl-4 pt-4">
              <button onClick={() => setOpen(false)}>
                <img src={menuclose} alt="Fechar" className="" />
              </button>
            </div>

            {/* Links */}
            <div
              className="flex flex-col items-center justify-start h-full
              text-3xl font-sans font-semibold text-[#3D1876]"
            >
              <Link className="p-2" to="/" onClick={() => setOpen(false)}>Início</Link>
              <Link className="p-2" to="/about" onClick={() => setOpen(false)}>Sobre Mim</Link>
              <Link className="p-2" to="/approach" onClick={() => setOpen(false)}>Abordagem</Link>
              <Link className="p-2" to="/online" onClick={() => setOpen(false)}>Atendimento On-line</Link>
              <Link className="p-2" to="/enterprises" onClick={() => setOpen(false)}>Empresas</Link>
              <Link className="p-2" to="/contacts" onClick={() => setOpen(false)}>Contatos</Link>
              <img src={logowatermark} />
            </div>
          </nav>
        </div>
      )}

    </header >
  )
}

export default Header;