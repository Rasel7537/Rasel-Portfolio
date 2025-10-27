import React, { useEffect, useState } from "react";

const Email = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    script.onload = () => {
      // লোডার কাজ করছে কিনা তা দেখতে আপাতত ৪ সেকেন্ড রাখা হলো।
      // পরে এটি ২৫০০ মিলিসেকেন্ডে কমিয়ে দিতে পারেন।
      setTimeout(() => setLoading(false), 4000);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent mb-10">
        Contact Me
      </h2>

      {/* 🚨 Loader Animation: z-50 নিশ্চিত করা হয়েছে যেন এটি সবার উপরে থাকে */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50 backdrop-blur-sm">
          <div className="relative flex flex-col items-center space-y-5">
            {/* Glowing Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-[0_0_20px_rgba(168,85,247,0.7)]"></div>
              <div className="absolute inset-0 rounded-full blur-md bg-purple-600/40 animate-ping"></div>
            </div>

            {/* Loading Text */}
            <p className="text-xl text-purple-300 font-semibold animate-pulse tracking-wider">
              Loading Form...
            </p>
          </div>
        </div>
      )}

      {/* Visme Form Embed Wrapper (Parent for absolute positioning) */}
      <div
        className="relative w-full max-w-2xl mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <div
          className="visme_d rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden transition-all duration-700 ease-in-out hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]"
          data-title="Webinar Registration Form"
          data-url="dwom0o77-untitled-project"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="150506"
          style={{
            width: "100%",
            minHeight: "500px",
            border: "1px solid rgba(168,85,247,0.4)",
            borderRadius: "1rem",
            background: "rgba(17, 17, 17, 0.6)",
          }}
        ></div>

        {/* ✅ আপডেট করা ওভারলে বক্স: Visme ব্র্যান্ডিং ঢাকতে ব্যবহার করা হয়েছে */}
        {!loading && (
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              // Visme লেখা এবং সাদা ব্যাকগ্রাউন্ডের আকার
              width: "150px",
              height: "30px",
              backgroundColor: "#000000", // ব্যাকগ্রাউন্ডের সাথে মেলাতে কালো রং

              // সঠিক পজিশন: Next বাটনের নিচে, ডান কোণে
              bottom: "5px",
              right: "41px",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Email;
