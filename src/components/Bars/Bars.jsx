import { faThreads } from '@fortawesome/free-brands-svg-icons'
import { faCompass, faHeart, faMessage, faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faClapperboard, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instaLogo from '../../assets/instaLogo.png'
import React from 'react'


const Bars = () => {

    const bars = [
        { icon: faHome, title: "Home" },
        { icon: faSearch, title: "Search" },
        { icon: faCompass, title: "Explore" },
        { icon: faClapperboard, title: "Reels" },
        { icon: faMessage, title: "Messages" },
        { icon: faHeart, title: "Notifications" },
        { icon: faSquarePlus, title: "Create" },
        { icon: faUser, title: "Profile" },
    ]
    const footerSecs = [
        { icon: faThreads, title: "Threads" },
        { icon: faBars, title: "More" }
    ]
    return (
        <div className='flex flex-col justify-start ps-7 pt-7 gap-x-20 w-60 h-screen border-r'>
          <a href="">  <img src={instaLogo} alt="Instagram logo" style={{width:"100px"}} /></a>
            {bars.map((bar, index) => (
                <div key={index} className='flex gap-3 items-center m-3 text-xl'>
                    <FontAwesomeIcon icon={bar.icon} />
                    <h2>{bar.title}</h2>
                </div>
            ))}
           <div className='mt-56'> {
                footerSecs.map((footerSec, index) => (
                    <div key={index} className='flex gap-3 items-center m-3 text-xl'>
                        <FontAwesomeIcon icon={footerSec.icon}/>
                        <h2>{footerSec.title}</h2>
                    </div>
                ))
            }</div>
        </div>
    )
}

export default Bars
