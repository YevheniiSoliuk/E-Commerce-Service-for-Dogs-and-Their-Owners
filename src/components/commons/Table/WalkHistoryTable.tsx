import React from 'react';
import { WalkHistoryI } from '../../../interfaces/WalkHistory';
import coin from "../../../assets/images/coin.svg"

const WalkHistoryTable: React.FC<{walkHistoryItems : WalkHistoryI[]}> = ({walkHistoryItems}) => {
  return (
    <div className="w-[100%] h-[450px] bg-yellow/80 border-2 border-green rounded-[10px] mt-[20px] mb-[30px]px-[20px] py-[20px] overflow-y-auto">
      <table className="w-[100%] flex flex-col items-center border-collapse">
        <thead>
          <tr className="flex justify-start">
            <th className="w-[40px] text-[16px] text-center">Nr</th>
            <th className="w-[100px] text-[16px] ml-[20px] mr-[30px]">Mapa</th>
            <th className="w-[100px] text-[16px] ml-[30px]">Data</th>
            <th className="w-[100px] text-[16px] ml-[20px]">Czas</th>
            <th className="w-[100px] text-[16px] ml-[20px]">Dystans</th>
            <th className="w-[80px] text-[16px] text-right ml-[20px]">Monety</th>
          </tr>
        </thead>
        <tbody>
          {walkHistoryItems.map((item: WalkHistoryI, index: number) => 
            <tr className="flex justify-start items-center h-[110px] border-2 border-green">
              <td className="mx-[20px]">
                0
              </td>
              <td className="w-[100px] mx-[20px]">
                {item.walkRoadScreen}
              </td>
              <td className="ml-[30px]">
                {item.date}
              </td>
              <td className="ml-[30px]">
                {item.time}
              </td>
              <td className="mx-[30px]">
                {item.distance}
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <img src={coin} alt="coin" className="w-[30%] inline-block mr-[10px]"/>
                  {item.coins}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WalkHistoryTable;