import React from 'react'

const Item = ({ name, comics , thumbnail}) => {
    return (
        <div>
            <h1>{name}</h1>
            <div className='my-3 '>
                <img className='w-60 h-56' src={`${thumbnail.path.replace('http', 'https')}.${thumbnail.extension}`} alt="" />
                {comics.length > 0 && comics.map((com, index) => (
                    <div key={index} className='border p-2 m-2'>
                        <h1>{com.name}</h1>
                        <a href={`${com.resourceURI}`} target="_blank" >check</a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Item