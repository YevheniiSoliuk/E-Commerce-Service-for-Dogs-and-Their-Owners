import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setRate } from '../../features/FiltersSlice';

type StarRatingProps = {
  type: string;
  active: number;
  size: string;
  alignment: string;
  rates?: number;
};

export const StarRating: React.FC<StarRatingProps> = ({
  type,
  active,
  size,
  alignment,
  rates
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const dispatch: AppDispatch = useDispatch();
  const { rate } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    if (rate === 0) {
      setRating(0);
      setHover(0);
    }
  }, [rate]);

  const setRatingFilter = (index: number) => {
    setRating(index);
    dispatch(setRate(index - 1));
  };

  const stars: number[] = [1, 2, 3, 4, 5];

  return (
    <section className={alignment}>
      {type === 'static'
        ? stars.map((index: number) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={
              'inline-block ' +
              size +
              ' mb-[5px] mr-[5px] stroke-green stroke-1 ' +
              (index <= active ? ' fill-orange ' : ' fill-grey ')
            }
            key={index}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))
        : stars.map((index: number) => {
          index += 1;

          return (
            <div key={index} className="inline-block">
              <button
                type="button"
                className="inline-block"
                onClick={() => setRatingFilter(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={
                    index <= (hover || rating)
                      ? 'inline-block ' +
                      size +
                      ' mb-[15px] stroke-green stroke-1 fill-yellow'
                      : 'inline-block h-10 w-10 mb-[15px] stroke-green stroke-1 fill-grey'
                  }
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="inline-block text-[20px] mr-[25px]">
                {index - 1}
              </p>
            </div>
          );
        })}
      {type === 'static' && rates ? (
        <span className="text-[16px] ml-[10px]">
          {active}
          {rates}
        </span>
      ) : null}
    </section>
  );
};
