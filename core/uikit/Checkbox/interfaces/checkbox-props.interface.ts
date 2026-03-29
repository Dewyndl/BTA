export interface ICheckboxProps {
    checked: boolean;
    change: (checked: boolean) => void;
    title: string;
}