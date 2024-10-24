export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOptionProps[];
  onSelect?: () => void;
  placeholder?: string;
}

export type SelectedOption = {
  id: number;
  value: string;
  label: string;
};
export type SelectOptionProps = {
  value: string;
  label: string;
};
