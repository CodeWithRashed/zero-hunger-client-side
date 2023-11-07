
const Pending = () => {
  return (
    <div className="flex items-center">
      <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> <h1>Pending</h1>
    </div>
  )
}

const Delivered = () => {
  return (
    <div className="flex items-center">
      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> <h1>Delivered</h1>
    </div>
  )
}

export {Pending, Delivered}
