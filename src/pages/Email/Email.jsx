
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import emailAnimationData from "../../assets/email.json"; 

// const Email = () => {
//   const [isSent, setIsSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setIsLoading(false);
//       setIsSent(true);

//       setTimeout(() => setIsSent(false), 5000);
//     } catch (error) {
//       console.error("Problems sending emails:", error);
//       setIsLoading(false);
//       alert("Email could not be sent. Please try again.");
//     }
//   };

//   return (
//     <section className="bg-black text-white py-16 px-4">
//       {/* হেডিং সেকশন */}
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-300 to-blue-800 text-center ">
//           🛠️ Let's Build
//         </h1>

//         <p className="text-lg md:text-xl text-gray-300">
//           Ready to bring your {" "}
//           <span className="relative inline-block font-bold text-white">
//              wildest ideas
//             {/* এখানে motion effect যুক্ত করা হয়েছে */}
//             <svg
//               viewBox="0 0 286 73"
//               fill="none"
//               className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
//             >
//               <motion.path
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 transition={{
//                   duration: 1.25,
//                   ease: "easeInOut",
//                 }}
//                 d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
//                 stroke="#FACC15"
//                 strokeWidth="3"
//               />
//             </svg>
//           </span>{" "}
//           to life? Let's make magic happen.
//         </p>
//       </div>

//       {/* Animation + Form Container */}
//       <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 bg-black rounded-xl shadow-2xl border border-purple-500">
//         {/* বাম পাশ: অ্যানিমেশন */}
//         <div className="md:w-1/2 flex items-center justify-center p-4">
//           <div className="w-full max-w-sm">
//             <Lottie
//               animationData={emailAnimationData}
//               loop={!isSent}
//               autoplay={true}
//             />
//           </div>
//         </div>

//         {/* ডান পাশ: ফর্ম */}
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
//            Send a Message
//           </h2>

//           {isSent ? (
//             <div className="text-center py-10 bg-green-900 bg-opacity-30 rounded-lg">
//               <p className="text-green-400 text-xl font-semibold">
//                Your message has been sent successfully! 🎉
//               </p>
//               <p className="text-gray-300 mt-2">
//                 You will be contacted soon.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Your Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Your awesome name"
//                   required
//                   className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="your@email.com"
//                   required
//                   className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   placeholder="Tell me about incredible project idea..."
//                   required
//                   className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="relative inline-block w-full h-[45px] sm:h-[50px] 
//                            hover:scale-[0.97] transition duration-300 mt-4"
//               >
//                 <i className="absolute -inset-[2px] block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>
//                 <i className="absolute -inset-2 block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>

//                 <span
//                   className={`absolute top-0 left-0 flex h-full w-full justify-center items-center overflow-hidden
//                   rounded-[5px] border border-[#040a29] bg-[rgba(14,21,56,0.75)] tracking-[1px] 
//                   text-white font-semibold text-base before:absolute before:top-0 before:-left-[50%]
//                   before:h-full before:w-full before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]
//                   ${
//                     isLoading
//                       ? "opacity-70 cursor-not-allowed"
//                       : "hover:opacity-90"
//                   }`}
//                 >
//                   {isLoading ? "Sending..." : "Send Message"}
//                 </span>
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Email;




import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emailAnimationData from "../../assets/email.json"; // তোমার JSON path

const Email = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      setIsSent(true);

      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("ইমেল পাঠানোর সমস্যা:", error);
      setIsLoading(false);
      alert("ইমেল পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।");
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* হেডিং */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-300 to-blue-800 text-center ">
          🛠️ Let's Build
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Ready to bring your{" "}
          <span className="relative inline-block font-bold text-blue-400">
            wildest ideas
            {/* Animated underline */}
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          to life? Let's make magic happen.
        </p>
      </div>

      {/* Animation + Form */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 bg-black rounded-xl shadow-2xl border border-purple-500">
        {/* Left Animation */}
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <Lottie
              animationData={emailAnimationData}
              loop={!isSent}
              autoplay={true}
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
            যোগাযোগ করুন
          </h2>

          {isSent ? (
            // ✅ Attractive Success Message
            <div className="text-center py-10 bg-gradient-to-r from-green-800/60 via-emerald-700/40 to-teal-800/50 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)] border border-green-400/30 relative overflow-hidden">
              {/* glow animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse"></span>

              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-lime-200 to-emerald-400 drop-shadow-lg mb-3 animate-bounce">
                🎉 Message Sent Successfully!
              </p>

              <p className="text-gray-200 text-lg font-medium tracking-wide animate-fade-in">
                You will be contacted soon 💌
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative inline-block w-full h-[45px] sm:h-[50px] 
                           hover:scale-[0.97] transition duration-300 mt-4"
              >
                <i className="absolute -inset-[2px] block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>
                <i className="absolute -inset-2 block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>

                <span
                  className={`absolute top-0 left-0 flex h-full w-full justify-center items-center overflow-hidden
                  rounded-[5px] border border-[#040a29] bg-[rgba(14,21,56,0.75)] tracking-[1px] 
                  text-white font-semibold text-base before:absolute before:top-0 before:-left-[50%]
                  before:h-full before:w-full before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]
                  ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Email;
