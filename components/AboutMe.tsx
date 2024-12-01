import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ProfileCardProps {
  name: string;
  jobTitle: string;
  description: string;
}
const AboutMe = ({ name, jobTitle, description }: ProfileCardProps) => {
  return (
    <section className="profile-card  ">
      <div className=" profile-content  ">
        <div className="flex items-center ">
          <Image
            src="/Ellipse 9.png"
            className="rounded-full"
            alt="josi"
            width={19}
            height={19}
          />
          <p className="text-col ">Available For project</p>
        </div>

        <p className="text-col text-size ">{name} </p>
        <p className="text-size">{jobTitle} </p>
        <Link href="/" className=" link ">
          Book A Call <MoveRight />
        </Link>
        <div className="flex gap-3">
        <Image
            src="/image 2.png"
            className="rounded-full"
            alt="josi"
            width={69}
            height={69}
          />
           <Image
            src="/image 3.png"
            className="rounded-full"
            alt="josi"
            width={69}
            height={69}
          />
        </div>
      </div>

      <div className="text-col description">{description}</div>
    </section>
  );
};

export default AboutMe;
