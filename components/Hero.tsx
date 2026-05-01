import Link from "next/link";

const heroPosts = [
  {
    id: 1,
    category: "Gadgets",
    title: "The Ultimate Guide to Modern Luxury Timepieces for Professionals",
    author: "Jane Doe",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    category: "Tech",
    title: "Minimalist Workspace: How to Boost Productivity with Less",
    author: "John Smith",
    date: "April 19, 2026",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    category: "Travel",
    title: "10 Hidden Mediterranean Gems You Must Visit This Summer",
    author: "Marco Rossi",
    date: "April 18, 2026",
    image: "https://images.unsplash.com/photo-1506929113614-bb90ff9358f0?q=80&w=1000&auto=format&fit=crop",
    size: "small"
  }
];

export default function Hero() {
  const mainPost = heroPosts.find(p => p.size === "large");
  const smallPosts = heroPosts.filter(p => p.size === "small");

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[400px] lg:h-[600px]">
        {/* Main Post */}
        <div className="lg:col-span-8 relative group overflow-hidden bg-secondary">
          <img 
            src={mainPost?.image} 
            alt={mainPost?.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
            <span className="bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{mainPost?.category}</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">
              {mainPost?.title}
            </h2>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <span>By {mainPost?.author}</span>
              <span>-</span>
              <span>{mainPost?.date}</span>
            </div>
          </div>
        </div>

        {/* Small Posts Stack */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
          {smallPosts.map((post) => (
            <div key={post.id} className="relative flex-1 group overflow-hidden bg-secondary min-h-[150px]">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest mb-2 inline-block">{post.category}</span>
                <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
