type BaloomITRProps = {
  image: string
  title: string
  description: string
}

const BaloomITR = ({ image, title, description }: BaloomITRProps) => {

  return (
    <div
      className="bg-amber-50 w-95 my-10 px-8 py-12
    rounded-tr-4xl rounded-bl-4xl shadow-xl
    flex flex-col items-center justify-center"
    >

      <img src={image} />
      <h2 className="text-[#3D1876] font-semibold mt-4 ml-3 text-2xl">{title}</h2>
      <p className="text-[#3D1876] mt-8 text-center">{description}</p>

    </div>
  )

}

export default BaloomITR