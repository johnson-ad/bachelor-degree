import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{
        delay: 0.6,
        x: { duration: 1 },
        default: { ease: 'linear' },
      }}
    >
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-15 mt-8">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Stream<span className="text-blue-600">line</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link href="https://www.google.com">
                <a>
                  <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                </a>
              </Link>
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaTiktok className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 <span>AMG</span> all rights reserved
        </h1>
      </div>
    </motion.div>
  );
}
