'use client'

import ProjectCard from "@/components/ProjectCard";
import { projects } from '@/data/projects';

export default function ProjectCardContainer() {
    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 auto-cols-max gap-5">
            {
                projects?.map((project) => {
                    return <ProjectCard key={project.id} project={project}></ProjectCard>
                })
            }
        </div>
    );
}