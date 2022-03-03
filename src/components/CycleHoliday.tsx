import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");

    function nextAlphabet(): void {
        if (holiday === "🎃") {
            setHoliday("🕎");
        } else if (holiday === "🕎") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("1️⃣");
        } else if (holiday === "1️⃣") {
            setHoliday("🦃");
        } else {
            setHoliday("🎃");
        }
    }

    function nextTime() {
        if (holiday === "1️⃣") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🕎");
        } else {
            setHoliday("1️⃣");
        }
    }

    return (
        <div>
            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextTime}>Advance by Year</Button>
            <div>
                Holiday: <span>{holiday}</span>
            </div>
        </div>
    );
}
