import Link from "next/link";
import st from "../styles/Logo.module.scss";

export default function Logo() {
    return (
        <Link href="/">
            <a className={st["logo"]}>M0hammadr3za.</a>
        </Link>
    );
}
