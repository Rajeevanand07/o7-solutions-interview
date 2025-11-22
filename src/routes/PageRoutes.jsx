import { Routes, Route } from 'react-router-dom';
import StationeryItems from '../pages/StationeryItems';
import Home from '../pages/Home';
const PageRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stationery" element={<StationeryItems/>} />
      </Routes>
  )
}

export default PageRoutes
