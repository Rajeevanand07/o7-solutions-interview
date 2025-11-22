
const StationeryItems = () => {
  return (
    <div className="flex h-screen items-center flex-col">
      <h1 className='text-2xl'> Stationery Items </h1>
      <form action="" className="flex flex-col gap-2">
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="Item Price" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default StationeryItems
