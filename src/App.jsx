import React from 'react'

export default function App() {
  return (
    <>
      <div className="container  w-[80%] h-[500px] my-10 mx-5 shadow-2xl">
        <div className="button px-10 py-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded font-light text-sm"><img src="" alt="" />Copy Integration Link</button>

        </div>
        <hr className='mx-10 my-[0] bg-cyan-800' />


        <div className=" ml-10 mt-4 ">
        <h4 className='text-black text-sl font-semibold'>Preview of reservation modal</h4>
        </div>

        <div className="card flex w-[100%]  justify-center items-center px-2 py-0 gap-2 bg-white ">
        <div class="w-[50%] h-screen rounded overflow-hidden shadow-lg ">
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl pl-2 pt-2 mb-2 bg-blue-500 rounded-tl-xl h-[50px] rounded-tr-xl">Reservation</div>

    <div class="text-gray-700 text-base">
        <button class="dropdown-toggle py-2 px-3  flex items-center gap-2 rounded">
          <span class="pointer-events-none font-semibold">July 2023</span>
          <svg class="w-3 h-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>chevron-down</title>
            <g fill="none">
              <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
      </div>

      <div className="days flex px-3 gap-7 mb-2">
        <span>Sat</span>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
      </div>
      <div className="date flex px-3 gap-[38px]">
      <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span>16</span>
        <span>17</span>
      </div>
      <hr className='mx-10 mt-6 mb-2 bg-cyan-800 text-xl' />


      <div className="flex w-full gap-2">
        <div className="">
        <h4>Covers*</h4>
        <input className='place rounded pl-2' placeholder='3'/>
        </div>
       <div className="">
       <h4>Time*</h4>
        <input className='place rounded pl-2' placeholder='10:45 AM'/>

       </div>
      </div>

      <hr className='mx-10 mt-4 mb-4 bg-cyan-800 text-xl' />

       <div className="text">
        <h4 className='font-semibold'>Availability around 10:45 AM</h4>
       </div>
       <div className="button py-2 flex gap-1 text-justify">
        <span><button class="bg-blue-500  text-white py-2 block px-4 rounded-md font-light text-sm">9:30 AM</button>
        </span>
        <span><button class="bg-red-500  text-white py-2  px-4 rounded-md font-light text-sm">10:00 AM</button>
        </span>
        <span><button class="bg-orange-800  text-white py-2  px-4 rounded-md font-light text-sm">10:30 AM</button>
        </span>
        <span><button class="bg-blue-500  text-white py-2 px-4 rounded-md font-light text-sm">11:00 AM</button>
        </span>
        <span><button class="bg-blue-500  text-white py-2 px-4 rounded-md font-light text-sm">11:30 AM</button>
        </span>
       </div>
       <div className="px-[40%] py-6 flex gap-2">
       <span><button class="buttons text-black font-semibold   px-8 rounded font-light text-sm">Cancel</button>
       </span>
       <span><button class="buttons text-black  font-semibold   px-8 rounded font-light text-sm">Next</button>
        </span>
       </div>

  </div>
</div>


<div class="w-[50%] h-screen rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl pl-2 pt-2 mb-2 bg-blue-500  h-[50px] rounded-tl-xl rounded-tr-xl">Reservation</div>
  </div>
  <div className="holders">
        <div className="holder">
        <h4 className='ml-6'>Guest Name*</h4>
        <input className='place rounded pl-2 w-[80%] ml-6' placeholder='Sam Alter'/>
        </div>
        <div className="holder my-2">
        <h4 className='ml-6'>Contact Number*</h4>
        <input className='place rounded pl-2 w-[80%] ml-6' placeholder='+91-8979452648'/>
        </div>
        <div className="holder my-2">
        <h4 className='ml-6'>Email ID*</h4>
        <input className='place rounded pl-2 w-[80%] ml-6' placeholder='Sam Alter'/>
        </div>
        <div className="holder my-2">
        <h4 className='ml-6'>Add Allergy Details</h4>
        <input className='place rounded pl-2 w-[80%] ml-6' placeholder='Select..'/>
        </div>
        <div className="holder my-2">
        <h4 className='ml-6 '>Remarks</h4>
        <input className='place rounded pl-2 pb-28 w-[80%] ml-6'   placeholder=''/>
        </div>

        <div className="px-[40%] py-6 flex gap-2">
       <span><button class="buttons text-black font-semibold   px-8 rounded font-light text-sm">Cancel</button>
       </span>
       <span><button class="bg-blue-500 buttons text-black  font-semibold   px-8 rounded font-light text-sm">Book</button>
        </span>
       </div>
  </div>
</div>
</div>
        


      </div>
    </>
  )
}
