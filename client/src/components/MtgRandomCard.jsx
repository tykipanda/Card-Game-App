import React, { use } from "react";
import { useScryfall } from "../hooks/useScryfall";
import MtgCard from "./MtgCards";

export default function MtgRandomCard() {
    const { randomCard, loading, fetchRandom } = useScryfall();
}