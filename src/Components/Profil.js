import { Link, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {djeja} = useParams()
    const found = users.find(el=> el.id == djeja)
    // console.log(found)
    return(
        <div>
            <h3>{found.name}</h3>
            <h4>{found.age}</h4>
            <a><Link to='/'>Return Home</Link></a>
        </div>
    )
}

export default Profil