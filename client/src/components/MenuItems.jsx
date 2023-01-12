import React from 'react'

function MenuItems({item}) {
  return (
    <div>
        <h3>{item.name}</h3>
        <img src={item.image} className="img-fluid" alt="" />

        <div className="flex-container">
            <div className="w-100">
                <p>Portion</p>
                <select>
                    {item.size.map(s=>{
                        return <option value={s}>{s}</option>
                    })}
                </select>
            </div>
            <div className="w-100">
                <p>Quantity</p>
                <select>
                    {[...Array(10).keys()].map((x, i) => {
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default MenuItems