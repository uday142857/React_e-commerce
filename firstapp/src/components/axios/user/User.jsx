import "./User.css"

function User({user}){
    return(
        <div className="card">
            <img src={user.picture.medium} height="200px" width="100%"/>
            <h3>{user.name.first}</h3>
            <h5>{user.gender}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, maxime?</p>
           

        </div>
    )
}
export default User