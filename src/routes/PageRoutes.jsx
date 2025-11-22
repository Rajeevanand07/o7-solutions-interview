import { Routes, Route } from 'react-router-dom';
import StationeryItems from '../pages/StationeryItems';
import Home from '../pages/Home';
import PrintingService from '../pages/PrintingService';
const PageRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stationery" element={<StationeryItems/>} />
        <Route path="/printing" element={<PrintingService/>} />
      </Routes>
  )
}

export default PageRoutes
