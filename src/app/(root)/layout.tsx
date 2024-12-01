import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone. ",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div
        className={`flex justify-between mx-0 md:bg-NavBackground mt-2 h-[75px] items-center md:mx-36 rounded-lg bg-white ${manrope.className}`}>
        <div className="pl-3 flex items-center gap-3">
          <div className="w-[59px] h-[59px] ">
            <Image
              src="/Josh.png.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt="josi"
              width={59}
              height={59}
            />
          </div>
          <h1 className="text-[23px] font-semibold hidden md:flex ">
            {" "}
            Josiah A.
          </h1>
        </div>

        <p className="text-[15px]  font-medium ">Work Resume</p>
        <div className="pr-3">
          <div className="bg-black items-center rounded-lg text-white w-[42px] h-[50px] flex  justify-center text-[15px] font-semibold md:w-[125px] cursor-pointer  ">
            <p className="hidden md:flex">Get in touch</p>
            <MessageCircle className="flex md:hidden" />
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
