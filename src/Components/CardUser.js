import { Link } from "react-router-dom"

const CardUser=({el})=>{
    return(
        <div>
            <h5><Link to={`/profil/${el.id}`}>{el.name}</Link></h5>
        </div>
    )
}

export default CardUser