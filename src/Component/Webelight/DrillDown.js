import React, { useEffect, useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export default function DrillDown(props) {
    const {setUser}=props;
    const [select,setSelect]=useState('')
    const [commitsData,setCommitsData]=useState([{}]);
     
    const handleSelect=(e)=>{
      console.log(`id ${e.target.id}`);
     setSelect(e.target.id);
    }
    const fetchCommitsData=()=>{
        console.log(setUser[0].name,setUser[0]?.owner?.login);
        fetch(`https://api.github.com/repos/${setUser[0]?.owner?.login}/${setUser[0]?.name}/contributors`)
        .then((res)=>res.json())
        .then((data)=>{
            setCommitsData(data)
           console.log(`commitsData ${data?.login}`);
        })
    }   
    
    useEffect(()=>{
      fetchCommitsData();
    },[])

  return (
    <div>
         <Select>
                <MenuItem className="menu" id='Commits'
                 onClick={handleSelect}>Commits</MenuItem>
                <MenuItem className="menu" id='Addition' 
                onClick={handleSelect}>Addition</MenuItem>
                <MenuItem className="menu" id='Deletion' 
                onClick={handleSelect}>Deletion</MenuItem>
         </Select>
         
    </div>
  )
}
