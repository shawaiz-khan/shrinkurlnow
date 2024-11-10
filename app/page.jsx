import Form from "@/components/forms/GenerateURL";

export default function Home() {
  return (
    <section className="section min-h-screen pt-[6rem]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to ShrinkUrlNow
        </h1>
        <p className="text-lg mb-6">A simple tool to shorten your URLs</p>
        <Form />
      </div>
    </section>
  );
}
