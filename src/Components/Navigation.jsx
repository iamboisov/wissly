import React, { useState } from 'react'
import logo_green from '../assets/logo_green.png';
import logo_white from '../assets/logo_white.png';
import Button from './Button'

export default function Navigation() {
    
    const [imageSrc, setImageSrc] = useState(logo_green);

    const handleMouseOver = () => {
        setImageSrc(logo_white)
    }

    const handleMouserLeave = () => {
        setImageSrc(logo_green)
    }

    return <div className='Navbar'>
    <div className='Logo' onMouseOver={handleMouseOver} onMouseLeave={handleMouserLeave}><img src={imageSrc} alt="" /></div>
    <div className="Links">
        <a href="/articles">Статьи</a>
        <a href="/startups">Стартапы</a>
        <a href="/ideas">Бизнес-идеи</a>
        <a href="/about">О нас</a>
    </div>
    <Button title="Присоединиться" />
    </div>
}