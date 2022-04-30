import st from "../styles/RegularBtn.module.scss";

export default function RegularBtn({ children }) {
    return <button className={st["regular-btn"]}>{children}</button>;
}
