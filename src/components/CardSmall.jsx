import img from "../assets/images/logo.png"

const colorMap = {
    gray: 'bg-[#D3DFDE]',
    yellow: 'bg-[#F3FE98]'
}

const CardSmall = ({ bgColor = "gray", price = "2,230", type = "Salary", lastDigits = 6917 }) => {
    return (
        <div className={`  w-[148px] space-y-7 h-[170px] px-4 py-6 rounded-4xl ${colorMap[bgColor]}`}>
            <img src={img} width={40} height={20} alt="" />
            <div>
                <p className="text-xs">{type}</p>
                <p className=" font-[sf_pro_display]">$ {price}</p>
            </div>
            <p className="text-xs">** {lastDigits}</p>
        </div>
    )
}

export default CardSmall