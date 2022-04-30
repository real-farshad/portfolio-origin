import st from "../styles/RegularLink.module.scss";

export default function RegularLink({ to, children }) {
    return (
        <a className={st["regular-link"]} to={to}>
            {children}
        </a>
    );
}
