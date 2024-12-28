import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoIosArrowForward, IoLogoInstagram } from 'react-icons/io'

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


            <section className='flex flex-col items-center space-y-6 py-8'>
                <p className='font-bold text-gray-600'>What WE DO</p>
                <p className='text-7xl '>Innovation tailored for you</p>
                <p className='flex gap-2'>Home <span className='flex gap-2 text-gray-500'><IoIosArrowForward size={25} /> Team</span></p>
            </section>


            <fieldset>
                <div className='grid grid-row-2 grid-flow-col items-end gap-x-3 gap-y-6 justify-center  '>
                    <div className='row-span-2'><Image src='/24.png' alt='image' width={600} height={500} /></div>
                    <div><Image src='/25.png' alt='image' width={300} height={250} /></div>
                    <div><Image src='/26.png' alt='image' width={300} height={250} /></div>
                    <div><Image src='/27.png' alt='image' width={300} height={250} /></div>
                    <div><Image src='/28.png' alt='image' width={300} height={250} /></div>
                </div>
            </fieldset>


            <fieldset className='bg-gray-200 py-4 my-4'>
                <div className='flex flex-col items-center gap-y-4 px-32 py-16'>
                    <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                    {/* <p className=' text-gray-500 font-bold'>Problems trying to resolve the conflict between</p>
                    <p className=' text-gray-500 font-bold'>the two major realms of Classical physics: Newtonian mechanics</p> */}
                </div>
                <div className='grid grid-cols-3 justify-center items-center space-y-8'>
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/18.jpg"
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/19.jpg"
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/20.jpg"
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/21.jpg"
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/22.jpg"
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
                    <div className='border p-4 rounded-lg flex flex-col items-center'>
                        <div>
                            <Image
                                src="/23.jpg"
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



            <fieldset className='flex flex-col items-center space-y-2 bg-gray-50 py-9 pt-[150px] mb-2'>
                <h1 className='text-4xl font-bold py-5'>Start your 14 days free trial</h1>
                <p className='font-bold text-gray-500'>Met minum mollie non deset alamo est sit cliquey dolor</p>
                <p className=' font-bold text-gray-500'>do met sent. Relit offical consequent.</p>
                <button className='border border-blue-600 bg-blue-700 text-white px-5  py-4 rounded-2xl '>Try it free now</button>
                <div className='flex gap-6 pt-5 py-6'>
                    <FaInstagram color='blue' size={27} />
                    <FaFacebookSquare color='blue' size={27} />
                    <FaYoutube color='blue' size={27} />
                    <FaTwitter color='blue' size={27} /></div>
            </fieldset>
        </div>
    )
}

export default page
