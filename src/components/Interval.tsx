import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from '@styles/interval.module.css';

// eslint-disable-next-line react/function-component-definition
const Interval: React.FC<danamit.IntervalProps> = ({ min, max, step, onChange, initialText }) => {
  // static amount of bars for slider
  const num = 63;

  // selected bar handlers
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(start + step);
  // number display handler
  const [floorValue, setFloorValue] = useState(min);
  const [ceilValue, setCeilValue] = useState(min + step);

  const [isSelected, setIsSelected] = useState(false);

  // pct controls the triangle’s 0–1 position
  const [pct, setPct] = useState(0.1);
  // thumbLeftPx is the pixel‑value left offset for the thumb
  const [thumbLeftPx, setThumbLeftPx] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const dragging = useRef(false);

  const updatePct = useCallback(
    (pageX: number) => {
      const track = trackRef.current;
      const thumb = thumbRef.current;
      if (!track || !thumb) return;
      const { left, width: trackW } = track.getBoundingClientRect();
      const thumbW = thumb.getBoundingClientRect().width;

      let x = pageX - left;
      const maxPct = (max - min - step) / (max - min);
      x = Math.max(0, Math.min(x, trackW));
      const rawPct = x / trackW;
      const newPct = Math.min(rawPct, maxPct);
      setPct(newPct);
      const triPx = newPct * trackW;
      const halfThumb = thumbW / 2;
      let desiredLeft = triPx - halfThumb;
      const overshoot = thumbW / 7;
      desiredLeft = Math.max(-overshoot, Math.min(desiredLeft, trackW - thumbW + overshoot));
      setThumbLeftPx(desiredLeft);

      const startIdx = Math.ceil(newPct * num);
      const endIdx = Math.ceil(newPct * (num + step));
      setStart(startIdx);
      setEnd(endIdx);

      const startVal = Math.ceil(min + newPct * (max - min));
      const endVal = startVal + step;
      setFloorValue(startVal);
      setCeilValue(endVal);

      onChange?.(startVal.toString());
    },
    [max, min, onChange, step],
  );
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updatePct(e.pageX);
    };
    const onMouseUp = () => {
      dragging.current = false;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [updatePct]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsSelected(true);
    dragging.current = true;
    updatePct(e.pageX);
  };

  return (
    <div>
      <div ref={trackRef} className="relative w-full">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <div
          ref={thumbRef}
          onMouseDown={onMouseDown}
          className={style.intervalSlider}
          style={{
            left: `${thumbLeftPx}px`,
          }}
        >
          <p className={style.intervalSliderText}>
            {isSelected ? `از ${floorValue.toString()}تا ${ceilValue.toString()} سال` : initialText}
          </p>
        </div>
        <div
          className={`${style.intervalSliderTriangle} bottom-0`}
          style={{
            left: `${pct * 100}%`,
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* “36px” = half of tooltip’s width (72px) */}
      <div>
        <div className={style.intervalContainer}>
          {Array.from({ length: num }).map((_, i) => (
            <div
              key={`${i + 1}-piece`}
              className={`${style.intervalPiece} ${
                i <= end + 1 && start <= i
                  ? style.intervalPieceSelected
                  : style.intervalPieceUnselected
              }`}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between px-0">
          <p className={style.intervalMinMax}>{min.toString()}</p>
          <p className={style.intervalMinMax}>{max.toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Interval;
