'use client'

import ProjectCard from "@/components/ProjectCard";
import { projects } from '@/data/projects';

export default function ProjectCardContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {
                projects.toReversed().map((project) => {
                    return <ProjectCard key={project.id} project={project}></ProjectCard>
                })
            }
        </div>
    );
}