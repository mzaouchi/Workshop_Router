import CardUser from "./CardUser"

const ListUser=({users})=>{
    return(
        <div>
            {
                users.map(el => <CardUser el={el}/>)
            }
        </div>
    )
}

export default ListUser