import styles from "./ImageLinkComponent.module.css";

const ImageLinkComponent = ({ src, onClickImage, alt }) => {
  return (
    <img
      className={styles.image}
      src={src}
      onClick={onClickImage}
      alt={alt}
      title={alt}
    />
  );
};
export default ImageLinkComponent;
