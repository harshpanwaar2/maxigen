import React from "react";
import {Link} from "react-router-dom"
import athleteImg from "../../assets/about/athelete.jpeg";
import tabletesImg from "../../assets/about/tablets.jpeg";
import scientistImg from "../../assets/about/scientist.jpeg";
import factoryImg from "../../assets/about/factorry.jpg";
import fitnessImg from "../../assets/about/fitness.jpg";
import lifestyleImg from "../../assets/about/lifestyle.jpg";
import natureImg from "../../assets/about/nature.jpg";


const OurMission = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Section 1: */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image */}
        <div>
          <img
            src={athleteImg}
            alt="Our Mission"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center pl-6 md:text-left">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To make an immediate, powerful first impression that establishes
            your brand's purpose.
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4">
            Science-Backed Nutrition for Your Full Potential
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Founded in 2016, Maxigen Nutrition is one of Australia’s most
            trusted health supplement brands. We deliver clean, effective, and
            science-backed nutritional solutions to support your overall health,
            athletic performance, and daily vitality.
          </p>
           {/* ADDED: "Read Our Story" Button */}
          <Link to="/our-story">
            <button className="px-8 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 mt-5">
              Read Our Story
            </button>
          </Link>
        </div>
      </div>
      {/* SECTION-2 */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            The Core of Maxigen
          </h2>
          <div className="w-24 h-1 bg-blue-600 mb-8 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To explain your formulation philosophy and the breadth of your
            product offerings
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4">
            Science-Backed Nutrition for Your Full Potential
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            At Maxigen Nutrition, we blend cutting-edge scientific research with
            the best of nature to craft supplements that are both powerful and
            pure. Our formulations are designed to cater to a wide range of
            health goals, including muscle building, endurance, recovery, weight
            management, cognitive performance, immune support, gut health, and
            more. With a constantly growing product line and an expanding
            presence both in Australia and internationally, Maxigen is committed
            to innovation, quality, and customer results.
          </p>
        </div>
        {/* Right Image */}
        <div className="order-1 md:order-2">
          <img
            src={tabletesImg}
            alt="The Core of Maxigen"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
      {/* SECTION-3 */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center mt-24">
        {/* Left Image */}
        <div>
          <img
            src={scientistImg}
            alt="Research"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center pl-6 md:text-left">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Our World-Class R&D
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To build massive credibility by showcasing your scientific expertise
            and in-house facilities.
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4">
            Science-Backed Nutrition for Your Full Potential
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            What truly sets us apart is our world-class Research & Development
            (R&D) facility. Our in-house labs are equipped with the latest
            scientific equipment, and our R&D team is led by top-tier
            professionals such as Dr. Ava Brunner ,Dr. Liam Rosenthal, and Dr.
            Farah Tan. This dedicated team works tirelessly on new formulations,
            testing new ingredients, and improving existing products. Their
            research ensures that every Maxigen product is not only effective
            but also rooted in real science, with every ingredient chosen for
            its bioavailability, safety, and impact.
          </p>
        </div>
      </div>
      {/* SECTION-4 */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Uncompromising Standards. Complete Transparency
          </h2>
          <div className="w-24 h-1 bg-blue-600 mb-8 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To quickly and clearly communicate your commitment to the highest
            standards. This section is all about building trust.
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4">
            Science-Backed Nutrition for Your Full Potential
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Quality, transparency, and safety are the pillars of our production
            process. All Maxigen supplements are manufactured in GMP-certified
            and FDA-registered facilities. Our products are third-party lab
            tested to ensure purity and consistency, and we proudly carry
            several industry certifications, including HALAL, GMP,
            FDA-compliance, and International Ingredient Quality. Our labels are
            clean and transparent — free from banned substances, artificial
            fillers, heavy metals, and hidden additives — so our customers know
            exactly what they’re putting into their bodies.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our ingredients are sourced from global, trusted suppliers, ensuring
            every raw material meets international quality standards. From North
            American whey proteins to clinically proven botanicals from Europe
            and Asia, Maxigen uses only premium-grade, responsibly sourced
            ingredients in every product. Each formulation is developed to work
            synergistically with the body to promote real, lasting results — not
            just short-term boosts.
          </p>
        </div>
        {/* Right Image */}
        <div className="order-1 md:order-2">
          <img
            src={factoryImg}
            alt="The Core of Maxigen"
            className="w-full h-150 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
      {/* SECTION-5 */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center mt-24 ">
        {/* Left Image */}
        <div>
          <img
            src={fitnessImg}
            alt="Our Mission"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center pl-6 md:text-left">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Powering Your Passion.
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To connect with your target audience and show them that your
            products are designed for them.
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4"></p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our products are created for those who are serious about health
            professional athletes, gym-goers, bodybuilders, fitness trainers,
            and anyone on a journey to better living. Whether you’re aiming to
            build lean muscle, increase endurance, enhance focus, or simply feel
            better every day, we have solutions tailored for your goals. We also
            support and collaborate with sports clubs, gyms, wellness coaches,
            and healthcare professionals to ensure our formulations meet the
            real-world demands of performance and recovery.
          </p>
        </div>
      </div>
      {/* SECTION-8 */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Join the Maxigen Community.
          </h2>
          <div className="w-24 h-1 bg-blue-600 mb-8 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To end with an inspiring, community-focused message and guide the
            visitor on what to do next
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4">
            Science-Backed Nutrition for Your Full Potential
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            At Maxigen Nutrition, we’re more than a supplement company — we’re a
            lifestyle brand focused on helping people train harder, recover
            faster, and live better. Our community is made up of goal-driven
            individuals who care about what they consume and expect the best in
            return. We’re proud to be the trusted partner of thousands across
            Australia and beyond, helping them fuel their fitness, sharpen their
            minds, and unlock their full potential.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether you’re stepping into the gym for the first time or preparing
            for your next competition, Maxigen Nutrition is here to power your
            journey — with products backed by science, crafted with care, and
            designed to deliver results.
          </p>
        </div>
        {/* Right Image */}
        <div className="order-1 md:order-2">
          <img
            src={lifestyleImg}
            alt="The Core of Maxigen"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* SECTION-7 */}

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center mt-24 ">
        {/* Left Image */}
        <div>
          <img
            src={natureImg}
            alt="Our Mission"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center pl-6 md:text-left">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Evolving for a Healthier Future
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
          <h4 className="text-2xl md:text-xl text-gray-600 font-bold mb-4">
            To show that your brand is forward-thinking and responsible
          </h4>
          <p className="text-xl md:text-lg text-gray-500 font-bold mb-4"></p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Maxigen Nutrition is also deeply committed to sustainability. We
            strive to minimize our environmental footprint by using
            eco-conscious packaging and supporting ethical sourcing and
            production methods. Our team believes that wellness shouldn’t come
            at the cost of the planet — and we ensure that our practices reflect
            that belief.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            As we continue to grow, we are constantly expanding our product
            range to meet the evolving needs of our customers. From plant-based
            alternatives and clinical-grade supplements to personalized health
            solutions, we’re working to stay at the forefront of nutraceutical
            science. We also invest in digital wellness education, sports
            science partnerships, and community engagement programs to help our
            customers stay informed and motivated.
          </p>
        </div>
      </div>

      {/* SECTION-6 */}
    </section>
  );
};

export default OurMission;
