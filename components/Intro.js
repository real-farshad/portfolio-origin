import PrimaryTitle from "./PrimaryTitle";
import RegularLink from "./RegularLink";
import RegularText from "./RegularText";
import SecondaryTitle from "./SecondaryTitle";
import st from "../styles/Intro.module.scss";

export default function Intro() {
    return (
        <div className={st["intro"]}>
            <div className={st["intro__titles"]}>
                <SecondaryTitle>Hello!</SecondaryTitle>
                <SecondaryTitle>
                    My Name Is Mohammad Reza Gholami,
                </SecondaryTitle>

                <div className={st["intro__primary-title"]}>
                    <PrimaryTitle>{`I'M A SOFTWARE ENGINEER`}</PrimaryTitle>
                </div>

                <SecondaryTitle>And This Is My Protfolio.</SecondaryTitle>
            </div>

            <div className={st["intro__image-container"]}>
                <img
                    className={st["intro__cat-img"]}
                    src="/cat.png"
                    alt="cat"
                />
            </div>

            <div className={st["intro__notes"]}>
                <RegularText>
                    Working On Creative Projects Excites Me
                    <span className={st["intro__separator"]}>|</span>
                </RegularText>
                <RegularText>
                    I Try To Make Things That People Enjoy Using
                    <span className={st["intro__separator"]}>|</span>
                </RegularText>
                <RegularText>
                    {`I'm Pretty Good At Learning New Things`}
                    <span className={st["intro__separator"]}>|</span>
                </RegularText>
                <RegularText>
                    {`I'm Always Energetic When Working With Others`}
                    <span className={st["intro__separator"]}>|</span>
                </RegularText>
                <RegularText>
                    Whant A Short And Official Version?{" "}
                    <RegularLink to="/resume.pdf">Download Resume</RegularLink>
                </RegularText>
            </div>
        </div>
    );
}
