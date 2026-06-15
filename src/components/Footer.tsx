const Footer = () => {
  return (
    <footer className='bg-radial from-[#1E608C] from-0% to-[#144566] via-50% to-[#0F3B54] to-100%
    w-full
    flex flex-col gap-12 items-center justify-around'>
      <div className="flex flex-col items-center gap-3 justify-center">

        <h3 className='font-serif text-2xl h-[10vh] text-white text-center'>Entre em Contato:</h3>

        <a href="tel:+5511997638331" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="../public/phonelogo.png" className='w-8' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>(11) 9 9763-8331</h4>
          </div>
        </a>

        <a href="mailto:">
          <div className='flex items-center'>
            <img src="../public/maillogo.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>psimpastorino@gmail.com</h4>
          </div>
        </a>


      </div>

      <div className="flex flex-col items-center gap-3 justify-center">
        <h3 className='font-serif text-2xl h-[10vh] text-white text-center'>Siga também pelas redes sociais:</h3>


        <a href="https://api.whatsapp.com/send?phone=5511997638331" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="../public/whatslogo.png" className='w-8' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>(11) 9 9763-8331</h4>
          </div>
        </a>

        <a href="https://www.instagram.com/lemagpastorino/" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="../public/instalogo.png" className='w-8' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>@psimpastorino</h4>
          </div>
        </a>

        <a href="https://www.facebook.com/lemagpastorino/" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="../public/facelogo.png" className='w-8' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>@psimpastorino</h4>
          </div>
        </a>

      </div>

      <div className="h-[10vh]">
        <h4 className='text-[#cfcfcf] font-sans text-sm ml-4 my-4'>Todos direitos reservados a</h4>
        <h4 className='text-[#cfcfcf] squada-one-regular text-center text-sm'>MPastorino &trade;</h4>
      </div>
    </footer>
  )
}

export default Footer