
const Header = () => {
  return (
    <header className="h-[10vh] w-[100vw] m-0 p-0
     grid grid-cols-2 items-center justify-items-center fixed
    overflow-auto bg-linear-to-b from-[#FFDADA] via0% to-[#FFEBEB] via-11% to-[#FFE8E8] via-70% to-[#F5B6B6] via-100%"
    >
      <div></div>
      <div className="h-[10vh] flex items-center justify-center">
        <img className="w-[60%]" src="../public/logoname.png"></img>
        <img className="h-[80%]" src="../public/logoheader.png"></img>
      </div>
    </header >
  )
}

export default Header;