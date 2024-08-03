import { useContext } from 'react'
import { useDetailContext } from '../contexts/DetailContext'
import { Link } from 'react-router-dom'

const Details = () => {

  const { details, setDetails } = useDetailContext()

  console.log(details)
  return (
    <div>

      <Link to='/' className='bg-gray-400 rounded-e-md px-3 py-1'>Back</Link>

      <h1 className='text-center font-serif font-bold text-3xl py-10'>Cosmics</h1>
      <div className='flex justify-center flex-wrap gap-10 mb-10'>


        {details.comics.items && details.comics.items.map((item, index) => (
          <div key={index} className='bg-violet-500 rounded-md'>
            <h1 className='px-6 py-3'> {item.name}</h1>

          </div>
        ))
        }
      </div>
      <hr />
      <h1 className='text-center font-serif font-bold text-3xl py-10'>Series</h1>
      <div className='flex justify-center flex-wrap gap-10 mb-10'>


        {details.series.items && details.series.items.map((item, index) => (
          <div key={index} className='bg-violet-500 rounded-md'>
            <h1 className='px-6 py-3'> {item.name}</h1>

          </div>
        ))
        }
      </div>
      <hr/>

      <h1 className='text-center font-serif font-bold text-3xl py-10'>Stories</h1>
      <div className='flex justify-center flex-wrap gap-10 mb-10'>


        {details.stories.items && details.stories.items.map((item, index) => (
          <div key={index} className='bg-violet-500 rounded-md'>
            <h1 className='px-6 py-3'> {item.name}</h1>

          </div>
        ))
        }
      </div>
      <h1 className='text-center font-serif font-bold text-3xl py-10'>Events</h1>
      <div className='flex justify-center flex-wrap gap-10 mb-10'>


        {details.events.items && details.events.items.map((item, index) => (
          <div key={index} className='bg-violet-500 rounded-md'>
            <h1 className='px-6 py-3'> {item.name}</h1>

          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Details