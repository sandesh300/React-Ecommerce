import React from "react";

function Footer() {
  const emailAddress = "bhujbalsandesh52@gmail.com";

  return (
    <>
      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Ecommerce App </h3>
            <p> Buy what you want. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on</p>
                  <p className="text-sm md:text-base">Google Play Store</p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on</p>
                  <p className="text-sm md:text-base">Apple Store</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "gainsboro" }}
          >
            <a href="https://github.com/sandesh300" target="_blank">
              <img
                src="github.png "
                alt="Github Logo"
                className="ml-5 w-13 h-14 inline-block space-x-4"
              />
            </a>
            <a href={`mailto:${emailAddress}`} className="">
              <img
                src="mail.png "
                alt="Email Logo"
                className="ml-5 w-11 h-11 inline-block space-x-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sandesh-bhujbal-b3a16a222/"
              target="_blank"
            >
              <img
                src="linkedin.png "
                alt="Linkedin Logo"
                className="ml-6 w-10 h-10 inline-block space-x-4"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
