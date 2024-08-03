import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import { DetailProvider } from './contexts/DetailContext'

function App() {

  return (

    <BrowserRouter>
      <DetailProvider>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />

        </Routes>
      </DetailProvider>
    </BrowserRouter>

  )
}

export default App
