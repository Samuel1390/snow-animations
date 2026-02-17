"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { OptionsToCode } from "@/app/types";

interface ModalContextType {
  selectedAnimation: OptionsToCode | null;
  openModal: (animation: OptionsToCode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAnimation, setSelectedAnimation] =
    useState<OptionsToCode | null>(null);

  const openModal = (animation: OptionsToCode) => {
    setSelectedAnimation(animation);
  };
  const closeModal = () => setSelectedAnimation(null);

  return (
    <ModalContext.Provider value={{ selectedAnimation, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
