import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-900 dark:text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-lg text-center mb-8">
                Welcome to BookStore, your premier destination for discovering and purchasing books online.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-6">
                At BookStore, we believe that books have the power to transform lives, spark imagination,
                and broaden horizons. Our mission is to make quality literature accessible to everyone,
                everywhere, by providing a seamless online shopping experience for book lovers.
              </p>

              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Extensive collection of books across all genres</li>
                <li>Competitive pricing and special offers</li>
                <li>Fast and reliable shipping</li>
                <li>Secure online payment options</li>
                <li>Personalized recommendations</li>
                <li>Excellent customer service</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-6">
                Founded with a passion for literature, BookStore started as a small bookstore and has grown
                into one of the most trusted online book retailers. We understand that every reader is unique,
                and we're committed to helping you find your next great read.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className=" dark:bg-gray-800 dark:text-white p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> info@bookstore.com</p>
                <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="mb-2"><strong>Address:</strong> 123 Book Street, Reading City, RC 12345</p>
                <p><strong>Hours:</strong> Monday - Friday: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About