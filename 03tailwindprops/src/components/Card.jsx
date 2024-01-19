import group from '../img/group.png'
import wallet from '../img/wallet.png'
import logo from '../img/logo.jpg'
function Card( ) {
  return (
    <div className='flex flex-col border border-gray-400 h-56 w-72  m-4 rounded-xl'>
      <div className='flex p-2 justify-center items-center'>
        <div className='border rounded-md p-2'><img className='w-8 h-8' src={logo} alt="" /></div>
        <div className='flex flex-col m-2'>
          <p className='font-semibold'>JEE Main 2023</p>
          <p className='text-gray-400'>National Testing Agency</p>
        </div>
      </div>
      <hr />
      <div className='flex flex-col justify-center items-center m-1'>
        <div className=''>
          <div className='flex m-1'>
          <img src={group} alt="" className='w-6 mx-1' />
          <p>More Than 20 Lakhs</p>
          </div>
          <div className='flex m-1'>
          <img src={wallet} alt="" className='w-6 mx-1' />
          <p> ₹ 1200</p>
          </div>
          <div className='border border-gray-500 rounded-md w-fit px-2 py-0.5 text-gray-500 m-1'>IIT</div>
          <a href="#" className='text-[#246BFD] text-sm m-1'>View details</a>
        </div>
      </div>
    </div>

  )
}

export default Card