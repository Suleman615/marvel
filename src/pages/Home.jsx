import { useContext, useEffect, useState } from 'react'
import md5 from 'md5'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { useDetailContext } from '../contexts/DetailContext'

const Home = () => {

    const [src, setSrc] = useState([])
    const [hover, setHover] = useState(null)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(25)

const {details, setDetails}=useDetailContext()


    const loadData = async () => {
setSrc([])
console.log("loading")
        // Define your keys
        const publicKey = 'f8b8617dc4a041208090e77aa4da21ae';
        const privateKey = 'f52a938e7a2c382e63c509a906b58429971d81b9';

        // Generate a timestamp and the hash
        const ts = new Date().getTime();
        const hash = md5(ts + privateKey + publicKey);




        // API endpoint
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`;

        // Fetch data from the API with keys in headers
        await fetch(apiUrl, {
            method: 'GET', // or 'POST', 'PUT', etc.

        })
            .then(response => response.json())
            .then(data => {
                console.log("success:" + data)
                const { results } = data.data;
                setSrc(results)


            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    useEffect(() => {
        loadData()
    }, [])

    const handleContext = (currentItem) => {
        setDetails(currentItem)
    }


    const gotoNext=()=>{
        let start = (offset < 40) ? (offset + 10)  : offset
        let end = (limit <50) ? (limit + 10) : limit
        setOffset(start)
        setLimit(end)
        loadData()
        console.log("here"+ offset + limit)
    }

    const gotoPrevious= ()=>{
        let start = (offset <0) ? offset : offset + 10
        let end = (limit<10) ? limit : limit + 10
        setOffset(start)
        setLimit(end)
        loadData()
    }
    return (
        <div className='bg-slate-600'>
            <div className='flex justify-center items-center min-h-screen gap-10 flex-wrap bg-slate-600 p-4'>
                {src.length > 0 ? src.map((item, index) => (
                    <div key={index} className='w-56 h-72 flex flex-col justify-between m-4'>
                        <h1 className='font-serif text-center text-2xl'>{item.name}</h1>

                        <div onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(false)} className='w-64 h-64  '>

                            {hover === index ? <div  className='border rounded-md w-full h-full flex flex-col justify-center gap-5 items-center '>
                                {item.comics.items.length > 0 && <Link  onClick={() => handleContext(item)} to='/details' className='px-10 rounded-md t py-2 bg-red-100 font-semibold'>View More</Link>}

                            </div> :
                                <div >
                                    <img className='w-64 h-64 rounded-md flex-grow' src={`${item.thumbnail.path.replace('http', 'https')}.${item.thumbnail.extension}`} alt="" />
                                </div>}
                        </div>
                    </div>
                )) :
                    <div>
                        Loading
                    </div>
                }

            </div>
            {/* <div className='flex justify-center gap-10 py-10'> <button onClick={gotoPrevious} className={` bg-gray-300 px-5 py-2 rounded-md `} >Previous</button>
            <button onClick={gotoNext} className='bg-gray-300 px-9 py-2 rounded-md '>Next</button>
            </div> */}

        </div>
    )
}

export default Home