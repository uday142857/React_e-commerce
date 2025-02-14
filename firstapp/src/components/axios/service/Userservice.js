import axios from "axios"

export function Userservice(){
        var userpro=axios.get("https://randomuser.me/api/?results=10")
        
        return(userpro)
}

// userpro.then((user)=>{
        //     console.log("then")
        //     console.log(user)

        // }).catch((error)=>{
        //     console.log("catch")
        //     console.log(error)
        // })