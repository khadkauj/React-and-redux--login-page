import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{setUsername, logout, selectUser} from './userSlice'
import 'tachyons'
import {Button } from '@material-ui/core';
import './userLogin.css'


function Login() {

    const disptach = useDispatch();
    const [name, setname] = useState('')




    const LogInFunc = () => {
        disptach(setUsername({username : name}));
        setname([''])
    }
  
    const LogOutFunc  = () => {
        disptach(logout());
    }

    // through this now we can also use the value
    // like printing, comparing it
    const user_by_selector = useSelector(selectUser)

   

    return (
        <div>

            <h2>React and Redux-Login Page</h2>
            {user_by_selector ? <p> {user_by_selector} is logged in</p>: <p>No one logged in</p> }
            <div className='buttons'>
                <input class="input-reset ba b--black-20 pa2 mb2 db w-100"  value={name} onChange={(e) => setname(e.target.value)} placeholder="Your Name" type="text"  />
                <Button class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" disabled={!name}  variant="contained" color="primary" type="submit" onClick={LogInFunc}>LogMeIn</Button>
                <Button class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" disabled={!name}  variant="contained" color="danger" onClick={() => LogOutFunc()}>LogMeOut</Button>
            </div>
            
        </div>
    )
}

export default Login
