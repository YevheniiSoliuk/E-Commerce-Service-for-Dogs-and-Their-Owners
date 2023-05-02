import React, { useState } from 'react';
import { Input } from './Input/Input';
import { IBrand } from '../../interfaces/Brand';
import { ICategory, ISubcategory } from '../../interfaces/Category';
import { addBrand, setCategory } from '../../features/FiltersSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

type ListProps = {
  title: string;
  items: IBrand[] | ICategory[];
  subitems?: ISubcategory[];
};

export const List: React.FC<ListProps> = ({ title, items, subitems }) => {
  const [rotate, setRotate] = useState('before:rotate-45');
  const [showList, setShowList] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const toggleList = () => {
    rotate === 'before:rotate-45'
      ? setRotate('before:rotate-225 before:top-[8px]')
      : setRotate('before:rotate-45');

    setShowList(!showList);
  };

  // function isBrand(items: IBrand[] | ICategory[] | undefined): items is IBrand[] {
  //   items.forEach(item => {
  //     if(!(item as IBrand).logoURL !== undefined)
  //     {
  //       return false;
  //     }
  //   })

  //   return true;
  // }

  return (
    <section>
      <h2
        className={
          "relative text-[20px] text-left font-bold mb-[15px] before:content[''] before:absolute before:w-[15px] before:h-[15px] before:border-b-[3px] before:border-r-[3px] before:border-green before:right-[30px] " +
          rotate +
          ' hover:cursor-pointer'
        }
        onClick={toggleList}
      >
        {title}
      </h2>
      {showList && (
        <>
          <ul>
            {'logoURL' in items[0]
              ? items?.map((brand) => (
                  <li
                    className="list-none hover:text-yellow active:text-yellow hover:cursor-pointer"
                    key={brand.id}
                  >
                    <Input
                      id={brand.id}
                      type="checkbox"
                      name="brand"
                      placeholder={brand.name}
                      imgSrc={(brand as IBrand).logoURL}
                      action={() => {
                        dispatch(addBrand(brand as IBrand));
                      }}
                    />
                  </li>
                ))
              : items?.map((category) => (
                  <li
                    className="list-none list-inside ml-[10px] mb-[10px]"
                    key={category.id}
                  >
                    {' '}
                    <span className="text-[16px] font-semibold">
                      {category.name}
                    </span>
                    <ul>
                      {subitems?.map(
                        (subcategory: ISubcategory, index: number) =>
                          subcategory.categoryID === category.id ? (
                            <li
                              className="text-[14px] list-disc list-inside ml-[10px] hover:text-yellow hover:cursor-pointer active:text-yellow"
                              key={index}
                              onClick={() => dispatch(setCategory(subcategory))}
                            >
                              {subcategory.name}
                            </li>
                          ) : null
                      )}
                    </ul>
                  </li>
                ))}
          </ul>
        </>
      )}
      <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
    </section>
  );
};
