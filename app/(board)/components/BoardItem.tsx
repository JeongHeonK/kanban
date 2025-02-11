"use client";

import { useRouter } from "next/navigation";

interface BoardItemProps {
  title: string;
  color?: string;
}

export default function BoardItem({
  title,
  color = "bg-slate-300",
}: BoardItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/works");
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handleClick}
      className={`size-52 ${color} rounded-md shadow-md`}
    >
      {title}
    </div>
  );
}
