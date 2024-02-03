import banner from '../../img/banner.png'
 
function CarouselDefault() {
return(
  <div className="flex justify-center items-center pt-10 ">
  <div style={{background: "linear-gradient(to right,black  0%, #313131 100%)"}} className="relative w-full h-44 rounded-3xl flex justify-center items-center">
 

  <button className='text-black text-2xl absolute left-0 bg-[#d9d9d9] h-12 w-[1.25rem]'>{"<"} </button>
  
  <img src={banner} className='relative  w-72'  alt="" />

  <button className='text-black text-2xl absolute right-0 bg-[#d9d9d9] h-12 w-[1.25rem] '>{">"}</button>

  </div>
  </div>
)
}
export default CarouselDefault