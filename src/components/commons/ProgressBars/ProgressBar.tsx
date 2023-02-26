type ProgressBarProps = {
  type: string, 
  completed: number,
}

export const ProgressBar: React.FC<ProgressBarProps> = ({type, completed}) => {
  return (
    <>
      {type === "circular" ? 
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle">4.3/5<br/>km</div>
          </div>
        </div> :
        <div className="h-[12px] w-[40%] bg-green rounded-[10px]">
          <div 
            className={"h-[100%] w-["+completed+"%] bg-orange text-right rounded-[10px] relative animate-full"}
          >
            <span className="absolute text-[10px] top-[-7px] left-[60%]">{completed}%</span>
          </div>
        </div>
      }
    </>
  );
};