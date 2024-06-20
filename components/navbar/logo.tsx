import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="md:hidden">
        <Image
          src="/logo/test.png"
          alt="Logo"
          width={50}
          height={50}
          className="p-1"
        />
      </Link>
      <Link href={"/"} className="hidden md:block">
        <Image
          src={"/logo/test.png"}
          alt="Logo"
          width={150}
          height={150}
          className="p-1"
        />
      </Link>
    </div>
  );
};

export default Logo;
