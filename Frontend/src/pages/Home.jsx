import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="relative mt-36">
      
      {/* Background Graphic (optional) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606813902734-02799aa9ef2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 blur-sm"></div>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Hero Content */}
      <section className="relative z-10 px-6 md:px-16 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          From Gadgets to Fashion —
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium mt-3 text-green-400 tracking-wide">
          Everything You Love, Delivered Fast.
        </h2>
        <p className="mt-6 max-w-2xl text-white/80 text-lg md:text-xl">
          Explore handpicked deals and top-rated products from multiple categories.
        </p>

        <div className="mt-10 flex gap-4">
          <button onClick={()=>navigate('/products')} className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-xl text-white font-semibold shadow-md">
            Start Shopping
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all rounded-xl text-white font-semibold shadow-md">
            Explore Categories
          </button>
        </div>

       <div className="mt-30 flex flex-col md:flex-row items-center justify-between w-full text-sm text-white/50 font-light border-t border-white/10 pt-6 gap-3">
          <p>Branding Agency ✦ From India</p>
          <p>Designed & Developed by <span className="text-white">Prince</span></p>
        </div>
      </section>

      {/* footer */}
      
    </div>
  );
};

export default Home;
