import { useEffect, useState } from 'react';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setPrice } from '../../../features/FiltersSlice';
import { Button } from '../Button/Button';

type MultiRangeSliderProps = {
  min: number;
  max: number;
};

export const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (maxVal - minVal <= 100) {
      setMinVal((prevState) => prevState - 1);
      setMaxVal((prevState) => prevState + 1);
    }
  }, [minVal, maxVal]);

  // const range: LegacyRef<HTMLDivElement> = useRef(null);

  // // Convert to percentage
  // const getPercent = useCallback(
  //   (value: number) => Math.round(((value - min) / (max - min)) * 100),
  //   [min, max]
  // );

  // // Set width of the range to decrease from the left side
  // useEffect(() => {
  //   const minPercent = getPercent(minVal);
  //   const maxPercent = getPercent(maxValRef.current);

  //   if (range.current) {
  //     range.current.style.left = `${minPercent}%`;
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [minVal, getPercent]);

  // // Set width of the range to decrease from the right side
  // useEffect(() => {
  //   const minPercent = getPercent(minValRef.current);
  //   const maxPercent = getPercent(maxVal);

  //   if (range.current) {
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [maxVal, getPercent]);

  // // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);

  // return (
  //   <div className="h-[40px] flex items-top justify-start ml-[10px]">
  //     <input
  //       type="range"
  //       min={min}
  //       max={max}
  //       value={minVal}
  //       onChange={(event) => {
  //         const value = Math.min(Number(event.target.value), maxVal);
  //         setMinVal(value);
  //         minValRef.current = value;
  //       }}
  //       className={minVal > max - 100 ? "z-5 absolute h-0 w-[200px] outline-none thumb" : "z-3 absolute h-0 w-[200px] outline-none thumb"}
  //     />
  //     <input
  //       type="range"
  //       min={min}
  //       max={max}
  //       value={maxVal}
  //       onChange={(event) => {
  //         const value = Math.max(Number(event.target.value), minVal + 1);
  //         setMaxVal(value);
  //         maxValRef.current = value;
  //       }}
  //       className="absolute h-0 w-[200px] outline-none z-4 thumb"
  //     />

  //     <div className="relative w-[200px]">
  //       <div className="absolute h-[5px] rounded-[3px] bg-green/50 w-full z-1"/>
  //       <div ref={range} className="absolute h-[5px] rounded-[3px] bg-yellow z-2"/>
  //       <div className="absolute text-green text-[12px] mt-[20px]">
  //         Cena: {minVal}zł - {maxVal}zł
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <section className="flex flex-col gap-[20px] items-center justify-center w-[100%]">
      <section className="w-full flex justify-between items-center">
        <p className="text-[16px] font-bold">Min:</p>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => {
            setMinVal(Number(e.target.value));
          }}
          className="inline-block h-[7px] w-[200px] bg-yellow border-[1px] border-green rounded-[10px] 
          ml-[10px] outline-none z-4 thumb"
        />
      </section>
      <section className="w-full flex justify-between items-center">
        <p className="text-[16px] font-bold">Max:</p>
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => {
            setMaxVal(Number(e.target.value));
          }}
          className="inline-block h-[7px] w-[200px] bg-yellow border-[1px] border-green rounded-[10px] 
        ml-[10px] outline-none z-4 thumb"
        />
      </section>
      <section className="w-full">
        <p className="text-green text-[16px] font-bold">
          Cena:
          <span className="ml-[20px] text-[20px] text-dark_red mr-[10px]">
            {minVal}zł
          </span>
          -
          <span className="ml-[10px] text-[20px] text-dark_red">
            {maxVal}zł
          </span>
        </p>
        <div className="flex justify-end mt-[10px]">
          <Button
            text="Ustaw"
            value="add"
            styles="w-[80px] h-[35px] bg-orange border-2 border-green rounded-[20px] shadow-md px-[5px] 
            py-[5px] text-[12px] text-center hover:border-0 active:border-2"
            onClick={() =>
              dispatch(setPrice({ minPrice: minVal, maxPrice: maxVal }))
            }
          />
        </div>
      </section>
    </section>
  );
};
