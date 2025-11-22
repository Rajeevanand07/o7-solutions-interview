import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-200">
      <h1>OMS</h1>
      <div className='flex gap-3'>
        <Link to="">Home</Link>
        <Link to="/stationery">Stationery Items</Link>
        <Link to="/printing">Printing Service</Link>
      </div>
    </div>
  )
}

export default Nav
