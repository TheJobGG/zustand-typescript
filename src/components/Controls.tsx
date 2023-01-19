import { useBearPopulation } from "../store/counterStore";
import { ButtonStyled } from "./ButtonStyled";

export function Controls() {
  // const bearNation: BearFamily = { familyName: 'a', quantity: 12 }

  const { increasePopulation, resetBears, bears, bearsFamilyName } = useBearPopulation((state) => state)

  return (
    <div className="flex  flex-col justify-center items-center gap-5">
      {/* <ButtonStyled text="a" onClickEvent={() => addNewFamily(bearNation)} /> */}
      <div className="flex gap-3">
        <ButtonStyled text="Reset Family..." type="reset" onClickEvent={resetBears} />
        <ButtonStyled text="Add a baby bear 🧸" type="button" onClickEvent={increasePopulation} />
      </div>
      <ButtonStyled text={'Add new family!'} type="submit" />

    </div>
  )
}
