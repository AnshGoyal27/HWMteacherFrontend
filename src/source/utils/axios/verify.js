import axios from "axios";

export function Verify(token){
    axios({
        method:'post',
        mode: 'cors',
        credentials : 'include',
        headers: {
                "Access-Control-Allow-Origin": "https://hwmdeploy.netlify.app",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, DELETE, OPTIONS',
                "Access-Control-Allow-Headers" : 'Origin,Content-Type,Authorization',
                'Accept': "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
        url:'https://hw-mteacher-backend.vercel.app/verify',
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
