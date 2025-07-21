import React, { useRef, useState } from 'react';
import { Button, RegNav } from '@/components';
import { RegisterNavigation } from '@common/navigation';
import style from '@styles/boarding.module.css';
import Image from 'next/image';
import text from '@/constants';
import { useRouter } from 'next/router';

const images = [
  'https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg',
  'https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg',
  'https://cdn2.thecatapi.com/images/itfFA4NWS.jpg',
];

const width = 532;
const height = 418;

// eslint-disable-next-line react/function-component-definition
const Boarding: React.FC = () => {
  const router = useRouter();

  const [page, setPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  }

  function onPointerUp() {
    if (!isDragging) return;
    const threshold = (containerRef.current?.offsetWidth ?? width) / 3;
    if (dragX < -threshold) {
      setPage((p) => (p + 1) % images.length);
    } else if (dragX > threshold) {
      setPage((p) => (p - 1 + images.length) % images.length);
    }
    // reset drag state
    setDragX(0);
    setIsDragging(false);
  }

  function nextButton() {
    if (page === images.length - 1) router.push(RegisterNavigation.login.Login);
    else setPage(page + 1);
  }

  const translate = -page * width + (isDragging ? dragX : 0);
  const transition = isDragging ? 'none' : 'transform 0.5s ease';

  return (
    <section>
      <RegNav link={RegisterNavigation.register.Home} />
      <div className={style.boardingImageSlider}>
        <div ref={containerRef} className={style.boardingImageSliderLayer}>
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            style={{
              display: 'flex',
              transform: `translateX(${translate}px)`,
              transition,
            }}
          >
            {images.map((src, i) => (
              <div
                key={`key-${i + 1}`}
                style={{ minWidth: width, height }}
                className="flex items-center justify-center"
              >
                <Image
                  src={src}
                  width={width}
                  height={height}
                  priority={i === page}
                  loading={i === page ? 'eager' : 'lazy'}
                  alt={`slide ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          {images.map((_, i) => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              key={`btn-${i + 1}`}
              type="button"
              onClick={() => setPage(i)}
              className={
                i === page
                  ? style.boardingImageSliderSelectedButton
                  : style.boardingImageSliderUnselectedButton
              }
            />
          ))}
        </div>
      </div>
      <h1 className={style.boardingHeader} dir="rtl">
        {text.boarding['boarding-header'][page]}
      </h1>
      <h3 className={style.boardingDescription} dir="rtl">
        {text.boarding['boarding-description'][page]}
      </h3>
      <Button
        text={
          page === images.length - 1
            ? text.boarding['boarding-done']
            : text.boarding['boarding-next']
        }
        onClick={() => nextButton()}
      />
    </section>
  );
};

export default Boarding;
