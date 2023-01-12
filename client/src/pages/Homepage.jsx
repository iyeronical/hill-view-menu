import React from 'react'
import MenuItems from '../components/MenuItems'
import TopNavbar from '../components/TopNavbar'

import menu from "../data.js"

function Homepage() { 
  return (
    <>
    <TopNavbar />
    <div className="row">
        {
            menu.map(item => {
                return  <div className="col-md-3">
                        <div>
                            <MenuItems item = {item} />
                        </div>
                    </div>
                
            })
        }
    </div>
    </>
  )
}

export default Homepage