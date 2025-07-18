import { Project } from "@/interfaces";
import Link from "next/link";

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.project.href}>
            <div
                className="outline-solid outline-1 outline-(--flavor) object-cover overflow-hidden hover:scale-103 cursor-pointer"
            >
                <div className="w-full h-full aspect-square p-[5%]">
                    <img src={props.project.src} alt={props.project.alt} className="w-full h-full object-cover"></img >
                </div>
            </div>
        </Link>
    );
}

interface ProjectCardProps {
    project: Project;
}