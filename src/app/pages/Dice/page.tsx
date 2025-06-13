"use client"

import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

function Dice() {
    const [dice, setDice] = useState<number>(0);

    function RollDice() {
        const roll: number = Math.floor(Math.random() * 6) + 1;
        setDice(roll);
    }
    return (
        <div className="flex flex-col items-center h-screen gap-6">
            <h1>Dice</h1>
            {dice !== 0 && <RolledDice Rollednumber={dice} />}
            <button className="border p-3 border-white rounded-sm" onClick={RollDice}>Roll Dice</button>
      </div>
  );
}

export default Dice;

function RolledDice({ Rollednumber }: { Rollednumber: number }) {
    return (
        <div>
            {Rollednumber === 1 && <Dice1 className="size-30" />}
            {Rollednumber === 2 && <Dice2 className="size-30" />}
            {Rollednumber === 3 && <Dice3 className="size-30" />} 
            {Rollednumber === 4 && <Dice4 className="size-30" />} 
            {Rollednumber === 5 && <Dice5 className="size-30" />} 
            {Rollednumber === 6 && <Dice6 className="size-30" />} 
        </div>
    );
}