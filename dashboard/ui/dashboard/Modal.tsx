"use client";

import React, { FC } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onShadowClick?: () => void;
}

const Modal: FC<Props> = ({ children, open, onShadowClick }) => {
  function handleShadowClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!onShadowClick) return;

    if ((e.target as HTMLDivElement).dataset.shadow) onShadowClick();
  }

  if (open)
    return ReactDOM.createPortal(
      <div
        className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-neutral-900/75 grid place-items-center"
        data-shadow
        onClick={handleShadowClick}
      >
        <div className="box bg-neutral-900 border-neutral-800 px-12 py-8">
          {children}
        </div>
      </div>,
      document.body
    );

  return null;
};

export default Modal;
