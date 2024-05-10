import React from "react";
import { BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

export default function Controls() {
    return (
    <div className="flex justify-between   items-center">
        <div className="w-[50vw] flex h-16 justify-center items-center text-2xl">
        <div className="mx-2 hover:cursor-pointer">
            <BsShuffle />
        </div>
        <div className="mx-4 hover:cursor-pointer">
            <CgPlayTrackPrev />
        </div>
        <div className="mx-4 text-4xl hover:cursor-pointer">
            <BsFillPlayCircleFill/>
        </div>
        <div className="mx-4 hover:cursor-pointer">
            <CgPlayTrackNext />
        </div>
        <div className="mx-4 hover:cursor-pointer">
            <FiRepeat />
        </div>
    </div>
</div>
    );
}