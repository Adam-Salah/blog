'use client'

import ProjectCard from "@/components/ProjectCard";
import { projects } from '@/data/projects';

export default function ProjectCardContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-200 gap-5">
            {
                projects?.map((project) => {
                    return <ProjectCard key={project.id} project={project}></ProjectCard>
                })
            }
        </div>
    );
}