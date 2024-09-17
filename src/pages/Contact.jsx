const ContactPage = () => {
  return (
    <div className=" mt-[82px] lg:mt-[92px]">
      <div className="relative h-64 bg-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5846148/pexels-photo-5846148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" sparks"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <h1 className="text-4xl font-bold text-white z-10">Reach Out To Us</h1>
      </div>
      <div className="flex flex-col md:flex-row min-h-full">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 py-28 md:py-40 px-8">
          <h2 className="text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-lg mb-6">
            Our friendly team would love to hear from you!
          </p>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 p-3 rounded outline-[#11999e]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 p-3 rounded outline-[#11999e]"
              />
            </div>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 p-3 rounded outline-[#11999e]"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 p-3 rounded outline-[#11999e]"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded outline-[#11999e]"
            ></textarea>
            <button className="w-full bg-blue-600 text-white p-3 rounded">
              Send message
            </button>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="w-full md:w-1/2 h-[600px] z-0 p-8 md:p-0 md:h-auto overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.4405936801353!2d77.27226905469769!3d28.516796221603784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce150ba77e109%3A0xb5c9d3783690ffaf!2sVijay%20Enterprises!5e0!3m2!1sen!2sin!4v1726487906542!5m2!1sen!2sin"
            allowfullscreen
            className="h-full w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
