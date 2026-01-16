"use client";
import Link from "next/link";
import Image from "next/image";
const Header = () => {

    return (
        <div className="flex flex-row gap-4 p-4 border-2 border-gray-300 bg-[#d9d9d9] text-[#2c2c2c]">
            <div className="flex flex-row items-center gap-4 scroll-px-4">
                <Image src="/logos/COMPANY_LOGO_2026.png" alt="Aerial drone" width={50} height={50} className="bg-no-repeat" />
                <div className="font-light">
                    Resources Surveys Services
                </div>
            </div>
            <div className="flex flex-row ml-auto font-bold items-center divide-x divide-gray-400">
                <Link href="/home" className="py-2 px-12">
                    Home
                </Link>
                <Link href="/about" className="py-2 px-12">
                    About Us
                </Link>
                <div className="py-2 px-12">
                    Services
                </div>
                <div className="py-2 px-12">
                    <button className="bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-2 px-12 rounded-lg hover:bg-(--rs-black-2) hover:text-[var(--rs-yellow-3)] transition duration-300 ">
                        Contact Us  
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Header;