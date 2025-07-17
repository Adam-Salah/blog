'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ProjectCardInfoPopup() {

    return (
        <div className="fixed w-full h-half bg-red">
            {
            }
        </div>
    );
}

interface ProjectCardInfoPopupProps {
    setSelectedCardId: Dispatch<SetStateAction<number | undefined>>;
}