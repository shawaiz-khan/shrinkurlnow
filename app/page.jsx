import UrlShortner from "@/components/features/UrlShortner";

export default function Home() {
  return (
    <section className="section min-h-screen pt-[6rem]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl  mb-4 text-center text-black dark:text-white">
          Welcome to 
          <br /><span className="text-5xl mt-10 mb-5 text-purple-800 font-bold">ShrinkUrlNow</span>
        </h1>
        <p className="text-lg mb-6 text-black dark:text-white">A simple tool to shorten your URLs</p>
        <UrlShortner />
      </div>
    </section>
  );
}
