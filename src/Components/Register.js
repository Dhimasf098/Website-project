import React, {useRef} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import axios from '../config/axios'
import {Redirect,Link} from 'react-router-dom'


export default function Register() {
   const username = useSelector(state => state.auth.username)

   const usernameRef = useRef()
   const nameRef = useRef()
   const emailRef = useRef()
   const passwordRef = useRef()

   const registerUser = (e) => {
      e.preventDefault()

      const username = usernameRef.current.value
      const name = nameRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value


      axios.post('/register', {username, name, email, password})
         .then(res => {
            alert(res.data.message)
         })
         .catch(err => {
            alert(err.message)
         })
   }

   return !username ? (
      <div className=" mt-5 row" >
         <div className="card col-sm-3 mx-auto" >
            <div className="card-body" >
               <div className="border-bottom border-secondary card-title" >
                  <h1>Register</h1>
               </div>
               <form onSubmit={registerUser} className="form-group" >
                  <div>
                     <h4>username</h4>
                     <input className="form-control" ref={usernameRef} type="text"/>
                  </div>
                  <div>
                     <h4>name</h4>
                     <input className="form-control" ref={nameRef} type="text"/>
                  </div>
                  <div>
                     <h4>email</h4>
                     <input className="form-control" ref={emailRef} type="email"/>
                  </div>
                  <div>
                     <h4>password</h4>
                     <input className="form-control" ref={passwordRef} type="password"/>
                  </div>

                  <input onClick={registerUser} className="btn btn-block btn-outline-success mt-2" type="submit" value="Register"/>
               </form>
            </div>
         </div>
      </div>
   ): (
      <Redirect to='/' />
   )
}
