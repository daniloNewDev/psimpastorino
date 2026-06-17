type BaloomITPProps = {
  image: string
  title: string
  description: string
}

const BaloomITPProps = ({ image, title, description }: BaloomITPProps) => {

  return (
    <div
      className="bg-amber-50 w-95 h-95 mb-10 mt-10 pt-16 pl-8 pr-8
    rounded-tr-4xl rounded-bl-4xl
    shadow-xl"
    >
      <div className="flex items-start">
        <img className="" src={image} />
        <h2 className="text-[#3D1876] font-semibold ml-3 text-2xl">{title}</h2>
      </div>

      <div className="text-[#3D1876] mt-8">
        <p>{description}</p>
      </div>
    </div>
  )

}

export default BaloomITPProps