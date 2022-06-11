import React from 'react'

function ImgCard({image}) {
    
    return (
        <>
            <div className='w-full bg-slate-200 imgCard'>
                <a href={image.webformatURL} target="new">
                    <img src={image.webformatURL} alt="" className='w-full img' />
                    </a>
            
                <p className='to-top text-white' >{image.tags}</p>
               
            </div>
        </>
    )
}

export default ImgCard