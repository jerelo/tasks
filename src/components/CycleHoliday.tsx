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
            setHoliday("🕛");
        } else if (holiday === "🕛") {
            setHoliday("🦃");
        } else {
            setHoliday("🎃");
        }
    }

    function nextTime(): void {
        if (holiday === "🕛") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🕎");
        } else {
            setHoliday("🕛");
        }
    }

    return (
        <div>
            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextTime}>Advance by Year</Button>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
        </div>
    );
}
