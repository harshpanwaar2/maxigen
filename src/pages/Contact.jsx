import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import contactImg from "../assets/contact.png";

const Icon = ({ name, className }) => {
  const icons = {
    location: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    headquarter: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m0 4h5m0 0v-4m0 4H3m3-4h3m-3 0V7h3v10m0 0v-4"
        />
      </svg>
    ),
    hours: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    info: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  };
  return icons[name] || null;
};

const InfoCard = ({ iconName, title, lines }) => (
  <div className="flex items-start space-x-4 p-4">
    <Icon name={iconName} className="w-8 h-8 text-gray-800 mt-1" />
    <div>
      <h3 className="font-bold text-sm tracking-widest text-gray-500 uppercase">
        {title}
      </h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-800 text-base">
          {line}
        </p>
      ))}
    </div>
  </div>
);

const ContactInfoSection = () => {
  const contactDetails = [
    {
      iconName: "location",
      title: "Store Location",
      lines: ["7409 Maylield Rd.", "Woodhaven, NY 11421"],
    },
    {
      iconName: "headquarter",
      title: "Headquarter",
      lines: ["2972 Westheimer Rd. Santa", "Ana, Illinois 85486"],
    },
    {
      iconName: "hours",
      title: "Office Hours",
      lines: ["Monday - Friday", "8:00am - 4:00pm"],
    },
    {
      iconName: "info",
      title: "Contact Info",
      lines: ["Telephone: (084) 123 - 456 88", "Email: info@example.com"],
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {contactDetails.map((detail) => (
            <InfoCard key={detail.title} {...detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter">
          SEND US FEEDBACK
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          For more information and how we can meet your needs, please fill out
          the form below and someone from our team will be in touch.
        </p>

        {submitted ? (
          <div className="mt-12 p-6 bg-green-100 text-green-800 rounded-lg">
            Thank you for your feedback! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="p-4 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="p-4 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>
            <div className="mt-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="p-4 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Say something..."
                rows="6"
                className="p-4 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              ></textarea>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const MapSection = () => (
  <div className="w-full h-96 md:h-[500px] bg-gray-200">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281165187!2d-0.2416812869645213!3d51.52877184089943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1726224376785!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
    ></iframe>
  </div>
);

export default function App() {
  return (
    <div className="bg-gray-50 font-sans  px-4 gap-y-6  antialiased">
      <main>
        <div
          className="bg-gray-200 py-16  h-100 flex items-center justify-center flex-col  rounded-xl text-center"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
            CONTACT
          </h1>
          <Breadcrumbs
            aria-label="breadcrumb"
            className="flex justify-center  "
            sx={{ color: 'white' }}
          >
            <Link underline="hover" href="/" sx={{ color: 'white' }} >
              Home Page
            </Link>
            <Typography>Shop</Typography>
          </Breadcrumbs>
        </div>

        <ContactInfoSection />

        {/* Map Section */}
        <MapSection />

        {/* Feedback Form Section */}
        <ContactForm />
      </main>
    </div>
  );
}
