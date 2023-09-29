import { url } from "inspector";
import React, { FC, ReactNode, useContext } from "react";
import { setTheme } from "../../state/actions/global";
import { GlobalContext } from "../../state/contexts/GlobalContext";
import background from "../../public/background.svg";
import Logo from "./Logo";
import Image from "next/image";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <div
      className="relative flex flex-col items-center w-screen h-screen bg-indigo-500  font-poppins"
      // style={{
      //   backgroundImage: `url(${background.src})`,
      // }}>
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
