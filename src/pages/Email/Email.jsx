import React, { useState } from "react";
import Lottie from "lottie-react";
import emailAnimationData from "../../assets/email.json"; // আপনার JSON ফাইলের পাথ

const Email = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ফর্ম ইনপুট স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("ইমেল পাঠানো হচ্ছে...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
        // setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error("ইমেল পাঠানোর সমস্যা:", error);
      setIsLoading(false);
      alert("ইমেল পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।");
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* হেডিং সেকশন */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-300 to-blue-800 text-center ">
          🛠️ Let's Build
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Ready to bring your{" "}
          <span className="text-blue-400 font-bold">wildest ideas</span> to
          life? Let's make magic happen.
        </p>
      </div>

      {/* Animation + Form Container */}
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 bg-black rounded-xl shadow-2xl border border-purple-500">
        {/* বাম পাশ: অ্যানিমেশন */}
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <Lottie
              animationData={emailAnimationData}
              loop={!isSent}
              autoplay={true}
            />
          </div>
        </div>

        {/* ডান পাশ: ফর্ম */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
            যোগাযোগ করুন
          </h2>

          {isSent ? (
            <div className="text-center py-10 bg-green-900 bg-opacity-30 rounded-lg">
              <p className="text-green-400 text-xl font-semibold">
                আপনার বার্তা সফলভাবে পাঠানো হয়েছে! 🎉
              </p>
              <p className="text-gray-300 mt-2">
                শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।
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

              {/* ✅ Stylish Send Message Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative inline-block w-full h-[45px] sm:h-[50px] 
                           hover:scale-[0.97] transition duration-300 mt-4"
              >
                {/* বাইরের Gradient Border */}
                <i className="absolute -inset-[2px] block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>
                <i className="absolute -inset-2 block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>

                {/* ভিতরের Button অংশ */}
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
