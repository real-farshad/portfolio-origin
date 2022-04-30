import st from "../styles/PrimaryTitle.module.scss";

export default function PrimaryTitle({ children }) {
    return <div className={st["primary-title"]}>{children}</div>;
}
