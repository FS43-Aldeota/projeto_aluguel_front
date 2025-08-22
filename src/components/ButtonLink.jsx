const ButtonLink = ({ titulo, icon}) => {
    return (
        <button className="px-[26px] h-[40px] lg:h-[50px] text-gray-800 font-semibold lg:px-[34px] rounded-[8px] fill-gray-800 flex items-center gap-3  hover:text-orange-600 hover:fill-orange-600 duration-300 cursor-pointer">
            {icon}
            {titulo}
        </button>
    );
}

export default ButtonLink;