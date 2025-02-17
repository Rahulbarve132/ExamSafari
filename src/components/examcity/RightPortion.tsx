import React from 'react';
import { GoVerified } from 'react-icons/go';
import { TbHome2 } from 'react-icons/tb';
import { BsFire } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa6';
import { CiDollar } from 'react-icons/ci';

const RightPortion: React.FC = () => {
  return (
    <div className='w-2/6 h-fit mt-2 bg hidden md:flex   '>
      <div className='Main-Container'>
        <div className='1st-container border border-gray-300 ml-3 mr-10 mt-2 rounded-lg bg-white'>
          <div className='Uppper-Container mx-6 mt-6 my-4'>
            <div className='Top-Heading flex gap-1 justify-start text-lg font-semibold mb-4'>
              Starting from <div>£389/week</div>
            </div>
          </div>
          <div>
            <hr className="h-1 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>

          <div className='Lower-Container my-4 mx-6'>
            <div className='flex gap-2 my-2'>
              <button className='flex items-center bg-gray-200 rounded-sm gap-1 px-2 font-light'>
                <GoVerified style={{ color: 'blue' }} />
                Verified Property
              </button>
              <button className='flex items-center bg-gray-200 rounded-sm gap-1 px-2 font-light'>
                <TbHome2 style={{ color: 'blue' }} />
                Free Service
              </button>
            </div>
            <div className='flex items-center my-4 gap-1'>
              <BsFire style={{ color: 'blue' }} />
              8 students viewed this property
            </div>

            <div>
              <button className='w-full bg-white text-blue-600 font-semibold border border-blue-600 py-3 rounded-md my-4'>
                View Rooms
              </button>
              <button className='w-full bg-blue-600 text-white font-semibold border border-blue-600 py-3 rounded-md my-4 flex items-center justify-center gap-1'>
                Enquire Now <FaAngleRight />
              </button>
            </div>
          </div>
        </div>

        <div className='2ed-Container ml-3 mr-10 mt-6 my-4 bg-white rounded-lg'>
          <button className='py-4 w-full border border-gray-300 rounded-lg flex justify-around items-center '>
            <div className='flex items-center gap-1'>
              <CiDollar size={20} />
              <div className='font-semibold'>Price Match Guarantee</div>
            </div>
            <div>
              <FaAngleRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPortion;
