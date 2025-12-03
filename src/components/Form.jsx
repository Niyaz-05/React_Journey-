import React, { useState } from 'react'

const Form = () => {
  const [name, setName]=useState();
  const [age, setAge]=useState();
  const [email, setEmail]=useState();
  const [address, setAddress]=useState();

  const handleSubmit = (e)=>{e.preventDefault();
    alert("Name: "+name+"\nAge: "+age+"\nEmail: "+email+"\nAddress: "+address)
  }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Enter Your Data</h2>
        <input
          type='text'
          placeholder='Enter your name...'
          value={name}
          onChange={(e)=>setName(e.target.value)}
        /><br/>
        <input
          type='number'
          placeholder='Enter your age...'
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        /><br/>
        <input
          type='email'
          placeholder='Enter your mail...'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /><br/>
        <input
          type='address'
          placeholder='Enter you address'
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        /><br/>
        <button type='submit'>Submit</button>
      </form>

  )
}

export default Form