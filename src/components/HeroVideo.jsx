export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          Welcome to N2IT Productions
        </h1>
      </div>
    </div>
  );
}
