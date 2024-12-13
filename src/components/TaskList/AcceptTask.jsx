import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5 '>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className="flex justify-between mt-5 ">
                <button className='bg-green-400 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-400 py-1 px-2 text-sm '>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask