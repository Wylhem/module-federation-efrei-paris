import styles from './avatar_group.module.css';
import { Avatar } from '../../atom';

/**
 *
 * @param {JSX.Element} className
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function AvatarGroup({ children, ...props }) {

  return (
    <div className={styles.avatar__group} {...props}>
      {children}
    </div>
  );
}

/**
 *
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
function AvatarContainer ({children}) {
  return (
    <div className={styles.avatar__group__container}>
      {children}
    </div>
  )
}

/**
 *
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
function AvatarName ({children}) {
  return (
    <div className={styles.avatar__group__name}>
      {children}
    </div>
  )
}

/**
 *
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
function AvatarSubtitle ({children}) {
  return (
    <div className={styles.avatar__group__subtitle}>
      {children}
    </div>
  )
}

AvatarGroup.Container = AvatarContainer;
AvatarGroup.Name = AvatarName;
AvatarGroup.Subtitle = AvatarSubtitle;
export  default AvatarGroup;
