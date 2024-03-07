import Image from "next/image";
import fly from "@/../public/fly.jpg";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <div className="relative flex-col before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2  ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={fly}
          alt="butterfly logo"
          width={140}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="" //link to another site
          className="group rounded border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-pink-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>HOME </h2>
        </a>

        <a
          href="" //link to another site
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-pink-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>ABOUT </h2>
        </a>

        <a
          href="{}" //link to another site
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-pink-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>FEED </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" //link to vercel change to deploy
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-pink-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>VERCEL PAGE</h2>
        </a>
        {/* <Nav /> */}
      </div>
    </main>
  );
}
