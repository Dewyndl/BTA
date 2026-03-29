import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ICustomModalProps {
    children: ReactNode;
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}