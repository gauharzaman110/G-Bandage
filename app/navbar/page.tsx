
"use client"

import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar: React.FC = () => {
    return (
        <header>
            {/* Top Bar */}
            <div className="bg-gray-800 text-white py-6 px-4 flex justify-between items-center text-sm">
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
    );
};

export default Navbar;


