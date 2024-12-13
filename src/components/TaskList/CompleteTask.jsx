import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5 '>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className="mt-2">
                <button className='bg-green-400 py-1 px-2 text-sm'>
                    Completed
                </button>
            </div>
        </div>
  )
}

export default CompleteTask