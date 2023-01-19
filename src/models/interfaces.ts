export interface BearsControls {
  bears: number;
  bearsFamilyName: string;
  updateFamilyName: (familyName: string) => void;
  increasePopulation: () => void;
  resetBears: () => void;
}

export interface BearFamily {
  familyName: string;
  quantity: number;
}

export interface SetStateProp{
  setFamilies: React.Dispatch<React.SetStateAction<BearFamily[]>>;
}

export interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement>;
}