import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Suggestion = () => {

    const profiles = [
        {
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            username: "saydullo.dew",
            title: "Saydullo"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUzyGKDcz90fjF69JHpmMlV2TLGhF1C8lNw&s",
            username: "kettypery",
            title: "followed by Eshmat"
        },
        {
            image: "https://basket-11.wbbasket.ru/vol1612/part161290/161290628/images/big/1.webp",
            username: "thunder.bold",
            title: "followed by apple"
        }, {
            image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/02_06_one_off_invencible/autentica/autentica_cover.jpg",
            username: "lambo",
            title: "followed by mclaren"
        }, {
            image: "https://minapi.beemarket.uz/prod-media/productImages/1718274390vSWlZDK3AEe2.webp",
            username: "samsung",
            title: "followed by macbook"
        },

    ]
    const firstProfile = profiles[0];
    return (
        <div className='ms-4 mt-4'>
            <div className='flex items-center mt-10 mb-3'>
                <img className='w-10 h-10 rounded-full'  src={firstProfile.image} alt="" />
               <div className='flex flex-col'>
               <p className='text-xs'>{firstProfile.username}</p>
               <p className='text-xs'>{firstProfile.title}</p>
               </div>
               <span className='text-blue-600 ms-20 text-sm'>Switch</span>
            </div>
            <div className='flex justify-between mt-5'>
                <p className='text-sm'>Suggested for you</p>
                <p className='text-sm'>See All</p>
            </div>
            {
                profiles.map((profile, index) => (
                    <div className='flex items-center mt-4 gap-1 justify-between' key={index}>
                        <img className='w-10 h-10 rounded-full' src={profile.image} alt="" />
                        <div className='flex flex-col text-sm py-2'>
                            <div className='flex '> <p>{profile.username}</p> <span className='ms-1'><FontAwesomeIcon className='text-blue-500' icon={faCheckCircle}  /></span></div>
                            <span className='text-xs'>{profile.title}</span>
                        </div>
                        <p className='text-blue-600 text-xs ms-4'>Follow</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Suggestion