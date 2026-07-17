import Image from "next/image";

export default function LogoWatermark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-icon.png"
      alt=""
      width={668}
      height={624}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
