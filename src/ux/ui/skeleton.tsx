import { useRef, useEffect, useState, RefObject } from "react";
import { cn } from ">util/twm";

function useDimensions(ref: RefObject<HTMLElement>, options = { debounce: 0 }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [ref, options.debounce]);

  return dimensions;
}

// need to add smth because vercel git integration is not working
function Skeleton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  const childRef = useRef(null);
  const { width, height } = useDimensions(childRef, { debounce: 0 });

  return (
    <div className="">
      {children && (
        <div className="relative z-1 h-auto w-auto" ref={childRef}>
          {children}
        </div>
      )}
      <div
        className="bg-background duration-700  relative z-50"
        style={{ top: `-${height}px` }}
      >
        <div
          className={cn("rounded-sm  animate-skeleton bg-muted ", className)}
          style={{
            position: "relative",
            zIndex: 1,
            width: width,
            height: height,
          }}
          {...props}
        ></div>
      </div>
    </div>
  );
}

export { Skeleton };
