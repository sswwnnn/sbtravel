import React from "react";

export default function AboutUs() {
  return (
    <div className="">
      <div className="header__img-text">
        <div
          className="bg-white dark:bg-gray-900 absolute rounded-xl"
          style={{
            width: "60%",
            left: "50%",
            top: "40%",
            transform: "translate(-50%)",
          }}
        >
          <div className="py-8 px-12 mx-auto text-left">
            <div className="body">
              <h1 className="text-4xl text-center">About Us</h1>
              <p className="text-3xl text-center leading-8">
                Southbound Travel: Your Trusted Bus Reservation Service in the Philippines
              </p>
              <p className="text-md leading-8">
              Southbound Travel is the leading bus reservation service in the Philippines, 
              offering travelers a seamless and reliable way to secure their seats for 
              journeys across the country. Trusted by both established bus operators and countless 
              passengers, our platform is committed to making bus travel more convenient, efficient, 
              and accessible.
              </p>
              <p className="text-md leading-8">
              With Southbound Travel, planning your next trip has never been easier. We initially 
              focused on the most popular bus routes from Metro Manila to Bicol, helping travelers 
              reach key destinations like Legazpi, Naga, and other major cities in the region. Now, 
              we continue to expand our coverage, allowing passengers to book tickets to more 
              locations across the Philippines. Whether you're traveling for business, leisure, 
              or visiting loved ones, we ensure a smooth and hassle-free booking experience.
              </p>
              <p className="text-md leading-8">
              Our user-friendly platform enables you to browse schedules, compare fares, and reserve 
              your preferred seats with just a few clicks. No more long queues or last-minute 
              uncertainties—secure your tickets in advance and receive fast confirmation. Plus, with our 
              dedicated customer support team, assistance is always within reach.
              Experience the convenience of modern bus travel with Southbound Travel.
              Book your trip today and enjoy a stress-free journey to your destination!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="header__bg-dark header__with-img"
        style={{ minHeight: "100vh" }}
      ></div>
    </div>
  );
}
