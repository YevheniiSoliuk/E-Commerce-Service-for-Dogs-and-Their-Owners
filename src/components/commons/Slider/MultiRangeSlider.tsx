import React, { useCallback, useEffect, useState, useRef, LegacyRef } from "react";

type MultiRangeSliderProps = {
  min: number,
  max: number,
  onChange: Function,
};

const MultiRangeSlider = ({ min, max, onChange }: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range: LegacyRef<HTMLDivElement> = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="h-[40px] flex items-top justify-start ml-[10px]">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={minVal > max - 100 ? "z-5 absolute h-0 w-[200px] outline-none thumb" : "z-3 absolute h-0 w-[200px] outline-none thumb"}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="absolute h-0 w-[200px] outline-none z-4 thumb"
      />

      <div className="relative w-[200px]">
        <div className="absolute h-[5px] rounded-[3px] bg-green/50 w-full z-1"/>
        <div ref={range} className="absolute h-[5px] rounded-[3px] bg-yellow z-2"/>
        <div className="absolute text-green text-[12px] mt-[20px]">
          Cena: {minVal}zł - {maxVal}zł
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;