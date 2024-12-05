import React from 'react'
import { useState } from 'react';
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader';
import Title from '@babel/core'

const TABS=[
  {
    title:"Board View",icon :<MdGridView/>
  },
  {
    title:"List View",icon:<FaList/>
  },
]

const TASK_TYPE={
  todo:"bg-blue-600",
  "in progress":"bg-yellow-600",
  completed:"bg-green-600",
}
const Task = () => {

  const params=useParams()

  const [selected,setSelected]=useState(0)
  const [open,setOpen]=useState(false)
  const [loading,setLoading]=useState(false)
  const status=params?.status || ""

  return loading ? (<div className='py-10'>
    <Loader/>
  </div>):(<div className='w-full'>
    <div className='flex items-center justify-between mb-4 '>
      <Title title={status ? `${status} Taks` :"Tasks"}/>

    </div>


  </div>
  )

}

export default Task
