"use client"

import { BrickWall, Scissors, Scroll } from "lucide-react";
import { useState } from "react";

type weapon = "rock" | "paper" | "scissor";

const weaponArr = ["rock", "paper", "scissor"] as const;

function RockPaperScissor() {

    const [userChoice, setUserChoice] = useState<weapon | null>();
    const [gameState, setGameState] = useState<"playing" | "Done">("playing");
    const [aiChoice, setAiChoice] = useState<weapon | null>();

    function Game(user: weapon) {
        setUserChoice(user);

        const randomIndex = Math.floor(Math.random() * weaponArr.length);
        const randomWeaopon = weaponArr[randomIndex];
        setAiChoice(randomWeaopon);

        setGameState("Done");
    }

    function GameResult() {
        if (userChoice === aiChoice) {
            return "Draw"
        }
        else if (userChoice === "paper" && aiChoice === "rock") {
            return "Player Won"
        }
        else if (userChoice === "rock" && aiChoice === "scissor") {
            return "Player Won"
        }
        else if (userChoice === "scissor" && aiChoice === "paper") {
            return "Player Won"
        }
        else {
            return "You lose"
        }
    }

    function resetGame() {
        setAiChoice(null);
        setUserChoice(null);
        setGameState("playing");
    }

    return (
        <div>
            {gameState === "playing" ? (
                <>
                    <div className="flex justify-center items-center h-screen gap-3">
                        <button className="border flex flex-col justify-center items-center gap-4 border-solid rounded-md p-10" onClick={() => Game("rock")}>
                            <BrickWall className="size-12" />
                            <div>Rock</div>
                        </button>

                        <button className="border flex flex-col justify-center items-center gap-4 border-solid rounded-md p-10" onClick={() => Game("paper")}>
                            <Scroll className="size-12" />
                            <div>Paper</div>
                        </button>

                        <button className="border flex flex-col justify-center items-center gap-4 border-solid rounded-md p-10" onClick={() => Game("scissor")}>
                            <Scissors className="size-12" />
                            <div>Scissor</div>
                        </button>
                    </div>
                </>
                )
                :
            (
                    <>
                     <div className="flex flex-col h-screen justify-center items-center">
                        <h1>{GameResult()}</h1>
                        <div>user : {userChoice}</div>
                        <div>Ai : {aiChoice}</div>
                        <button className="border border-dash m-4 p-2" onClick={resetGame}>try again</button>
                    </div>
                </>
        )}
        </div>
            
  );
}

export default RockPaperScissor;