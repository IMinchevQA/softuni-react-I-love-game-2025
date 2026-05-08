import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/catalog/Catalog'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
