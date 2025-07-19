import React from 'react';
import Camera from '@/assets/images/camera.png';
import style from '@styles/photo.module.css';
import Image from 'next/image';

interface PhotoHolderProps {
  // eslint-disable-next-line react/require-default-props
  imgSrc?: string;
}

// eslint-disable-next-line react/function-component-definition
const PhotoHolder: React.FC<PhotoHolderProps> = ({ imgSrc = '' }) => {
  const [img, setImg] = React.useState(imgSrc);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/aria-role,jsx-a11y/interactive-supports-focus
    <div className={style.photoContainer} role="button" onClick={() => setImg(img)}>
      {imgSrc ? <Image src={img} alt="user-photo" /> : <Image src={Camera} alt="camera-photo" />}
    </div>
  );
};

export default PhotoHolder;
