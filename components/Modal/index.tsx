"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  /** Controls visibility */
  isOpen: boolean;
  /** Called when user clicks outside or presses close */
  onClose: () => void;
  /** Optional heading shown at top */
  title?: string;
  /** Modal content */
  children: ReactNode;
}

/**
 * Centered reusable modal component.
 * Renders through a React portal so it is mounted at the document body level.
 */
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // Ensure this runs only on the client to avoid SSR mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      {/* Prevent click propagation from closing when clicking inside modal */}
      <div
        className="relative w-full max-w-xl rounded-lg bg-white shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute right-3 top-3 rounded-full p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {title && (
          <h2 className="px-6 pt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        )}

        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
