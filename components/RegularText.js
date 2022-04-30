import st from "../styles/RegularText.module.scss";

export default function RegularText({ children }) {
    return <p className={st["regular-text"]}>{children}</p>;
}
