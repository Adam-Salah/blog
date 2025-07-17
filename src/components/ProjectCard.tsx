import { Project } from "@/interfaces";

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className="outline-solid outline-1 outline-(--flavor) object-cover overflow-hidden hover:scale-103"
            onClick={() => location.href = props.project.href}
        >
            <div className="w-full h-full aspect-square p-3">
                <img src={props.project.src} alt={props.project.alt} className="w-full h-full object-cover"></img>
            </div>
        </div>

    );
}

interface ProjectCardProps {
    project: Project;
}