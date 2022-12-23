import axios from "axios";
import { ActionCreator } from "../redux/action";
import { store } from "../redux/store";

export function qrcall(token){
    let src=''
    function generateqr(){
        axios({
            method:'get',
            url:'https://hw-mteacher-backend-5oth7ar2h-anshgoyal27.vercel.app/genqr',
            headers:{
                authorization : token
            }
        })
        .then(data=>{
            console.log(data)
            const action=ActionCreator('QR',data.data.message)
            store.dispatch(action)
            // return(
            //     <div className='bg-primary'>
            //         <img src={data.data} style={{'height':'1000px','width':'1000px'}} alt=''/>
            //     </div>
            // )
        })
        .catch(err=>{
            console.log(err)
            if(err.response.data.message==='UnAuthorized User'){
                const action = ActionCreator('logout');
                store.dispatch(action);
            }
        })
    }
    generateqr();
    return src;
}
