import React, {useState} from 'react'

function MenuItems({item}) {
    const [portion, setPortion] = useState('half');
    const [quantity, setQuantity] = useState(1);
    return (
    <div>
        <h3>{item.name}</h3>
        <img src={item.image} className="img-fluid" alt="" />

        <div className="flex-container">
            <div className="w-100">
                <p>Portion</p>
                <select value={portion} onChange={(e) => setPortion(e.target.value)}>
                    {item.size.map(s=>{
                        return <option value={s}>{s}</option>
                    })}
                </select>
            </div>
            <div className="w-100">
                <p>Quantity</p>
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((x, i) => {
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className="flex-container">
            <div className="">
                <p>Price : {item.price[0][portion] * quantity}</p>
                
            </div>
            <div className="">

            </div>
        </div>
    </div>
  )
}

export default MenuItems