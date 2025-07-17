'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Popup() {

    return (
        <div className="fixed max-w-(--center) t-[50%] -translate-y-[50%] min-h-1 z-100 w-full h-[70vh] bg-red-500"></div>
    );
}

interface PopupProps {
    setSelectedCardId: Dispatch<SetStateAction<number | undefined>>;
}