import Button from "./Button";

const Filtro = ({ titulo }) => {
    return (
        <div className="px-[28px] py-[34px]">
            <h3 className="text-gray-800 font-semibold">{titulo}</h3>
            <div className="flex gap-4 mt-[14px]" >
                <Button titulo="+1" />
                <Button titulo="+2" />
                <Button titulo="+3" />
                <Button titulo="+4" />
            </div>
        </div>
    );
}

export default Filtro;