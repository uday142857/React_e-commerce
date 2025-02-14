import { useState } from "react";
import { Userservice } from "../service/Userservice"
import User from "../user/User";
import "./Users.css"
 function Users(){

    var [user,setUser]=useState([])
    var [filteruser,setFilteruser]=useState([])

    const sendRe=()=>{
        // Userservice()
    var userpross=Userservice();
    userpross.then((res)=>{
        setUser(res.data.results)
        setFilteruser(res.data.results)
        console.log(res)
    }).catch((error)=>{
        alert("failed")
    })
   
    }

    const filterusers=(gender)=>{
        if(gender==="all"){
            setFilteruser(user)
            // setUser(filteruser)
        }
        else{
            setFilteruser(user.filter((user)=>{
                return user.gender===gender
            }))
            // setUser(filteruser.filter((user)=>{
            //     return user.gender===gender
            // }))
        }

    }

    // const allusers=()=>{
    //     filterusers("all")
    // }
    // const maleusers=()=>{
    //     filterusers("male")
    // }
    // const femaleusers=()=>{
    //     filterusers("female")
    // }

    return(
        <div>
            <h1>User Information</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, adipisci nisi, dicta laboriosam molestias doloribus deserunt enim unde, ex blanditiis ipsum earum consequuntur porro vel minus rerum iusto? Dolores doloribus inventore eligendi sit nisi aut, est nemo dolorem reiciendis harum labore fugit obcaecati sunt perferendis, dolor culpa unde, quo beatae distinctio doloremque eveniet provident quia! Odio, exercitationem maiores aut adipisci quasi eius quas maxime fuga quaerat laudantium error, sed ipsam voluptatem pariatur praesentium molestias architecto iste repellat id esse, consequuntur voluptatum. Ducimus nam praesentium exercitationem cum at voluptatem, fugiat, assumenda sint odit, sequi modi fuga veritatis perspiciatis molestiae voluptatum a!</p>
            <button onClick={sendRe}>Get user</button><br></br>
            <input name="gender" type="radio" onChange={()=>filterusers("all")}></input>
            <label  >All</label><br></br>
            <input name="gender" type="radio" onChange={()=>filterusers("male")}></input>
            <label>Male</label><br></br>
            <input name="gender" type="radio" onChange={()=>filterusers("female")}></input>
            <label>Female</label>
            <div className="u1">
                {
                    filteruser.map((element,indax)=>{
                        return <User user={element}/>
                    })
                }
            </div>
            
            
        </div>
    )
 }
 export default Users