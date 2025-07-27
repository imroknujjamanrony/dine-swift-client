import Cover from "../shared/Cover";
import contactCover from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/shared/SectionTitle";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Cover
        coverBg={contactCover}
        heading={"contact us"}
        subHeading={"would you like to try a dish?"}
      ></Cover>
      <div>
        <SectionTitle
          heading={"our-location"}
          subheading={"visit us"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-10">
          {/* Phone Card */}
          <div className="bg-white shadow-lg">
            <div className="bg-yellow-600 text-white flex justify-center py-4">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div className="bg-gray-100 text-center py-6 px-4">
              <h3 className="text-lg font-semibold">PHONE</h3>
              <p className="mt-2 text-gray-700">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-lg">
            <div className="bg-yellow-600 text-white flex justify-center py-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div className="bg-gray-100 text-center py-6 px-4">
              <h3 className="text-lg font-semibold">ADDRESS</h3>
              <p className="mt-2 text-gray-700">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white shadow-lg">
            <div className="bg-yellow-600 text-white flex justify-center py-4">
              <FaClock className="text-2xl" />
            </div>
            <div className="bg-gray-100 text-center py-6 px-4">
              <h3 className="text-lg font-semibold">WORKING HOURS</h3>
              <p className="mt-2 text-gray-700">Mon – Fri: 08:00 – 22:00</p>
              <p className="text-gray-700">Sat – Sun: 10:00 – 23:00</p>
            </div>
          </div>
        </div>
        <SectionTitle
          heading={"send us a message"}
          subheading={"contact form"}
        ></SectionTitle>
        {/* form with name ,email,phone,message field */}
        <form className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+880 1XXXX XXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
