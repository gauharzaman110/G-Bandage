import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineArrowTurnRightDown } from 'react-icons/hi2'
import { IoLogoInstagram } from 'react-icons/io'

const page = () => {
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
            <fieldset className='flex gap-10 justify-around p-10'>
                <div className='space-y-4 '>
                    <h1 className='font-bold pb-8'>CONTACT US</h1>
                    <p className='text-6xl font-bold w-[500px]'>Get in touch today!</p>
                    <p className='text-xl text-gray-600 w-[60%] py-4'>We know how large objects will act, but things on a small scale</p>
                    <div className='text-xl font-bold'>Phone ; +451 215 215 </div>
                    <div className='text-xl font-bold'>Fax ;  +451 215 215</div>
                    <div>
                        <p className='flex gap-6 pt-6'><FaTwitter color='black' size={40} /><FaFacebook color='black' size={40} /><IoLogoInstagram color='black' size={40} /><FaLinkedin color='black' size={40} />
                        </p> </div>
                </div>
                <div>
                    <Image
                        src='/29.png'
                        alt='contact'
                        width={500}
                        height={500}

                    />
                </div>
            </fieldset>



            <fieldset className='space-y-8 bg-gray-100 py-4'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl font-bold'>VISIT OUR OFFICE</p>
                    <h1 className='text-4xl font-bold ' >We help small businesses <br /> with big ideas</h1>
                </div>
                <div>
                    <div className='flex justify-center space-x-1 pb-6'>
                        <Image
                            src='/30.png'
                            alt='office'
                            width={300}
                            height={100}
                            className='h-[500px] border rounded-2xl bg-gray-400 shadow-2xl mt-8'
                        />
                        <Image
                            src='/31.png'
                            alt='office'
                            width={300}
                            height={200}
                            className='h-[533px] border rounded-2xl bg-gray-400 shadow-lg '
                        />
                        <Image
                            src='/32.png'
                            alt='office'
                            width={300}
                            height={100}
                            className='h-[500px] border rounded-2xl bg-gray-400 shadow-2xl mt-8'
                        />

                    </div>
                    <div className='flex flex-col justify-center items-center pt-14 bg-white'>
                        <HiOutlineArrowTurnRightDown size={60} color='blue' className='mb-6' />
                        <p className='font-bold text-xl'>WE Can &apost WAIT TO MEET YOU</p>
                        <h1 className='text-6xl font-bold my-4'>Let &aposs Talk</h1>
                        <button className='border rounded-3xl px-8 py-6 text-xl font-bold text-white bg-blue-600 my-4'>
                            Try it free now
                        </button>
                    </div>
                </div>

            </fieldset>



            <fieldset className='flex justify-between px-32 py-4'>
                <div className="text-3xl font-bold">Bandage</div>

                <div className="hidden md:flex space-x-6">
                <FaTwitter color='blue' size={30} /><FaFacebook color='blue' size={30} /><IoLogoInstagram color='blue' size={30} /><FaLinkedin color='blue' size={30} />
                </div>
            </fieldset>

        </div>
    )
}

export default page
