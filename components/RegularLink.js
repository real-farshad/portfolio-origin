import st from "../styles/RegularLink.module.scss";

export default function RegularLink({ to, children }) {
    return (
        <a className={st["regular-link"]} href={to}>
            {children}
        </a>
    );
}
