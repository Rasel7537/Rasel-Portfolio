import raseLogo from "../../assets/R.jpg";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      
      {/* Logo */}
      <img
        src={raseLogo}
        alt="Rasel Logo"
        className="w-20 h-20 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"
      />

      {/* Name Animation */}
      <h1 className="text-white text-2xl font-bold mt-4 animate-bounce">
        Rasel
      </h1>

      {/* Spinner */}
      <div className="mt-5 w-10 h-10 border-4 border-gray-500 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
}
