import styles from './avatar.module.css';
import { useMemo } from 'react';

/**
 *
 * @param {"small" | "medium" | "large"} size
 * @param {string} src
 */
function Avatar({size = 'medium', src}) {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'large':
        return styles.container__large;
      case 'small':
        return styles.container__medium;
      case 'medium':
      default:
        return styles.container__medium;
    }
  }, [size]);

  return <div className={sizeStyle}>
    <img className={styles.image} src={src} alt={'avatar'} />
  </div>;
}
export default Avatar;
