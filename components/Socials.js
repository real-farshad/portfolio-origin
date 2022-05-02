import PrimaryTitle from "./PrimaryTitle";
import RegularLink from "./RegularLink";
import RegularText from "./RegularText";
import SecondaryTitle from "./SecondaryTitle";
import st from "../styles/Socials.module.scss";

export default function Socials() {
    return (
        <div className={st["socials"]} id="socials">
            <div className={st["socials__titles"]}>
                <div className={st["socials__primary-title"]}>
                    <PrimaryTitle>MY SOCIALS</PrimaryTitle>
                </div>

                <SecondaryTitle>{`Other Places To Find Me In`}</SecondaryTitle>
            </div>

            <div className={st["socials__image-container"]}>
                <img src="/fire.png" />
            </div>

            <div className={st["socials__info"]}>
                <RegularText>
                    {`Please Don't Use My Social Media To Contact Me, I Probably
                    Won't Be Able To Reply Anytime Soon.`}
                </RegularText>
                <RegularText>
                    However Feel Free To Take A Look At My Social Media, I Try
                    To Post Programming Related Content Whenever I Have Some
                    Free Time.
                </RegularText>

                <div className={st["socials__links"]}>
                    <div>
                        <RegularText>
                            My Github:{" "}
                            <RegularLink to="https://github.com/m0hammadr3za">
                                m0hammadr3za
                            </RegularLink>
                        </RegularText>
                    </div>
                    <div>
                        <RegularText>
                            My LinkedIn:{" "}
                            <RegularLink to="https://www.linkedin.com/in/mohammad-reza-gholami-4063a5239/">
                                Mohammad Reza Gholami
                            </RegularLink>
                        </RegularText>
                    </div>
                </div>
            </div>
        </div>
    );
}
