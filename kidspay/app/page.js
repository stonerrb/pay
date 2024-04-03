"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { BiSolidOffer } from "react-icons/bi";
import { MdCampaign } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const [typedText, setTypedText] = React.useState("");
  const targetText = "Welcome, Rushabh";

  React.useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextChar = targetText.charAt(typedText.length);
      setTypedText((prevText) => prevText + nextChar);
      if (typedText === targetText) clearInterval(typingInterval);
    }, 100);

    return () => clearInterval(typingInterval);
  }, [typedText, targetText]);

  return (
    <div className="spacer1 layer2 flex flex-col justify-center items-start h-screen p-6 bg-slate-700">
      <div className="ml-16">
        <h1 className="text-4xl font-bold text-white mb-10">Kidspay</h1>
        <div className="text-left mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            {typedText}
          </h2>
          <p className="text-lg text-white font-medium">
            Bringing joy to your kids payments!
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <button
            className="bg-yellow-100 text-black text-lg p-6 rounded-lg shadow-md flex items-center justify-center space-x-2"
            onClick={() => router.push("/offers")}
          >
            <BiSolidOffer className="hover:bg-yellow-200 focus:outline-none transition duration-300 text-5xl" />
            <span className="text-lg font-bold">Offers</span>
          </button>
          <div>
            <button
              className="bg-yellow-100 text-black text-lg p-6 rounded-lg shadow-md flex items-center justify-center space-x-2"
              onClick={() => router.push("/promotion")}
            >
              <MdCampaign className="hover:bg-yellow-200 focus:outline-none transition duration-300 text-5xl" />
              <span className="text-lg font-bold">Promotion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
