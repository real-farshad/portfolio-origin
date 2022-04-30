import PrimaryTitle from "./PrimaryTitle";
import SecondaryTitle from "./SecondaryTitle";
import SingleProject from "./SingleProject";
import st from "../styles/Projects.module.scss";

export default function Projects({ data }) {
    return (
        <div className={st["projects"]} id="projects">
            <div className={st["projects__section-titles"]}>
                <div className={st["projects__primary-title"]}>
                    <PrimaryTitle>MY PROJECTS</PrimaryTitle>
                </div>
                <SecondaryTitle>Some Of My Most Recent Projects</SecondaryTitle>
            </div>

            <div className={st["projects__cards"]}>
                {data.map((project) => (
                    <div
                        key={project.title}
                        className={st["projects__single-project"]}
                    >
                        <SingleProject data={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
