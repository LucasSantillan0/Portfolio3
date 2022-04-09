import Link from "next/link";
import Router from "next/router";
import { useEffect, useRef } from "react";

interface PrincipalButtonProps {
  href: string;
  text: string;
  current: number;
  setFollowerPosition: (number: number) => void;
  id: number;
}

export default function PrincipalButton({
  text,
  href,
  current,
  setFollowerPosition,
  id,
}: PrincipalButtonProps) {
  const linkRef: any = useRef(null);
  useEffect(() => {
    if (current === id) {
      setFollowerPosition(linkRef.current?.offsetTop + 10);
    }
  }, [current, setFollowerPosition, id]);

  const handleController = (e: globalThis.KeyboardEvent) => {
    if(e.code === 'Enter' && current === id){
      Router.push(`/${href}`)
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleController);
    return () => {
      removeEventListener("keydown", handleController);
    };
  });
  return (
    <div
      ref={linkRef}
      className={`text-center my-4 bg-slate-700 text-white w-fit mx-auto rounded-md transition-all ease-out duration-200 ${current === id && 'bg-red-400'}` }
    >

        <span className="text-xl font-bold flex py-4 px-4 ">{text}</span>
    </div>
  );
}
