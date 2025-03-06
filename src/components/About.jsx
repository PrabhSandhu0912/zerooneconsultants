import React from "react";
import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/mobile-login.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div>
        {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="About Zero One Consultants" className="w-full"/>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Your Trusted Partner in Business and Financial Solutions
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Zero One Consultants, established in 2012, is a leading business and financial consultancy firm based in Manchester. We specialize in accounting, tax consultancy, business management, and payroll solutions. Our expertise helps businesses navigate complex financial landscapes with ease and efficiency.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
            Providing <br /> <span className="text-brandPrimary">Expert Business and Financial Consulting</span>
            </h2>
            <p>Helping businesses succeed through strategic financial management and consulting.</p>
            </div>

            {/* stats */}
            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/group.png" alt="Clients Served" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">10,000+</h4>
                        <p>Clients Served</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/clubs.png" alt="Businesses Assisted" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">5,000+</h4>
                        <p>Businesses Assisted</p>
                    </div>
                </div>
                </div>
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/click.png" alt="Consultations" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">50,000+</h4>
                        <p>Consultations Provided</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/payments.png" alt="Financial Solutions" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">£1M+</h4>
                        <p>Financial Solutions Managed</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
