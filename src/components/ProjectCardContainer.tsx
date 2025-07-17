'use client'

import ProjectCard from "@/components/ProjectCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Project } from "@/interfaces";

export default function ProjectCardContainer(props: ProjectCardProps) {

    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        fetch('/resources/data/projects.json')
            .then((res) => res.json())
            .then((data) => { setProjects(data as Project[]) });
    }, [])

    return (
        <div className="mt-5 grid grid-cols-2 gap-5">
            {
                projects?.map((project) => {
                    return <ProjectCard key={project.id} project={project}></ProjectCard>
                })
            }
        </div>
    );
}

interface ProjectCardProps {
    setSelectedCardId: Dispatch<SetStateAction<number | undefined>>;
}