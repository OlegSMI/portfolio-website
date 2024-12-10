import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      {theme === "dark" ? (
        <Image src="/logo-dark.svg" width={104} height={54} priority alt="" />
      ) : (
        <Image src="/logo-light.svg" width={104} height={54} priority alt="" />
      )}
    </Link>
  );
};

export default Logo;
