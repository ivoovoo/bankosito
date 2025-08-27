import './App.css'
import Sidebar from './components/Sidebar'
import user from './assets/images/avatar.png'
import search from './assets/images/back.png'
import CardCarousel from './components/CardCarusel'
import Finance from './components/Finance'
import DashboardSection from './components/Dashboard'
function Home() {


  return (
    <div className='p-5 w-full relative  h-full bg-black min-h-[100vh]'>
      <div className='flex justify-between items-center mb-6'>
          <img className='w-8 h-8 rounded-full bg-' src={user} alt="user photo" />
          <p className='font-normal text-[18px] text-white'><span className='text-[#EEFC79] font-bold'>U</span>Bank</p>
          <div></div>
      </div>
      <div className='py-3 flex items-end justify-between'>
         <div >
             <p className='text-white text-[15px] font-normal'>Your balance</p>
             <h3 className='text-white text-[25px] font-bold leading-8'>$7,896</h3>
         </div>
         <img className='w-8 h-8' src={search} alt="" />
      </div>
       <div className=" bg-black text-white flex items-center justify-center">
      <CardCarousel />
    </div>
    <div className=" bg-black text-white flex items-center justify-center">
      <Finance />
    </div>
       <DashboardSection />
      <Sidebar />
      {/* <img className='absolute bottom-8 left-0 z-10 w-[800px] h-[300px]' src={circle} alt="" /> */}
    </div>
  )
}

export default Home
