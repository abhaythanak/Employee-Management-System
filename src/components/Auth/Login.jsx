import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        console.log("email", email)
        console.log("password", password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen justify-center items-center '>
        <div className="border-2 rounded-lg border-emerald-500 p-20">
            <form 
            onSubmit={(e) => submitHandler(e)} 
            className="flex flex-col items-center justify-center gap-3">
                <input
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
                className='border-2 py-3 px-5 rounded-full border-emerald-500 text-xl  outline-none bg-transparent placeholder:text-gray-100' type="email" placeholder='Enter your email'/>
                <input
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
                className='border-2 py-3 px-5 rounded-full border-emerald-500 text-xl  outline-none bg-transparent placeholder:text-gray-100'  type="password" placeholder='Enter your password'/>
                <button className=' py-3 px-5 rounded-full bg-emerald-500 text-xl text-white outline-none bg-transparent '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login