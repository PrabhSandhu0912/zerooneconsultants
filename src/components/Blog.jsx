import { Card } from 'flowbite-react';
import React from 'react';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Blog = () => {
    const blogs = [
        {id: 1, title: "Driving Digital Transformation in Business Strategies", image: "/src/assets/blog1.png"},
        {id: 2, title: "How Data Analytics is Shaping the Future of Consulting", image: "/src/assets/blog2.png"},
        {id: 3, title: "The Role of AI in Optimizing Business Performance", image: "/src/assets/blog3.png"},
    ];
    return (
        <div  className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='blog'>
            <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            
            className='text-center md:w-1/2 mx-auto'>
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
            Insights That Drive Innovation
            </h2>
            <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
            Explore our latest articles covering emerging technologies, business strategies, and consulting insights to help organizations stay ahead in an evolving market.
            </p>
            </motion.div>

            {/* all blogs */}
            <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            
            className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16'>
                {
                    blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                       <img src={blog.image} alt="" className='mx-auto hover:scale-95 transition-all duration-300'/>
                       
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className="flex gap-8 items-center justify-center">
                                 <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                                </a>
                            </div>
                        </div>
                    </div>)
                }
            </motion.div>

        </div>
    );
};

export default Blog;