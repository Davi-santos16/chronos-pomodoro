import { Cycles } from "../Cycles";
import { DefautButton } from "../DefautButton";
import { DefautInput } from "../DefautInput";


import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
  return (
    <>
      <form className="form" action="">
        <div className="formRow">
          <DefautInput
            labelText="task"
            placeholder="Ex.: estudar para a prova"
            id="meuInput"
            type="text"
          />
        </div>
        <div className="formRow">
          <p>Nesse ciclo foque por 25min</p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefautButton icon={<PlayCircleIcon size={22} />}></DefautButton>
        </div>
      </form>
    </>
  );
}
