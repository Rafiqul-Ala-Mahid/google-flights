const Footer = () => {
    return (
      <div className="bg-black px-[10%] py-[20px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[60%]">
            <h1 className="text-white text-xl font-bold">ABOUT FLIGHT FARE</h1>
            <p className="text-white text-sm mt-[20px]">
              We provide our customers with a range of discount and savings
              options when searching for airfares. Our comprehensive search
              process encompasses over 500 airlines and compares hundreds of
              travel sites at once, ensuring you find the most competitive rates
              available. We are passionate about making travel more accessible
              and enjoyable for everyone, and we are constantly striving to
              improve our offerings and exceed customer expectations.
            </p>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">USEFUL LINKS</h1>
            <div className="text-white lg:w-[200px] flex flex-col text-sm mt-[20px]">
              <a href="#" className="border-b-2 border-[#4C859E]">
                Contact Us
              </a>
              <a href="#" className="border-b-2 border-[#4C859E]">
                Terms of Use
              </a>
              <a href="#" className="border-b-2 border-[#4C859E]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;