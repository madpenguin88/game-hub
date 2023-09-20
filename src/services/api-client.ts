import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
      key:"5d6b3e544ea343ea8cc5c8de938b5324"  
    }
})