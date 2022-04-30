import st from "../styles/NavLink.module.scss";

export default function NavLink({ to, children }) {
    return (
        <a className={st["nav-link"]} href={to}>
            {children}
        </a>
    );
}
