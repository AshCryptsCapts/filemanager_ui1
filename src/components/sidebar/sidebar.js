import React from 'react'

import './sidebar.css'

export default function Sidebar() {

    return (

        <div className="container sidebar">
            <div className='sidebarHead'>
                <i class="fa-brands fa-slack"></i>
                <h2 style={{margin : 0}}>Stealth</h2>
            </div>
            <hr />
            <div className='sidebarBody'>
            <ul>
                <li >
                    <i className="fa-solid fa-file"></i>
                    <h5>
                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">File Manager</span>
                    </h5>
                </li>
            </ul>
            </div>
            
            {/* <div className="row ">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div className='sidebarHead'>
                            <i class="fa-brands fa-slack"></i>
                            <h2 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                               Stealth
                            </h2>
                        </div>
                        <hr />

                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li >
                                <i className="fa-solid fa-file"></i>
                                <a href="/" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">File Manager</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
