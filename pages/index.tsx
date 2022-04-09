import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Follower from "../components/Follower";
import PrincipalButton from "../components/PrincipalButton";
import options from "../helpers/options";

const Home: NextPage = () => {
  const controller: { [key: string]: () => void } = {
    ArrowUp: () => {
      position === 0
        ? setPosition(options.length - 1)
        : setPosition(position - 1);
    },
    ArrowDown: () => {
      position === options.length - 1
        ? setPosition(0)
        : setPosition(position + 1);
    },
  };
  const [position, setPosition] = useState(0);
  const [followerPosition, setFollowerPosition] = useState(96);

  const handleController = (e: globalThis.KeyboardEvent) => {
    if (controller[e.code]) {
      controller[e.code]();
    }
  };
  useEffect(() => {
    const listener = window.addEventListener("keydown", handleController);
    return () => {
      removeEventListener("keydown", handleController);
    };
  });

  return (
    <Container>
      <div className="w-full  flex-row justify-center items-center">
        <Follower position={followerPosition} />
        {options.map((option) => (
          <PrincipalButton
            key={option.key}
            href={option.path}
            text={option.text}
            current={position}
            setFollowerPosition={setFollowerPosition}
            id={option.key}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
