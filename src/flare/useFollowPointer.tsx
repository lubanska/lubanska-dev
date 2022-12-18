import { RefObject, useState, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const directionX = (clientX / window.innerWidth) * 2 - 1;
      const directionY = (clientY / window.innerHeight) * 2 - 1;

      const x = directionX * element.offsetWidth - element.offsetWidth / 2;
      const y = directionY * element.offsetHeight - element.offsetHeight / 2;

      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
