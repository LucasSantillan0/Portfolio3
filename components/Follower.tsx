import { useEffect, useState } from "react";
import { MenuOption } from "../models/IPosition";

interface FollowerProps {
  position: number;
}

export default function Follower({ position }: FollowerProps) {

  const [style, setStyle] = useState({
    transform: `translate(0 px, ${position}px)`,
  });
  useEffect(() => {
    setStyle({
      transform: `translate( 128px, ${position}px)`,
    });
  }, [position]);
  return (
    <div
      className="w-4 h-4 rounded-full p-4 bg-gray-600 mx-auto my-0 translate-x-32 transition-all duration-100 "
      style={style}
    ></div>
  );
}
