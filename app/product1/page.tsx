import React from 'react'
// import Navbar from '../navbar/page'
import Link from 'next/link'
import { FaCircle, FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPhoneAlt, FaRegHeart, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import { IoIosArrowForward, IoLogoInstagram } from 'react-icons/io'
// import { MdWindow } from 'react-icons/md'
// import { PiListChecks } from 'react-icons/pi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiStarSFill, RiStarSLine } from 'react-icons/ri'
import { BsCart } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'

const page = () => {
  return (
    <div>
      {/* nav */}
      <header>
        {/* Top Bar */}
        <div className="bg-green-600 text-white py-6 px-4 flex justify-between items-center  ">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> <FaPhoneAlt />
              (225) 555-0118
            </span>
            <span className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> michelle.rivera@example.com
            </span>
          </div>
          <div className="flex items-center space-x-28">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex items-center space-x-3">

              <div className="flex gap-3 ">
                <div>Follow Us:</div>
                <div className='flex gap-2 mt-1'>
                  <FaInstagram />
                  <FaFacebookSquare />
                  <FaYoutube />
                  <FaTwitter />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white px-4 shadow-md py-3  w-full hover:h-14">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">Bandage</div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
              <div className="text-gray-600 hover:text-blue-500">
                <DropdownMenu>
                  <DropdownMenuTrigger>Shop</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel><Link href='/product'> Product list </Link></DropdownMenuLabel>
                    <DropdownMenuLabel><Link href='/product1'> Product  </Link></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link href="/about" className="text-gray-600 hover:text-blue-500">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Pages
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <div className="text-gray-600 ">
                <Link href="/" className='hover:text-blue-500'>Login</Link> / <Link href="\" className='hover:text-blue-500 '>Sign In</Link>
              </div>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fas fa-search"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fas fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </header>


      <div className='flex  gap-2 text-xl font-bold pt-8 pl-24 bg-gray-200'>Home <span className='flex gap-2 text-xl font-bold text-gray-400'><IoIosArrowForward size={30} /> Shop</span></div>

      <fieldset className='py-7 px-6 bg-gray-200'>
        <div className=' flex justify-around'>
          <div className='w-1/2 pl-16 '>
            <Image src="/33.jpg" alt="product" width={500} height={500} className='border border-black shadow-lg shadow-gray-900' />
            <div className='flex gap-4 pt-4'>
              <Image src="/33.jpg" alt="product" width={100} height={100} className='border border-black shadow-lg shadow-black' />
              <Image src="/34.jpg" alt="product" width={100} height={200} className='border border-black shadow-lg shadow-black' />
            </div>
          </div>
          <div className='space-y-4'>
            <h1 className='text-5xl '>
              Floating Phone
            </h1>
            <div className='flex '>
              <RiStarSFill size={25} color='orange' /><RiStarSFill size={25} color='orange' /><RiStarSFill size={25} color='orange' /><RiStarSFill size={25} color='orange' /><RiStarSLine size={25} color='orange' /> <span className='font-bold text-gray-400 pl-2'>10 Reviews</span>
            </div>
            <p className='text-4xl font-bold'>$1,139.33</p>
            <p className='text-xl font-bold text-gray-400'>Availability : <span className='text-blue-600'>In Stock</span></p>
            <p className='w-[60%] text-gray-600 font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official consequent door ENIM RELIT Molie. Excitation venial consequent sent nostrum met.</p>
            <hr color='black' className='w-[50%]]' />
            <div className='flex gap-4 py-3'>
              <FaCircle size={35} color='blue' /><FaCircle size={35} color='green' /><FaCircle size={35} color='orange' /><FaCircle size={35} color='black' />
            </div>
            <div className='flex gap-4 items-center pt-16'>
              <button className=' text-white font-bold border rounded-2xl bg-blue-600 py-4 px-6'>Select Options</button>
              <FaRegHeart color='black' size={40} className='border-2 border-black rounded-full py-2' />
              <BsCart color='black' size={40} className='border-2 border-black rounded-full py-2' />
              <IoEyeSharp color='black' size={40} className='border-2 border-black rounded-full py-2' />
            </div>
          </div>
        </div>
      </fieldset>



      <fieldset>
        <div className='flex justify-center gap-40 py-4 pt-16 text-xl font-bold text-gray-500'>
          <p>Description</p>
          <p>Additional Information</p>
          <p>Reviews <span className='text-green-600'>(0)</span></p>
        </div>
        <hr />


        <div className='flex justify-center gap-4 px-16 py-4'>
          <div className='border-r-[14px] border-b-[14px] rounded-2xl border-gray-300'>
            <Image
              src="/39.png"
              alt="About"
              width={400}
              height={300}
              className=' h-[500px]'
            />
          </div>
          <div className='w-1/2 flex gap-4'>
            <div className='w-1/2'>
              <h1 className='text-2xl font bold pb-4 font-bold'>The quick fox jumps over</h1>
              <p className=' text-gray-500 text-xl pb-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Molie. Excitation venial consequent sent nostrum met.</p>
              <p className=' text-gray-500 text-xl pb-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Molie. Excitation venial consequent sent nostrum met.</p>
              <p className=' text-gray-500 text-xl pb-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Molie. Excitation venial consequent sent nostrum met.</p>

            </div>
            <div className='space-y-16'>
              <div className='space-y-4'>
                <h1 className='text-2xl font bold pb-4 font-bold'>The quick fox jumps over</h1>
                <p className='flex items-center gap-4 text-xl text-gray-500 '><IoIosArrowForward size={20} /> the quick fox jumps over</p>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
              </div>

              <div className='space-y-4'>
                <h1 className='text-2xl font bold pb-4 font-bold'>The quick fox jumps over</h1>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
                <p className='flex items-center gap-4 text-xl text-gray-500'><IoIosArrowForward /> the quick fox jumps over</p>
              </div>

            </div>
          </div>
        </div>
      </fieldset>



      <fieldset className='py-8 bg-gray-300'>
        <div className='text-2xl font-bold pl-12'>BEST SELLER PRODUCT</div>
        <div className='grid grid-cols-4 gap-4 px-12 py-4'>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/35.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/36.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/37.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/38.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/35.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/39.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/38.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>
          <div className='border-[4px] shadow-lg rounded-lg flex flex-col justify-center items-center w-[300px]'>
            <div>
              <Image
                src="/36.png"
                alt="About"
                width={300}
                height={200}
                className='rounded-lg'
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Graphic Design</p>
              <p className='text-gray-500'>English Department</p>
              <p className='flex gap-2 text-gray-500'>$16.48  <span className='text-green-900'>$6.48</span></p>
            </div>
          </div>


        </div>

      </fieldset>
      <div>
        <Image
          src="/10.png"
          alt="About"
          width={1500}
          height={500}
          className='w-full'
        />

      </div>


      <fieldset className='flex justify-between px-32 py-8'>
        <div className="text-3xl font-bold">Bandage</div>

        <div className="hidden md:flex space-x-6">
          <FaTwitter color='blue' size={30} /><FaFacebook color='blue' size={30} /><IoLogoInstagram color='blue' size={30} /><FaLinkedin color='blue' size={30} />
        </div>
      </fieldset>



    </div>
  )
}

export default page
