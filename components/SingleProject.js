import ProjectTitle from "./ProjectTitle";
import RegularLink from "./RegularLink";
import RegularText from "./RegularText";
import st from "../styles/SingleProject.module.scss";

export default function SingleProject({ data }) {
    const {
        date,
        title,
        imageUrl,
        liveDemo,
        githubRepo,
        frontTechStack,
        backTechStack,
        description,
    } = data;

    return (
        <div>
            <div className={st["single-project__primary-info"]}>
                <div className={st["single-project__date"]}>
                    <RegularText>{date}</RegularText>
                </div>

                <div className={st["single-project__project-title"]}>
                    <ProjectTitle>{title}</ProjectTitle>
                </div>
            </div>

            <div className={st["single-project__image-container"]}>
                <img src={imageUrl} />
            </div>

            <div className={st["single-project__secondary-info"]}>
                <div className={st["single-project__links"]}>
                    <div>
                        <RegularLink to={githubRepo}>
                            Github Repository
                        </RegularLink>
                    </div>

                    <div>
                        <RegularLink to={liveDemo}>Live Demo</RegularLink>
                    </div>
                </div>

                <div className={st["single-project__text"]}>
                    <div>
                        <RegularText>{frontTechStack}</RegularText>
                        <RegularText>{backTechStack}</RegularText>
                    </div>

                    <div className={st["single-project__description"]}>
                        <RegularText>{description}</RegularText>
                    </div>
                </div>
            </div>
        </div>
    );
}
