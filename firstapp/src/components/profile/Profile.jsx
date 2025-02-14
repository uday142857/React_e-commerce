import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

function Profile() {
  return (
    <div className='container mt-5 ' style={{height:"400px",boxShadow:"0 0 10px red"} }>
        <div className='row h-100'>
            <div className='col-4 bg-primary '>
                <div className='container h-100 d-flex flex-column justify-content-evenly text-center'>
                    <div className="row ">
                        <div className="col-12 ">
                            <Link className="text-white text-decoration-none fs-5 " to="PersonalDetails">Presonal Details</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link className="text-white text-decoration-none fs-5 "to="ProfesionalDetails">Profesional Details</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link className="text-white text-decoration-none fs-5 "to="EducationalDetails">Educational Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-8'>
                    <Outlet/>
            </div>
            
        </div>
    </div>
  )
}

export default Profile