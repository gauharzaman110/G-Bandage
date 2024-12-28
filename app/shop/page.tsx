import React from 'react'
// import Navbar from '../navbar/page'
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { MdWindow } from 'react-icons/md'
import { PiListChecks } from 'react-icons/pi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Shop = () => {
  return (
    <div className=''>
      {/* navbar with green */}
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
      <div className='space-y-4 my-4'>
        <fieldset className='bg-gray-100 py-8 '>
          <div className='mx-40 pt-4'>
            <div className='flex  justify-between '>
              <legend className='text-4xl mb-4 font-bold'>Shop</legend>
              <legend className='flex items-center space-x-2'>
                Home <IoIosArrowForward /> Shop
              </legend>
            </div>
            <div>
              <Image
                src='/9.png'
                alt='Picture of the author'
                width={1220}
                height={171}
                className='left-176px pb-8'
              />
            </div>
          </div>
        </fieldset>

        <fieldset className='flex justify-between mx-40 py-8 text-xl items-center'>
          <div className='text-gray-500 font-bold'>Showing all 12 results</div>
          <div className='flex gap-4'>Views: <MdWindow className='border border-black ' /> <PiListChecks className='border border-black ' /></div>
          <div className='flex gap-4'>
            <div className='relative'>
              <button className='bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center'>
                Popular
                <svg className='fill-current h-4 w-4 ml-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
              </button>
              <ul className='absolute hidden text-gray-700 pt-1'>
                <li className=''>
                  <a className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href='#'>Option 1</a>
                </li>
                <li className=''>
                  <a className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href='#'>Option 2</a>
                </li>
                <li className=''>
                  <a className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href='#'>Option 3</a>
                </li>
              </ul>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded'>
              Filter
            </button>
          </div>

        </fieldset>
        <fieldset className='bg-gray-100 '>
          <Image
            src='/10.png'
            alt='Picture of the author'
            width={1500}
            height={171}
            className='mx-2 py-8 '
          />
        </fieldset>
        <fieldset className='bg-gray-100 py-8 mb-8 '>
          <Image
            src='/11.png'
            alt='Picture of the author'
            width={1500}
            height={171}
            className='mx-2 py-8 '
          />
        </fieldset>
      </div>

    </div>
  )
}

export default Shop
