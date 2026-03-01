import React from "react";

const Newsletter = () => {
  return (
    <section className="font-sans bg-black">


      <div className="w-full h-[50vh] bg-neutral-100 flex flex-col items-center justify-center gap-2 shadow-lg text-center">
        <div className="uppercase text-xl text-neutral-900">Join the Newsletter</div>
        <div className="text-sm text-neutral-800 max-sm:w-[60%]">
          Be the first to know about new collections and exclusive offers.
        </div>
        <div className="mt-4 border w-100 relative border-neutral-400">
          <input
            type="email"
            placeholder="Enter your email"
            className=" rounded-md px-4 py-2 w-full bg-white border-none focus:outline-none text-neutral-900"
          />
          <button className="bg-neutral-900 text-white px-4 py-2 absolute bottom-0 right-0 cursor-pointer hover:bg-black transition-all duration-300 ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
