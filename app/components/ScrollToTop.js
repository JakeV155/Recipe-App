import React, { useState, useEffect } from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { ThemeConsumer } from '../contexts/theme';

function ScrollToTop() {
    const [toTopButton, setToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setToTopButton(true)
            } else {
                setToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return <ThemeConsumer>
        {({ theme }) => ( 
        <div className='ToTop'>
        {toTopButton && (
            <button className='TopButton' className={`top ${theme}`} onClick={scrollUp} style={{
                position: 'fixed',
                bottom: '50px',
                right: '25px',
                height: '25px',
                width: '50px',
                fontSize: '50px',
                backgroundColor: 'transparent',
                border: 'none',                
            }}><BsFillArrowUpCircleFill/></button>
        )}
    </div>
    )}
    </ThemeConsumer>
}

export default ScrollToTop;