import React, { useRef, useState } from 'react';
import Camera from '@/assets/images/camera.png';
import style from '@styles/photo.module.css';
import Image from 'next/image';

interface PhotoHolderProps {
  onUpload: (src: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const PhotoHolder: React.FC<PhotoHolderProps> = ({ onUpload }) => {
  const WIDTH = 200;
  const HEIGHT = 200;

  const [img, setImg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImg(objectUrl);
      onUpload(objectUrl);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/aria-role,jsx-a11y/interactive-supports-focus
    <div className={style.photoContainer} role="button" onClick={handleClick}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        capture="environment"
        className="hidden"
      />
      {img ? (
        <Image
          width={WIDTH}
          height={HEIGHT}
          src={img}
          alt="user-photo"
          unoptimized
          className={style.photo}
        />
      ) : (
        <Image src={Camera} alt="camera-photo" />
      )}
    </div>
  );
};

export default PhotoHolder;
