import logo from "../asset/image/logo.svg";
import pokeball from "../asset/image/pokeball.svg"

const HeadPokeball = () => {
    return (
        <div className="header">
            <img className="logoHead" src={logo} alt="" />
            <img className="pokeballHead" src={pokeball} alt="" />
            <div className="lineHeadRed">.</div>
            <div className="lineHeadBlack">.</div>
        </div>
    );
}
 
export default HeadPokeball;