import classNames from 'classnames';
import styles from './ContentSection.module.scss';

export type ContentSectionProps = {
  bgColor?: 'accent' | 'contrast' | 'transparent';
  bgImgSrc?: string;
  children?: React.ReactNode;
};

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  const { bgColor = 'transparent', bgImgSrc, children } = props;

  const cl = classNames(styles['ContentSection'], styles[`ContentSection_bg_${bgColor}`]);

  return (
    <div style={{ backgroundImage: `url(${bgImgSrc})` }} className={cl}>
      {children}
    </div>
  );
};

export default ContentSection;
