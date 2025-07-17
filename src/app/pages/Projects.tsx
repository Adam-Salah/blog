'use client'

import { useState } from "react";
import ProjectCardContainer from "@/components/ProjectCardContainer";
import ProjectCardInfoPopup from "@/components/ProjectCardInfoPopup";

export default function Projects() {
    const [selectedCardId, setSelectedCardId] = useState<number>();

    return (
        <>
            <ProjectCardInfoPopup />
            <ProjectCardContainer setSelectedCardId={setSelectedCardId}></ProjectCardContainer>
        </>
    )
}