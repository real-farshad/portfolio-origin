import st from "../styles/ProjectTitle.module.scss";

export default function ProjectTitle({ children }) {
    return <h1 className={st["project-title"]}>{children}</h1>;
}
