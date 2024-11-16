import { TextHoverEffect } from "@/ux/effects/texthoverfx";

export function HomepageUniFallback() {
  return (
    <div className="flex items-center justify-center w-screen bg-black h-screen">
      <TextHoverEffect
        thick="2"
        text="HHAT"
        className="absolute inset-0 flex flex-col h-2/4 sm:h-3/5 md:h-4/6 xl:h-screen items-center z-10 justify-center"
      />
    </div>
  );
}
