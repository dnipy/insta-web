import { useState } from 'react'
import { Link } from 'react-router-dom'
import insta from '../assets/insta.png'


export default function Navbar () {
    const [active,setActive] = useState({
         home : true,
         direct : false,
         post : false,
         explore : false,
         activity : false
    })

    
    return (
        <div className="col-12 fix-nav ">
            <div className="container">
                <div className="Navbar col-12">
                    <div className="nav-one col-2  ">
                        <img src={insta} alt="insta" />
                    </div>
                    <div className="col-3 ">
                        <form  className='d-none d-md-block'> 
                            <input  type='text' id='search-nav' placeholder='search and explore'  />
                        </form>
                    </div>
                    <div className="three col-5 ">
                        <div className="row">
                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home : true,
                                        direct : false,
                                        post : false,
                                        explore : false,
                                        activity : false
                                    })
                                }
                            }>
                                <Link to='/'>
                                    <i className={active.home ? 'bi bi-house-fill' : "bi bi-house"} style={{fontSize:'25px',color:'black'}}  ></i>
                                </Link>
                            
                            </div>





                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home : false,
                                        direct : true,
                                        post : false,
                                        explore : false,
                                        activity : false
                                    })
                                }
                            }>
                                <Link to='/directs/inbox'>
                                    <i className={active.direct ? 'bi bi-chat-fill' : 'bi bi-chat'}     style={{fontSize:'25px' ,color:'black'}} ></i>
                                </Link>
                            </div>




                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home : false,
                                        direct : false,
                                        post : true,
                                        explore : false,
                                        activity : false
                                    })
                                }
                            }>
                              
                                    <i className={active.post ? 'bi bi-plus-circle-fill' : 'bi bi-plus-circle'} style={{fontSize:'25px' ,color:'black'}}></i>
                                
                            </div>





                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home : false,
                                        direct : false,
                                        post : false,
                                        explore : true,
                                        activity : false
                                    })
                                }
                            }>
                                <Link to='/explore'>
                                <i className={active.explore ? "bi bi-search my-icon" : "bi bi-search"} style={{fontSize:'25px' ,color:'black'}}></i>
                                </Link>
                            </div>



                              
                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home :false,
                                        direct : false,
                                        post : false,
                                        explore : false,
                                        activity : true
                                    })
                                }
                            }>
                                <i className={active.activity ? "bi bi-heart-fill" : "bi bi-heart"} style={{fontSize:'25px' ,color:'black'}}></i>
                            </div>




                            <div className="col-1" onClick={
                                ()=>{
                                    setActive({
                                        home : false,
                                        direct : false,
                                        post : false,
                                        explore : false,
                                        activity : false
                                    })
                                }
                            }>
                                <Link to='profile'>
                                
                                <div className="profile-icon">

                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}