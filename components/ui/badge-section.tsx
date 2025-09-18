import React from "react";
import Image from "next/image";

export function BadgeSection({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm mb-4 sm:mb-6 bg-transparent relative rounded-md"
      style={{
        borderWidth: "1px",
        borderColor: "#2e2e2e",
        borderStyle: "solid",
        borderRadius: "8px",
        color: "#a3a3a3",
        background: "transparent",
      }}
    >
      <Image
        src="/badge-image.png"
        alt="Badge icon"
        width={18}
        height={18}
        className="inline-block align-middle"
        priority
      />
      {children}
    </span>
  );
}
