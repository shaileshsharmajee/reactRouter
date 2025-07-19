import { useEffect, useState } from "react";


function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/shaileshsharmajee')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
    
  return (
    <div
        className='text-center text-3xl text-white m-4 bg-gray-600'>Github Followers : {data.followers} 
        <img src={data.avatar_url} alt="git picture" width={300}/>
        </div>
  )
}

export default Github