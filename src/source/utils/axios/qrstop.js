import axios from "axios";

export function qrstop(token){
        axios({
            method:'get',
            url:'http://localhost:1234/clearqr',
            headers:{
                authorization : token
            }
        })
        .then(data=>{
            console.log(data)
            // return(
            //     <div className='bg-primary'>
            //         <img src={data.data} style={{'height':'1000px','width':'1000px'}} alt=''/>
            //     </div>
            // )
        })
        .catch(err=>{
            console.log(err)
        })
}