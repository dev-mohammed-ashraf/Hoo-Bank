import Image from "next/image";
import Link from "next/link";

interface GetStartedBtnProps {
  className?: string;
}

function GetStartedCircleBtn({ className }: GetStartedBtnProps) {
  return (
    <Link href={`/#parteners`} className="block">
      <div
        className={`bg-blue-gradient w-30 h-30 lg:w-34 lg:h-34 rounded-full p-0.5 ${className}`}
      >
        <div className="bg-background w-full h-full rounded-full">
          <button className="cursor-pointer capitalize w-full h-full gradient-text rounded-full text-[17px] lg:text-lg font-medium">
            <div>
              get{" "}
              <Image
                src="/assets/arrow-up.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="inline"
              />
            </div>{" "}
            started
          </button>
        </div>
      </div>
    </Link>
  );
}

export default GetStartedCircleBtn;
