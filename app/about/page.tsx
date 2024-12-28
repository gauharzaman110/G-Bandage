import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaFacebook, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

const About = () => {
  return (
    <div>
      {/* navbar */}
      <header>
        <div className="bg-white px-4 shadow-md py-3  w-full ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">Bandage</div>

            {/* Navigation Links */}

            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
              <Link href="/product" className="text-gray-600 hover:text-blue-500">
                Product
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-500">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Contact
              </Link>
            </nav>


            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <div className="text-gray-600 flex gap-6  items-center">
                <Link href="/" className='hover:text-black text-blue-600 font-bold'>Login</Link>  <button className='hover:text-black flex border bg-blue-600 text-white p-2 rounded-lg items-center gap-2 px-4'>Be a Member <FaArrowRight /></button>
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

      <fieldset className='flex  items-center px-32 '>
        <div className='w-1/2 p-4 text-2xl gap-y-4 sapce-y-4'>
          <h1 className=''>ABOUT COMPANY</h1>
          <h1 className='text-4xl font-bold'>About Us</h1>
          <p className='text-xl text-gray-500'>We know how large objects will act, </p>
          <p className='text-xl text-gray-500'> but things on a small scale</p>
          <button className='text-white bg-blue-600 p-2 rounded-lg mt-4 text-xl px-4'>
            Get Quote Now
          </button>

        </div>
        <div>
          <Image
            src="/12.png"
            alt="About"
            width={571}
            height={500}

          />
        </div>
      </fieldset>


      <fieldset className='flex  items-center justify-center px-32 h-96 bg-gray-200'>
        <div className='w-1/2 px-4 space-y-8'>
          <p className='text-red-600'>Problems trying</p>
          <p className='text-2xl font-bold  '>Met minim Molie non desert Alamo est sit cliquey dolor do met sent.</p>
        </div>
        <div className=' px-16 text-xl text-gray-500 right-4'>
          <p>Problems trying to resolve the conflict between the two majow realms of  Classical physics: Newtonian mechanics</p>
        </div>
      </fieldset>


      <fieldset className='flex  items-center justify-around px-32 h-96 '>
        <div className='flex flex-col justify-center'>
          <p className='text-6xl font-bold'>15K</p>
          <p className='text-xl font-bold text-gray-500'>Happy Customer</p>
        </div>
        <div>
          <p className='text-6xl font-bold'>
            150K
          </p>
          <p className='text-xl font-bold text-gray-500'>Monthly Visitors</p>
        </div>
        <div>
          <p className='text-6xl font-bold'>
            15
          </p>
          <p className='text-xl font-bold text-gray-500'>Countries Worldwide</p>
        </div>
        <div>
          <p className='text-6xl font-bold'>
            100+
          </p>
          <p className='text-xl font-bold text-gray-500'>Top Partners</p>
        </div>
      </fieldset>


      <fieldset className='bg-gray-200 py-4 my-4'>
        <div className='flex flex-col items-center gap-y-4 px-32 py-16'>
          <h1 className='text-5xl font-bold'>Meet Our Team</h1>
          <p className=' text-gray-500 font-bold'>Problems trying to resolve the conflict between</p>
          <p className=' text-gray-500 font-bold'>the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className='flex justify-around'>
          <div className='border p-4 rounded-lg'>
            <div>
              <Image
                src="/13.jpg"
                alt="About"
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Username</p>
              <p className='text-gray-500'>Profession</p>
              <p className='flex gap-2'><FaFacebook color='blue' size={25} /><IoLogoInstagram color='blue' size={25} /><FaTwitter color='blue' size={25} /></p>
            </div>
          </div>
          <div className='border p-4 rounded-lg'>
            <div>
              <Image
                src="/14.jpg"
                alt="About"
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Username</p>
              <p className='text-gray-500'>Profession</p>
              <p className='flex gap-2'><FaFacebook color='blue' size={25} /><IoLogoInstagram color='blue' size={25} /><FaTwitter color='blue' size={25} /></p>
            </div>
          </div>
          <div className='border p-4 rounded-lg'>
            <div>
              <Image
                src="/15.jpg"
                alt="About"
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col items-center gap-y-3 pt-5 font-bold'>
              <p className='text-xl'>Username</p>
              <p className='text-gray-500'>Profession</p>
              <p className='flex gap-2'><FaFacebook color='blue' size={25} /><IoLogoInstagram color='blue' size={25} /><FaTwitter color='blue' size={25} /></p>
            </div>
          </div>
        </div>
      </fieldset>


      <fieldset className='py-4 my-4 bg-gray-50'>
        <div className='flex flex-col items-center gap-y-4 px-32 py-16'>
          <h1 className='text-5xl font-bold'>Big Companies Are Here</h1>
          <p className=' text-gray-500 font-bold'>Problems trying to resolve the conflict between</p>
          <p className=' text-gray-500 font-bold'>the two major realms of Classical physics: Newtonian mechanics</p>
          <Image
            src="/10.png"
            alt="About"
            width={1500}
            height={500}
          />
        </div>
        <div>
          <div className="relative">
            <Image
              src="/16.png"
              alt="About"
              width={1000}
              height={500}
              className="pb-0 w-full"
            />
            <button className="absolute inset-0 m-auto w-[145px] h-[57px] bg-blue-600 text-white p-2 rounded-lg border-2 border-white hover:border-black right-[64%] top-[29%]">
              Button
            </button>
          </div>


        </div>
      </fieldset>


    </div>
  )
}

export default About