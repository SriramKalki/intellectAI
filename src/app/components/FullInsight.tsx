import Image from "next/image";

export default function Profile() {
    return (
        <div className="[background:#516958] rounded-[10px] flex flex-row items-center px-[28px] py-[14px] gap-[105px]">
            <p className="text-white font-inter text-base font-medium leading-[150%]">Last 1 month</p>
            <div className="flex flex-row items-center gap-[6px]">
                <p className="font-inter text-base font-semibold leading-[150%] text-white">Full Insight</p>
                <Image src="/icons/chevron-right.svg" alt="expand icon" width={16} height={16}></Image>
            </div>
            

        </div>
    );
  }
  