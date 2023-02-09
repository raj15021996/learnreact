import React, { useEffect, useState } from 'react'

export default function TodoApp() {

const getData=()=>{
    let list=localStorage.getItem('list');
    if(list) return JSON.parse(list);
    else return [];
}
    const [values,setValues]=useState();
    const [toggle,setToggle]=useState(true);
    const [todo,setTodo]=useState(getData());
    const [editId,setEditId]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!values){
            alert("Please enter your Todo");
        }else if(values && !toggle){
         setTodo(
            todo.map((item)=>{
                if(item.id===editId)
                return {...item,title:values,done:false};
                return item;
            })
         )
         setEditId(null);
         setToggle(true);
         setValues('');
        
        }
        else{
            setTodo([...todo,{id:`${Date.now()}`,title:values,done:false}])
            setEditId(null);
            setValues('');
          
        }
    }

    const handleDel=(id)=>{
      const del=todo.filter((item)=>item.id!==id);
      setTodo([...del]);  
    }
    const handleEdit=(id)=>{
        const edit=todo.find((item)=>item.id===id);
        setValues(edit.title)
        setEditId(id);
        setToggle(false);
          
      }
      const handleDone=(todoItem)=>{
        setTodo(
            todo.map((item)=>{
                if(item.id===todoItem.id)
                return {...item,done:!item.done};
                return item;
            })
         )
      }
      useEffect(()=>{
       localStorage.setItem("list",JSON.stringify(todo))
      },[todo])

    return (
        <>
            <div>TodoApp</div>
            <hr />
            <form onSubmit={handleSubmit}>
              <input type='text' value={values} onChange={(e)=>setValues(e.target.value)}/>
              <button type='submit'>{toggle? "Add":"Edit"}</button>
            </form>
            <div className='Todolist'>
            {
                todo.map((item)=>(
                    <div key={item.id}>
                    {!item.done? <span>{item.title}</span>:
                    <span style={{textDecoration:"line-through red"}}>{item.title}</span>}
                    <button  onClick={()=>handleDel(item.id)}>Del</button>
                    <button  onClick={()=>handleEdit(item.id)}>Edit</button>
                    <button  onClick={()=>handleDone(item)}>Done</button>
                    </div>
                ))
            }
            </div>
        </>

    )
}
