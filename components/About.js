import RegularText from "./RegularText";
import PrimaryTitle from "./PrimaryTitle";
import SecondaryTitle from "./SecondaryTitle";
import st from "../styles/About.module.scss";

export default function About() {
    return (
        <div className={st["about"]} id="about">
            <div className={st["about__titles"]}>
                <div className={st["about__primary-title"]}>
                    <PrimaryTitle>ABOUT ME</PrimaryTitle>
                </div>
                <SecondaryTitle>
                    Things That You Might Be Interested In!
                </SecondaryTitle>
            </div>

            <div className={st["about__image-container"]}>
                <img src="/dragon.png" />
            </div>

            <div className={st["about__text"]}>
                <div>
                    <RegularText>
                        {`I'm A 23 Years Old Full-Stack Web Developer.`}{" "}
                        <br className={st["about__break"]} />
                        {`I Love
                        Programming, Solving Problems And Learning`}{" "}
                        <br className={st["about__break"]} />
                        {`New Things.
                        I've Been Coding For 3 Years And`}{" "}
                        <br className={st["about__break"]} />
                        {`Worked On Many Projects
                        Utilizing`}{" "}
                        <br className={st["about__break"]} />
                        {`Modern Technologies.`}
                    </RegularText>
                </div>

                <div className={st["about__skills"]}>
                    <RegularText>Some Of My Skills Are:</RegularText>
                    <RegularText>
                        Html, Css, Sass, Javascript, Typescript, Python And C
                    </RegularText>
                    <RegularText>
                        React, Redux, React Router, Next.Js, Node.Js, Express,
                        Mongodb Node.Js Driver, Mongoose, Passport, Joi, Jest,
                        React Testing Library, Supertest, Express Sessions
                    </RegularText>
                    <RegularText>Vscode, Git, Github</RegularText>
                </div>

                <div className={st["about__more"]}>
                    <RegularText>
                        I Also Really Like: Reading, Learning,{" "}
                        <br className={st["about__break"]} />
                        UX And UI Design, Graphic Design, Art, Writing, Etc.
                    </RegularText>
                    <RegularText>
                        I Currently Live In Kermanshah, Iran.
                    </RegularText>
                    <RegularText>
                        And I Can Speak Both English And Persian.
                    </RegularText>
                </div>
            </div>
        </div>
    );
}
