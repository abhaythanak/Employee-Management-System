import React from 'react'

const TaskListNumber = ({Data}) => {
  return (
    <div className='flex mt-3 justify-between gap-5 screen'>
        <div className=" w-[45%]h-1/3 py-6 px-9 bg-red-500 rounded-xl">
          <h2 className='text-2xl font-semibold text-center'>{Data.taskCounts.newTask}</h2>
          <h3 className='text-xl font-medium text-center'>NewTask</h3>
        </div>
    </div>
  )
}

export default TaskListNumber