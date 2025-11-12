
import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import emailAnimationData from "../../assets/email.json";

const Email = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      // ✅ Send email using EmailJS with .env variables
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setIsLoading(false);

      // ✅ Success SweetAlert
      Swal.fire({
        title:
          '<span style="font-size:24px; font-weight:700; background: linear-gradient(90deg,#06b6d4,#a855f7,#ec4899); -webkit-background-clip:text; color:transparent;">Message Sent! 🎉</span>',
        html: `
          <div style="
            border: 2px solid transparent;
            border-image: linear-gradient(45deg,#06b6d4,#a855f7,#ec4899) 1;
            border-radius: 12px;
            padding: 15px;
            background: rgba(15, 23, 42, 0.8);
            box-shadow: 0 0 25px rgba(168,85,247,0.4);
          ">
            <p style="color:#e2e8f0; font-size:16px; margin:8px 0;">
              Your message has been sent successfully 🚀
            </p>
            <p style="color:#94a3b8; font-size:14px; margin-top:6px;">
              I’ll get back to you soon via 
              <b style="color:#60a5fa;">rasel.uddin.engineer@gmail.com</b> 💌
            </p>
          </div>
        `,
        background: "#0f172a",
        color: "#e2e8f0",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
      });

      e.target.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setIsLoading(false);

      Swal.fire({
        title: "Error!",
        text: "Could not send the email. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#0f172a",
        color: "#f1f5f9",
      });
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-300 to-blue-800 text-center">
          🛠️ Let's Build
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Ready to bring your{" "}
          <span className="relative inline-block font-bold text-white">
            wildest ideas
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
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
        {/* Left: Animation */}
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <Lottie animationData={emailAnimationData} loop autoplay />
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Your awesome name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

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
                placeholder="your@email.com"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

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
                placeholder="Tell me about your incredible project idea..."
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative inline-block w-full h-[45px] sm:h-[50px] hover:scale-[0.97] transition duration-300 mt-4"
            >
              <i className="absolute -inset-[2px] block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)]"></i>
              <i className="absolute -inset-2 block rounded-[5px] bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>

              <span
                className={`absolute top-0 left-0 flex h-full w-full justify-center items-center overflow-hidden
                rounded-[5px] border border-[#040a29] bg-[rgba(14,21,56,0.75)] tracking-[1px] 
                text-white font-semibold text-base before:absolute before:top-0 before:-left-[50%]
                before:h-full before:w-full before:bg-[rgba(255,255,255,0.075)] before:skew-x-[25deg]
                ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Email;
