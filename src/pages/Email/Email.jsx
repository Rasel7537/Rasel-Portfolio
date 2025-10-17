// import React, { useEffect, useState } from "react";

// const Email = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
//     script.async = true;

//     script.onload = () => {
//       // Visme form load হলে loader hide হবে
//       setTimeout(() => setLoading(false), 2000);
//     };

//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
//       {/* Gradient Background Animation */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-fuchsia-600/20 to-indigo-700/20 animate-pulse"></div>

//       {/* Section Heading */}
//       <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 drop-shadow-lg">
//         Contact Me 📩
//       </h2>

//       {/* Loader Animation */}
//       {loading && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-20 backdrop-blur-sm">
//           <div className="relative flex flex-col items-center space-y-5">
//             {/* Glowing Spinner */}
//             <div className="relative">
//               <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-[0_0_20px_rgba(168,85,247,0.7)]"></div>
//               <div className="absolute inset-0 rounded-full blur-md bg-purple-600/40 animate-ping"></div>
//             </div>

//             {/* Loading Text */}
//             <p className="text-xl text-purple-300 font-semibold animate-pulse tracking-wider">
//               Loading Form...
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Visme Form Embed */}
//       <div
//         className="visme_d rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden transition-all duration-700 ease-in-out hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]"
//         data-title="Webinar Registration Form"
//         data-url="dwom0o77-untitled-project"
//         data-domain="forms"
//         data-full-page="false"
//         data-min-height="500px"
//         data-form-id="150506"
//         style={{
//           width: "100%",
//           maxWidth: "700px",
//           minHeight: "500px",
//           border: "1px solid rgba(168,85,247,0.4)",
//           borderRadius: "1rem",
//           background: "rgba(17, 17, 17, 0.6)",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Email;

import React, { useEffect, useState } from "react";

const Email = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    script.onload = () => {
      // Visme form load হলে loader hide হবে
      setTimeout(() => setLoading(false), 2000);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact" className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Section Heading */}
      <h2
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Contact Me
      </h2>

      {/* Loader Animation */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-20 backdrop-blur-sm">
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

      {/* Visme Form Embed */}
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
          maxWidth: "700px",
          minHeight: "500px",
          border: "1px solid rgba(168,85,247,0.4)",
          borderRadius: "1rem",
          background: "rgba(17, 17, 17, 0.6)",
        }}
      ></div>
    </div>
  );
};

export default Email;
