import st from "../styles/BlurContainer.module.scss";

export default function BlurContainer({ children }) {
    return <div className={st["blur-container"]}>{children}</div>;
}
