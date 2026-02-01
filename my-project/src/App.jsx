export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 
                      rounded-2xl shadow-2xl max-w-lg w-full p-8 text-white">
        
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Build Stunning UIs
        </h1>

        <p className="text-white/80 mb-8 text-lg">
          Create modern, responsive, and beautiful interfaces using
          <span className="font-semibold"> React </span> & 
          <span className="font-semibold"> Tailwind CSS</span>.
        </p>

        <div className="flex gap-4">
          <button className="flex-1 bg-white text-indigo-600 font-semibold 
                             py-3 rounded-xl hover:bg-opacity-90 
                             transition-all duration-300 shadow-lg">
            Get Started
          </button>

          <button className="flex-1 border border-white/40 
                             py-3 rounded-xl hover:bg-white/10 
                             transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Decorative blur */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-400/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/40 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
