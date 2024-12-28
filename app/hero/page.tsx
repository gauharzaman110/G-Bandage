import Image from 'next/image'
import React from 'react'
import Card from '../card/page'
import Navbar from '../navbar/page'

const Hero = () => {
    return (
        <div className='space-y-2'>
            <Navbar/>
            <fieldset>
                <Image src="/main.png" alt="main" width={1550} height={10} />
            </fieldset>
            <fieldset className='flex flex-col items-center space-y-2 bg-gray-400'>
                <div className=' m-14 space-y-2 '>
                    <div className='text-center text-5xl font-bold'>EDITOR &apos S PICK</div>
                    <p className='text-center font-bold'>Problems trying to resolve the conflict between</p>
                    <div className='flex items-center'><Image src='/1.png' alt='row' width={1050} height={500} /></div>
                </div>
            </fieldset>
            <fieldset className='flex flex-col text-center space-y-2 bg-gray-400'>
                <div className='m-4 space-y-4'>
                    <div className='text-5xl font-bold'>Featured Products</div>
                    <div className='text-3xl font-bold'>BESTSELLER PRODUCTS</div>
                    <p className='text-xl '>Problems trying to resolve the conflict between</p>
                    <div className='space-y-4 flex flex-col  items-center'>
                        <Image src='/2.png' alt='row' width={1050} height={500} />
                        <Image src='/3.png' alt='row' width={1050} height={500} /></div></div>
            </fieldset>
            <fieldset>
                <Image src="/4.png" alt="main" width={1550} height={100} />
            </fieldset>
            <fieldset className='flex text-center right-4'>
                <section className="flex flex-col md:flex-row items-center  bg-white py-10 px-6 md:px-20">
                    {/* Image Section */}
                    <div className="flex-1">
                        <Image
                            src="/5.png"
                            alt="Couple with scarf"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1  mt-8 md:mt-0 md:ml-12 ">
                        <p className="text-sm mb-6 text-gray-500 uppercase tracking-wide">Summer 2020</p>
                        <h2 className="text-4xl w-auto font-bold text-gray-800 mt-2">Part of the Neural Universe</h2>
                        <p className="text-gray-600 mt-4">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="mt-6 flex space-x-4 ml-12">
                            <button className="px-6 py-2 bg-green-600 text-white font-medium text-sm rounded hover:bg-green-700">
                                Buy Now
                            </button>
                            <button className="px-6 py-2 border border-green-600 text-green-600 font-medium text-sm rounded hover:bg-green-100">
                                Read More
                            </button>
                        </div>
                    </div>
                </section>
            </fieldset>
            <fieldset>
                <Card />
            </fieldset>
        </div>
    )
}

export default Hero
