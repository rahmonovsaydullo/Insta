import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Post = () => {
    return (
        <div className='ms-40 mt-5 w-8/12'>
            <div className='flex gap-1 items-center justify-between '> 
                <div className='flex gap-1 items-center'>
                <img className='rounded-2xl w-16' src={'https://brostore.uz/cdn/shop/files/bb3ce2c80a9671c7fcc7d1d12b08e50cd5df7cea20acd803d1ce10c24aff10a9_png.webp?v=1734092194'} alt="Macbook image"  />
                <div className='flex flex-col'>
                <div className='flex text-base gap-1'><p>MacBook </p> 
                <span><FontAwesomeIcon icon={faCheckCircle} style={{ color: "blue" }} /></span>
                <span> • 32m</span></div>
                <span className='text-xs'>Original audio</span>
                </div>
                </div>
                <p>•••</p>
            </div>
            <div className='border-2 mt-1'>
                <img className='w-auto' src={'https://btech.com/media/catalog/product/cache/00dc6d0e8ad8391a8b0483d9786fce84/s/p/sp776-mbp15touch-space.jpeg'} alt="" />
            </div>

        </div>
    )
}

export default Post