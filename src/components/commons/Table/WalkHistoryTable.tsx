import React from 'react';
import coin from '../../../assets/images/coin.svg';
import { IWalk } from '../../../interfaces/Walk';

type PropsType = {
  walks: IWalk[];
  animalId: string;
};

export const WalkHistoryTable: React.FC<PropsType> = ({ walks, animalId }) => {
  return (
    <div
      className="w-[100%] h-[450px] bg-yellow/80 border-2 border-green rounded-[10px] mt-[20px] 
      mb-[30px] px-[20px] py-[20px] overflow-y-auto"
    >
      <table className="w-[100%] layout-auto">
        <thead>
          <tr>
            <th>Nr</th>
            {/* <th>Mapa</th>
            <th>Data</th> */}
            <th>Czas</th>
            <th>Dystans</th>
            <th>Monety</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

{
  /* walks.map((_item: IWalk) => { */
}
// item.animals_id.includes(animalId) ?
//   <tr
//     key={index}
//     className="h-[110px] text-center border-b-[1px] border-t-[1px] border-green"
//   >
//     <td>
//       {index+1}
//     </td>
//     {/* <td className="w-[70px]">
//       <img src={"data:image/png;" + item.photo} alt={"walk" + index} />
//     </td>
//     <td>
//       {}
//     </td>*/}
//     <td>
//       {item.time}
//     </td>
//     <td>
//       {item.distance}
//     </td>
//     <td>
//       <div className="flex items-center justify-center">
//         <img
//           src={coin}
//           alt="coin"
//           className="w-[20%] inline-block mr-[10px]"
//         />
//         {item.gainedCoins}
//       </div>
//     </td>
//   </tr> :
//   <p>No walks yet</p>
