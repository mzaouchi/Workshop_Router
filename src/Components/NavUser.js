import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/userList'>Users</Link></li>
                <li><Link to="/yassineContact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavUser