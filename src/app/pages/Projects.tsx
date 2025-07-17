'use client'

import { useState } from "react";
import ProjectCardContainer from "@/components/ProjectCardContainer";

export default function Projects() {
    const [selectedCardId, setSelectedCardId] = useState<number>();

    return (
        <>
            <ProjectCardContainer setSelectedCardId={setSelectedCardId}></ProjectCardContainer>
        </>
    )
}