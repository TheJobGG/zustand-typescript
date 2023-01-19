/* rehacer la app pero integrando todo dentro de un form para poder controlar los campos... */


import { FormEvent, useState } from "react";

import { BearFamily } from "./models/interfaces";
import { ButtonStyled } from './components/ButtonStyled'
import { Inputs } from "./components/Inputs";
import { Controls } from './components/Controls'
import { Form } from "./components/Form";

function App() {
  const [families, setFamilies] = useState<BearFamily[]>([])

  return (
    <div className="min-h-screen grid place-content-center pt-5">
      <div className="justify-center items-center lg:flex lg:flex-row lg:gap-60 ">
        <div>
          <div className="flex flex-row justify-center items-baseline gap-3">
            <div className="p-2 hover:animate-emoji text-3xl">🐻</div>
            <h1 className="text-3xl text-center py-7 pb-10" >Bear Nation</h1>
          </div>
          <Form setFamilies={setFamilies} />
          <div className="text-center py-5 opacity-25 hover:opacity-100 transition-opacity"><i>Each family starts with 2 bears in love...</i></div>
        </div>

        <div className="">
          <table className="m-auto bg-amber-900 border min-w-full lg:min-w-[350px]">
            <thead>
              <tr>
                <td className="pl-3 py-1">Bear&apos;s families</td>
                <td className="pl-3 py-1 min-w-[100px]">Size</td>
              </tr>
            </thead>
            {
              families.length <= 0
                ? <tbody>
                  <tr className="even:bg-slate-700 odd:bg-[#202020]">
                    <td>No one family has been added</td>
                    <td></td>
                  </tr>
                </tbody>
                : <tbody>
                  {families.map((family, index) => (
                    <tr key={index} className='odd:bg-slate-700 even:bg-slate-900'>
                      <td className="pl-3 py-1 mr-10">{family.familyName}</td>
                      <td className="pl-3 py-1 mr-10">{family.quantity}</td>
                    </tr>
                  ))}
                </tbody>
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default App