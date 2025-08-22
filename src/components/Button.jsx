const Button = ({ titulo, icon}) => {
    return (
        <button className="bg-orange-600/20 px-[26px] h-[40px] lg:h-[50px] text-orange-600 font-semibold lg:px-[34px] rounded-[8px] fill-orange-600 flex items-center gap-3 hover:bg-orange-600 hover:text-white hover:fill-white duration-300 cursor-pointer">
            {icon}
            {titulo}
        </button>
    );
}

export default Button;