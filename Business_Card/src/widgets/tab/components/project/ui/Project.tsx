import { Preview, PreviewContext } from "@/shared/ui/preview";
import { useProjectContext } from "../lib/context/Context"
import { Description, DescriptionContext } from "@/entities/description";
import styles from './styles/Project.module.css'
import { Link } from "react-router-dom";

export const Project = () => {
    const project = useProjectContext();
    const previewContext: string[] = project.preview;

    const descriptionContext: Description = {
        name: project.name,
        description: project.description,
        parameters: project.parameters,
        link: project.link,
        repository: project.repository,
    }
    return (
        <div className={styles.project}>
            <PreviewContext.Provider value={previewContext}>
                <Link to={project.link}>
                    <Preview></Preview>
                </Link>
            </PreviewContext.Provider>
            <DescriptionContext.Provider value={descriptionContext}>
                <Description></Description>
            </DescriptionContext.Provider>
        </div>
    )
}