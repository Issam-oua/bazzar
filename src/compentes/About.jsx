import React from 'react'
import image from '../accets/bazar-about-img.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <Navbar/>
    </div>
    <div className="bg-gray-100 h-screen flex justify-center items-center">
    <div className="w-full p-8">
      <h1 className="text-4xl font-bold text-black-500 mb-6 text-center">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center w-full">
        <div className="lg:w-1/2 mb-6 lg:mb-0 px-4">
          <h2 className="text-3xl font-semibold mb-4">Welcome To My Website (ISSAM)</h2>
          <p className="text-gray-700 mb-6">
            Discover the latest trends and innovations in technology, design, and more. Our team of experts
            brings you the best content and insights to help you stay ahead of the curve.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-all" style={{marginRight:'6px'}}>
            Learn More
          </button>
          <Link to='/'>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-black transition-all">
            Back to Home
          </button>
          </Link>
        </div>
        <div className="lg:w-1/2 px-4">
          <img
            src={image} // Replace with your image path
            alt="Team Working"
            className="rounded shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default About