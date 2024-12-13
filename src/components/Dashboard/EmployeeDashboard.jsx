import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({Data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header Data={Data}/>
        <TaskListNumber Data={Data}/>
        <TaskList Data={Data}/>
    </div>
  )
} 

export default EmployeeDashboard