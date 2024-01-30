"use client";
import Image from "next/image";
import Panel from "./Panel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-32">
      <div className="z-10 max-w-5xl w-full mb-4 md:flex">
        <p className="static left-0 top-0 border-b border-gray-300 from-zinc-200 py-4 dark:border-neutral-800 dark:from-inherit rounded-xl border bg-gray-200 px-24 dark:bg-zinc-800/30 font-semibold text-2xl font-serif">
          Hey, I'm <span className="font-sans">Mike Hyatt</span>.
        </p>
      </div>
      <div className="mb-4 max-w-5xl w-full">
        <div className="mx-4 rounded-lg border border-transparent my-4 px-5 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
          <Panel />
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full mb-4 md:flex">
        <p className="static left-0 top-0 border-b border-gray-300 from-zinc-200 py-4 dark:border-neutral-800 dark:from-inherit rounded-xl border bg-gray-200 px-24 dark:bg-zinc-800/30 font-semibold text-2xl font-serif">
          Projects
        </p>
      </div>
      <div className="grid w-full text-left md:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl xl:grid-cols-4">
        <a
          href=""
          className="group rounded-lg border border-transparent mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-300`}
          >
            NextGPT<span className="font-mono font-normal">.live</span>{" "}
          </h2>
          <Image
            className="mb-2 rounded dark:invert transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/nextgpt.png"
            alt="NextGPT.live"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-300`}
          >
            Doorman{" "}
          </h2>
          <div className="flex w-[150px] h-[150px] justify-center items-center">
            <Image
              className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              src="/doorman.png"
              alt="Doorman"
              width={50}
              height={50}
              priority
            />
          </div>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-300`}
          >
            UAV Simulation{" "}
          </h2>
          <Image
            className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/uav.png"
            alt="UAV Simulation"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-300`}
          >
            NTK for PINNs{" "}
          </h2>
          <Image
            className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/extension.png"
            alt="NTs extension"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
