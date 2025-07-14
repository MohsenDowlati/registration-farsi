import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from '@styles/interval.module.css';

interface IntervalProps {
  min: number;
  max: number;
  step: number;
  // eslint-disable-next-line react/require-default-props
  onChange?: (value: string) => void;
  initialText: string;
}

// eslint-disable-next-line react/function-component-definition
const Interval: React.FC<IntervalProps> = ({ min, max, step, onChange, initialText }) => {
  const num = 63;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(start + step);
  const [floorValue, setFloorValue] = useState(min);
  const [ceilValue, setCeilValue] = useState(min + step);
  const [isSelected, setIsSelected] = useState(false);

  const [pct, setPct] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePct = useCallback(
    (pageX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const { left, width } = track.getBoundingClientRect();
      let x = pageX - left;
      if (x < 0) x = 0;
      if (x > width) x = width;
      const newPct = x / width;
      setPct(newPct);
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
          onMouseDown={onMouseDown}
          className={`${style.intervalSlider}`}
          style={{
            marginLeft: `calc(${pct * 100}% - 0.625rem)`, // 0.625rem = half of 5*0.25rem (w-5)
          }}
        >
          <p className={style.intervalSliderText}>
            {isSelected ? `از ${floorValue.toString()}تا ${ceilValue.toString()} سال` : initialText}
          </p>
        </div>
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
