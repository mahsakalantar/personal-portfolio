import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {projectdata} from './Data'
import {projectnav} from './Data'
import Workitems from './Workitems'

const Portfolioes = () => {
    const [item,setItem] =useState({name:'all'});
    const [projects ,setProjects]= useState([]);
    const [active , setActive] =useState(0);

    useEffect(()=>{
        if(item.name === 'all'){
            setProjects(projectdata);
        
        }
        else{
            const newproject =projectdata.filter((project)=>{
                return project.category === item.name;
            });
            setProjects(newproject);
        }
    },[item]);
    const handleClick =(e,index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }
  return (
      <div>
           <div className="work__filters">
       {projectnav.map((item ,index)=>{
           return(
               <span onClick={(e)=>{
                   handleClick(e,index);
               }} className={`${active === index ? "active-work": ''} work__item`} key={index}>{item.name}</span>
           )
       }
       )}

   </div>
   <div className='work__container container grid'>
       {projects.map((item)=>{
               return <Workitems item={item} key={item.id} />;
               
                  
           })
       }
   </div>
      </div>
  
  )
}

export default Portfolioes