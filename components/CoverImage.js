import st from "../styles/CoverImage.module.scss";

function CoverImage({ src }) {
    return (
        <div
            className={st["cover-image"]}
            style={{
                backgroundImage: `url(${src})`,
            }}
        />
    );
}

export default CoverImage;
