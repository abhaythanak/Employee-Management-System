import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({Data}) => {
  console.log(Data);
  
  return (
    <div id='tasklist' className='overflow-x-scroll flex justify-start items-center gap-5 flex-nowrap h-[55%] w-full mt-10'>
      {
        Data.tasks.map((elem) => {
          if (elem.active) {
            return (
              <AcceptTask key={elem.taskDate} data={elem}/>
            )
          } 
          if (elem.newTask) {
            return (
              <NewTask  key={elem.taskDate} data={elem}/>
            )
          } 
          if (elem.completed) {
            return (
              <CompleteTask  key={elem.taskDate} data={elem}/>
            )
          } 
          if (elem.failed) {
            return (
              <FailedTask  key={elem.taskDate} data={elem}/>
            )
          } 
        })
      }  
    </div>
  )
}

export default TaskList