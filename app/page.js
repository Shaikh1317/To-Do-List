"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [disc, setdisc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,disc}])
    settitle("")
    setdisc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2> No Task Available</h2>

  if(mainTask.length > 0){
    renderTask =  mainTask.map((t,i) =>{
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between  w-2/3'>
          <h5 className='text-2xl font-semibold ml-2'>{t.title}</h5>
          <h6 className='text-lg font-medium '>{t.disc}</h6>
          </div>
          <button 
            onClick={()=>{
              deleteHandler(i)
            }}
            className='bg-red-600 text-white font-bold 
            rounded p-3 mr-4 mb-4'>Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
    <h1 className='bg-black text-white text-center p-5 text-4xl font-bold'>
      My Todo List
    </h1>
    <form onSubmit={submitHandler}>

      <input
      type='text'
      className='m-3 px-4 py-4 border-2 border-zinc-800 rounded'
      placeholder='Enter your task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input
      type='text'
      className='m-3 px-4 py-4 border-2 border-zinc-800 rounded'
      placeholder='Enter your discription'
      value={disc}
      onChange={(e)=>{
        setdisc(e.target.value)
      }}
      />

      <button className='bg-black text-white px-4 py-4 rounded m-2'>
        Add Task
      </button>
    </form>
    
    <hr/>
      <div className='py-4 text-center text-zinc-800 bg-slate-300 '>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page