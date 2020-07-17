import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {logoutAction} from '../config/redux/actions'
import axios from '../config/axios'

export default function Header() {
    const username = useSelector(state =>  state.auth.username)
    const token = useSelector(state =>  state.auth.token)
    const dispatch = useDispatch()

    const config = {headers: {Authorization: token}}

    const onLogout = ()=>{
        axios.delete('/logout', config)        
    
        dispatch(logoutAction())
      }

    return username ? (
        <div class="d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand mr-5" href="#">
                    <img src="https://www.hakita.id/assets/img/logo_hakita_hi_res-19.png" width="25%" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#service">Services</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="https://www.hakita.id/produk">Pricing</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="/Blog">Blog</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link text-dark" href="/">Hello, {username}</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" >
                        <Link to={"/"}>
                            <button class="btn btn-outline-success my-2 my-sm-0" onClick={onLogout}>Keluar</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    ) : 
    ( 
        <div class="d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-white ">
                <a class="navbar-brand mr-5" href="#">
                    <img src="https://www.hakita.id/assets/img/logo_hakita_hi_res-19.png" width="25%" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#service">Services</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="https://www.hakita.id/produk">Pricing</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="/Blog">Blog</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" >
                        <Link to={"/Login"}>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Masuk</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}
