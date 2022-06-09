import vector9 from "../../asset/vectors/Vector9.svg"

const Stats = ({pokemon}) => {
    return (
        <div className="boxProgress"> 
            <div className="boxTitleProgress">
                <h3>Stats</h3>
                <img className="vectorStats"  src={vector9} alt="" />
            </div>                                               
            <p className="statTitle"><b>HP</b></p>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${pokemon.stats?.[0].base_stat}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                <p> <b>{pokemon.stats?.[0].base_stat}/150</b></p>
            </div>
            <p className="statTitle"><b>Attack</b></p>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width: `${pokemon.stats?.[1].base_stat}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <p> <b>{pokemon.stats?.[1].base_stat}/150</b></p>
            </div>
            <p className="statTitle"><b>Defense</b></p>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${pokemon.stats?.[2].base_stat}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                <p> <b>{pokemon.stats?.[2].base_stat}/150</b></p>
            </div>
            <p className="statTitle"><b>Speed</b></p>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width: `${pokemon.stats?.[5].base_stat}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                <p> <b>{pokemon.stats?.[5].base_stat}/150</b></p>
            </div>    
        </div>
    );
}
 
export default Stats;