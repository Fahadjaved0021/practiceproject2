import React , {useState}from 'react'

function Forms() {


    const [userReg, setUserReg] = useState({
        username: "",
        email:"",
        phone:"",
        password: ""

    })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setUserReg({...userReg, [name]:value})

    }

    const [Records, setRecords] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecord = {
            ...userReg,
            id:new Date().getTime().toString()
           
        }

        console.log(Records)

        setRecords([...Records, newRecord])

        setUserReg({username:"", phone:"", email:"", password:""})
    }

  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        type="text"
        placeholder="username"  
        className='form--input'
        autoComplete='off'
        name='username'
        id='username'      
        value={userReg.username}
        onChange={handleInput}
        />
        <label>Phone</label>
        <input 
        type="text"
        placeholder="Phone No."   
        className='form--input'   
        autoComplete='off'
        name='phone'
        id='phone'   
        value={userReg.phone}
        onChange={handleInput}
        />
        <label>Email</label>
        <input 
        type="text"
        placeholder="Email"  
        className='form--input'   
        autoComplete='off'
        name='email'
        id='email'    
        value={userReg.email}
        onChange={handleInput}
        />
        <label>Password</label>
        <input 
        type="password"
        placeholder="Password"   
        className='form--input'
        autoComplete='off'
        name='password'
        id='password' 
        value={userReg.password}
        onChange={handleInput}
             
        />
        <button
        className='form--submit'
        // onSubmit={handleSubmit}
        type="submit"
        
        
        >Sign Up</button>
    </form>

    <div >

        {Records.map((curElem)=>{
            return (
                <div key={curElem.id} className='Show--attributes'> 
                    <p>{curElem.username}</p>
                    <p>{curElem.phone}</p>
                    <p>{curElem.email}</p>
                    <p>{curElem.password}</p>
                </div>
            )
        })}



    </div>
    
    
    </div>
  )
}

export default Forms