import Link from "next/link";

interface GetStartedBtnProps {
  className?: string;
}

function GetStartedBtn({ className }: GetStartedBtnProps) {
  return (
    <Link
      href="/#parteners"
      className={`flex justify-center items-center bg-blue-gradient text-background w-40 h-16 rounded-xl text-[17px] font-medium ${className}`}
    >
      get started
    </Link>
  );
}

export default GetStartedBtn;
