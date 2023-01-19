import { useBearPopulation } from '../store/counterStore'
import { BearCounter } from "./BearCounter";

export function Inputs() {
  const { updateFamilyName} = useBearPopulation((state) => state)

  const handleFamilyName = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.value.trim()){
      updateFamilyName(e.currentTarget.value.trim());
    } else {
      e.currentTarget.value = e.currentTarget.value.trim();
    }
  }
  return (
    <div className="flex  flex-col justify-center items-center gap-5 pb-5">
      <label className='flex self-start' htmlFor="family-name">Family name</label>
      <input required className="text-black min-w-[100%] rounded-md px-3 py-1" type="text" name="family-name" id="family-name" onChange={handleFamilyName} placeholder='Bearman · Bearson · Bearrock' />
      <BearCounter />
      
    </div>
  )
}