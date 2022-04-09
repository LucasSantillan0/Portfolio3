import { useEffect, useRef } from "react";


interface PositionGuideProps {

  id:number,
  current:number
}

export default function PositionGuide({ id, current}:PositionGuideProps) {
  const positionRef:any = useRef(null);

  return <div ref={positionRef}></div>;
}
