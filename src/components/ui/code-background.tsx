export function CodeBackground() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none font-mono">
      {/* Code pattern lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Horizontal lines */}
        <div className="absolute w-full h-[1px] bg-white top-[20%]"></div>
        <div className="absolute w-full h-[1px] bg-white top-[40%]"></div>
        <div className="absolute w-full h-[1px] bg-white top-[60%]"></div>
        <div className="absolute w-full h-[1px] bg-white top-[80%]"></div>

        {/* Vertical lines */}
        <div className="absolute w-[1px] h-full bg-white left-[20%]"></div>
        <div className="absolute w-[1px] h-full bg-white left-[40%]"></div>
        <div className="absolute w-[1px] h-full bg-white left-[60%]"></div>
        <div className="absolute w-[1px] h-full bg-white left-[80%]"></div>
      </div>

      {/* Binary code dots */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[15%] left-[20%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[30%] left-[25%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[40%] left-[30%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[45%] left-[15%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[55%] left-[25%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[65%] left-[10%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[75%] left-[30%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[85%] left-[20%] w-1 h-1 rounded-full bg-white"></div>

        <div className="absolute top-[12%] right-[10%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[22%] right-[15%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[32%] right-[20%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[42%] right-[25%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[52%] right-[15%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[62%] right-[25%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[72%] right-[10%] w-1 h-1 rounded-full bg-white"></div>
        <div className="absolute top-[82%] right-[20%] w-1 h-1 rounded-full bg-white"></div>
      </div>

      {/* Code brackets */}
      <div className="absolute w-16 h-16 border-t-2 border-l-2 border-white top-4 left-4 opacity-30"></div>
      <div className="absolute w-16 h-16 border-t-2 border-r-2 border-white top-4 right-4 opacity-30"></div>
      <div className="absolute w-16 h-16 border-b-2 border-l-2 border-white bottom-4 left-4 opacity-30"></div>
      <div className="absolute w-16 h-16 border-b-2 border-r-2 border-white bottom-4 right-4 opacity-30"></div>
    </div>
  );
} 