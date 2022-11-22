import React from 'react';
import { WalkHistoryI } from '../../../interfaces/WalkHistory';
import coin from "../../../assets/images/coin.svg"

const WalkHistoryTable: React.FC<{walkHistoryItems : WalkHistoryI[]}> = ({walkHistoryItems}) => {
  return (
    <div className="w-[100%] h-[450px] bg-yellow/80 border-2 border-green rounded-[10px] mt-[20px] mb-[30px]px-[20px] py-[20px] overflow-y-auto">
      <table className="w-[100%] layout-auto">
        <thead>
          <tr>
            <th>Nr</th>
            <th>Mapa</th>
            <th>Data</th>
            <th>Czas</th>
            <th>Dystans</th>
            <th>Monety</th>
          </tr>
        </thead>
        <tbody>
          {walkHistoryItems.map((item: WalkHistoryI, index: number) => 
            <tr className="h-[110px] text-center border-b-[1px] border-t-[1px] border-green">
              <td>
                {index+1}
              </td>
              <td className="w-[70px]">
                <img src={item.walkRoadScreen} alt={"walk" + index} />
              </td>
              <td>
                {item.date}
              </td>
              <td>
                {item.time}
              </td>
              <td>
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