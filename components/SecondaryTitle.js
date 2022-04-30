import st from "../styles/SecondaryTitle.module.scss";

export default function SecondaryTitle({ children }) {
    return <div className={st["secondary-title"]}>{children}</div>;
}
