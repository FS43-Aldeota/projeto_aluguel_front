import logo  from "../assets/logo_footer.png";
const Footer = () => {
    return (
        <footer className="bg-orange-600 pt-[50px] pb-5 lg:px-[50px] lg:py-[32px] flex flex-col lg:flex-row items-center justify-between">
            <img src={logo} alt="Aluga Web" className="block mb-2"/>
            <h3 className="text-white font-bold text-[14px] lg:text-xl">Todos os direitos reservados.</h3>
        </footer>
    );
}

export default Footer;