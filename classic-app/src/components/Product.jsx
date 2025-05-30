import React from 'react'
import Coconut from '../assets/images/oil.jpg'
import Small from '../assets/images/small-oil.png'
import Flour from '../assets/images/coconut-flour.png'
import Flakes from '../assets/images/flakes.png'

const Product = () => {
  return (
    <div>
        <div>
            <h1>Best Selling Products</h1>
        </div>
        <div className="flex justify-between mt-8 p-2">
            <div className="bg-gray-400 rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Coconut} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Making every meal a memorable one</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Small} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Very Handy</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flour} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Having varieties</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flakes} alt="" className="w-full h-full object-cover mb-2" />
                <h3>No Boring Moments</h3>
            </div>
        </div>
    </div>
  )
}

export default Product