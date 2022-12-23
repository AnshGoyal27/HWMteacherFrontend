import axios from "axios";

export function Verify(token){
    axios({
        method:'post',
        url:'https://hw-mteacher-backend-5oth7ar2h-anshgoyal27.vercel.app/verify',
        headers:{
            'authorization': token
        }
    })
    .then((data)=>{
        console.log('Verify',data);
        return true;
    })
    .catch((err)=>{
        console.log(err);
        return false;
    })
}
