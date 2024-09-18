import { checkContains } from "@/common/util/dom";
import { useCallback, useEffect, useRef } from "react";

/**
 * @param callback toggle 관리용 setState 핸들러
 * @example
 *  const callback = () => setShowMenu(false);
    const ref = useOutsideClick(callback);
 */
export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = useCallback(
    ({ target }: MouseEvent) => {
      const [check] = checkContains(target!, ref);
      if (!check) callback();
    },
    [callback],
  );
  const handleESCKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") callback();
    },
    [callback],
  );

  useEffect(() => {
    // click대신 mousedown으로 빠르게 진행
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleESCKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleESCKeyDown);
    };
  }, [handleOutsideClick]);

  return ref;
};
