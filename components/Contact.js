import PrimaryTitle from "./PrimaryTitle";
import RegularText from "./RegularText";
import SecondaryTitle from "./SecondaryTitle";
import st from "../styles/Contact.module.scss";

export default function Contact() {
    return (
        <div className={st["contact"]} id="contact">
            <div className={st["contact__titles"]}>
                <div className={st["contact__primary-title"]}>
                    <PrimaryTitle>CONTACT ME</PrimaryTitle>
                </div>

                <SecondaryTitle>{`I Promise I'll Respond As Soon As I Can`}</SecondaryTitle>
            </div>

            <div className={st["contact__image-container"]}>
                <img src="/ghost.png" />
            </div>

            <div className={st["contact__text"]}>
                <RegularText>
                    If You Have Any Other Questions About Me Or There Is
                    Something You Want To Talk To Me About Feel Free To Get In
                    Touch.
                </RegularText>
                <RegularText>My Phone Number: (+98) 09027553035</RegularText>
                <RegularText>
                    My Email Address:{" "}
                    <span className={st["contact__email"]}>
                        M0hammadr3za.Dev@Gmail.Com
                    </span>
                </RegularText>
            </div>
        </div>
    );
}
