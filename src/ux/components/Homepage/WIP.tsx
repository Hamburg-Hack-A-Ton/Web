import React from "react";
import { ThemeToggleButton } from "§comp/Theme";

const UnderConstruction: React.FC = () => {
  return (
    <main className="bg-l-bg dark:bg-d-bg h-screen w-screen flex items-center justify-center duration-300">
      <section className="flex flex-col items-center justify-center">
        <div className="flex py-2">
          <h1 className="gigalypse text-5xl text-center">
            Hello, This Website is Currently under Construction!
          </h1>
        </div>
        <div className="flex flex-row">
          <p className="p oxanium py-1 font-bold text-xl">By Jack@DJL</p>
        </div>
      </section>
      <section className="absolute bottom-1 left-2">
        <ThemeToggleButton />
      </section>
    </main>
  );
};

export default UnderConstruction;
