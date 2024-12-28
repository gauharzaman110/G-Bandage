import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoIosArrowForward, IoIosRadioButtonOff } from 'react-icons/io'

const Page = () => {
  return (

    <div>
      {/* nav */}
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
              <Link href="/contact" className="text-gray-600 hover:text-blue-500">
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

      {/* body */}
      <section className='flex flex-col items-center space-y-6 py-8'>
        <p className='font-bold text-gray-600'>PRICING</p>
        <p className='text-7xl '>Simple Pricing</p>
        <p className='flex gap-2'>Home <span className='flex gap-2 text-gray-500'><IoIosArrowForward size={25} /> Pricing</span></p>
      </section>

      <fieldset className='flex flex-col items-center space-y-2 bg-gray-50 pt-5'>
        <p className='text-5xl font-bold '>Pricing</p>
        <div className='flex flex-col items-center space-y-2 pb-6'>
          <p>Problems trying to resolve the conflict between</p>
          <p>the two major reals of Classical physics: Ndewtonian mechanics</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p>Monthly</p>
          <div className='border border-black rounded-xl w-[35px] bg-white'><IoIosRadioButtonOff color='black' /></div>
          <p>Yearly</p>
          <button className='border border-blue-800 rounded-3xl w-[100px] py-2 bg-blue-700 text-blue-300'>Save 25%</button>
        </div>
        <div>
          <Image
            src='/17.png'
            alt='row'
            width={1050}
            height={500}
          />
        </div>
      </fieldset>


      <fieldset className='flex flex-col items-center space-y-2 bg-gray-50 py-9'>
        <p className='text-3xl'>Trusted By Over 4000 Big Companies</p>
        <Image
          src='/10.png'
          alt='row'
          width={1300}
          height={500}
        />
      </fieldset>


      <fieldset className='flex flex-col items-center space-y-2 py-9'>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-3xl font-bold'>Pricing FAQs</h1>
          <p className='font-bold text-gray-400'>Problems trying to resovlve the conflict between</p>
          <p className='font-bold text-gray-400'>the two mahor realms off classical physics</p>
        </div>
        <div className='grid grid-cols-2 gap-4 w-[70%] justify-center'>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className=''>
            <h1 className='flex gap-2 py-3 text-xl text-green-700 font-bold items-center'><IoIosArrowForward /> The quick fox jumps over the lazy dog</h1>
            <p className='w-[70%] pl-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT offical consequent doow ENIM rrelit Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
        </div>

        <h1 className='text-xl text-gray-500 font-bold pt-[50px]'>Haven't got your answer? Contact our support</h1>
      </fieldset>

      <fieldset className='flex flex-col items-center space-y-2 bg-gray-50 py-9 pt-[150px] mb-2'>
        <h1 className='text-4xl font-bold py-5'>Start your 14 days free trial</h1>
        <p className='font-bold text-gray-500'>Met minum mollie non deset alamo est sit cliquey dolor</p>
        <p className=' font-bold text-gray-500'>do met sent. Relit offical consequent.</p>
        <button className='border border-blue-600 bg-blue-700 text-white px-5  py-4 rounded-2xl '>Try it free now</button>
        <div className='flex gap-6 pt-5 py-6'>
          <FaInstagram color='blue' size={27}/>
          <FaFacebookSquare color='blue' size={27}/>
          <FaYoutube color='blue' size={27}/>
          <FaTwitter color='blue' size={27}/></div>
      </fieldset>

    </div>
  )
}

export default Page
