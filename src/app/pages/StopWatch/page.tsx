"use client"
import { useState, useRef } from "react";
function Page() {
    const [elapsed, setElapse] = useState<number>(0);
    const [watchState, setWatchState] = useState<"initial" | "running" | "paused">("initial");
    const intervalRef = useRef<NodeJS.Timeout>(null)

    function start() {
        setWatchState("running");

        intervalRef.current = setInterval(() => {
            setElapse((prev) => prev + 1);
        }, 1000);
    }

    function pause() {
        setWatchState("paused");
        clear();
    }

    function reset() {
        setWatchState("initial");
        setElapse(0);
        clear();
    }

    function clear() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-grey-50 rounded p-4 flex flex-col items-center gap-4">
                <div>{elapsed} time elasped</div>

                {
                    watchState == "initial" && (
                        <button className="bg-green-500 rounded text-white p-4" onClick={start}>Start</button>
                    )
                }

                {
                    watchState == "running" && (
                        <button className="bg-yellow-500 rounded text-white p-4" onClick={ pause }>Pause</button>
                    )
                }

                {
                    watchState == "paused" && (
                        <div className="flex gap-4">
                            <button className="bg-green-500 rounded text-white p-4" onClick={start}>Resume</button>
                            <button className="bg-red-500 rounded text-white p-4" onClick={reset}>Reset</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Page;