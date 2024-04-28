import { useEffect, useState } from "react";
import { Style } from "@/interfaces/style";

const useOriginatedModal = ({
  modalStyle,
  duration,
}: {
  modalStyle: Style;
  duration: number;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [style, setStyle] = useState<Style>({});

  const open = (originStyle: Style | undefined) => {
    setStyle(originStyle ?? modalStyle);
    setOpen(true);
  };

  const close = (originStyle: Style | undefined) => {
    if (!originStyle) return setOpen(false);

    setStyle(originStyle);
    setTimeout(() => setOpen(false), duration);
  };

  useEffect(() => {
    if (!isOpen) return;

    setStyle(modalStyle);
  }, [isOpen]);

  return {
    open,
    close,
    style,
    isOpen,
  };
};

export default useOriginatedModal;
