import styles from "./Avatar.module.scss";

interface AvatarProps {
  imgSrc: string;
  name: string;
}

export function Avatar(props: AvatarProps) {
  const { imgSrc, name } = props;
  return (
    <div className={styles.Avatar}>
      <img src={imgSrc} alt="avatar" />
      <span>{name}</span>
    </div>
  );
}
