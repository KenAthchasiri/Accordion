import React, { useContext, useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { themeContext } from '../App'

const SingleContent = ({title,description}) => {
    const [show,setShow] = useState(false)
    const {theme} = useContext(themeContext)
    return (
        <article className={theme === 'dark' ? 'content dark' : 'content'}>
            <header>
                <h4 >{title}</h4>
                <button className={theme === 'dark' ? 'btn dark' : 'btn'} onClick={()=>setShow(!show)}>
                    {show ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {show && <p className={theme === 'dark' ? 'p dark' : 'p'}>{description}</p>}
        </article>
    )
}

export default SingleContent