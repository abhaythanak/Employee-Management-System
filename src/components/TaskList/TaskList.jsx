import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-scroll flex justify-start items-center gap-5 flex-nowrap h-[55%] w-full mt-10'>
        <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5 '>Make a task list</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta omnis voluptatem laudantium ipsam modi nulla eos perspiciatis cupiditate illum?</p>
        </div>
    </div>
  )
}

export default TaskList