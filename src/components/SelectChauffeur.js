import glenn_jean from "../assets/images/glenn_jean.png"

const SelectChauffeur = () => {
  return (
    <div
      className="self-stretch rounded-3xs bg-white border-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[30px] px-[18px] pb-[49px] gap-[28.2px] max-w-full z-[1] text-left text-5xl text-black font-rubik"
    >
      <div className="w-[942.8px] h-[470.6px] relative rounded-3xs bg-white border-grey border-[1px] border-solid box-border hidden max-w-full" />
      <div className="w-[403.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[11.3px] box-border gap-[14.7px] max-w-full">
        <div className="w-[255px] flex flex-row items-start justify-start py-0 px-1 box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[36.6px] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[29px]">
            Select Chauffeur
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21.7px] text-base text-blue">
          <div className="flex-1 rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-2.5 px-[18px] pb-[9px] gap-[12.1px] min-w-[124px] whitespace-nowrap z-[1]">
            <div className="h-[43px] w-[190.9px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
            <input
              className="w-[17px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[16px] relative text-black text-left inline-block p-0 z-[3]"
              type="radio"
            />
            <div className="relative z-[2]">
              With Chauffeur
            </div>
          </div>
          <div className="rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid flex flex-row items-start justify-start pt-[11px] pb-[9px] pl-3.5 pr-2.5 gap-2 whitespace-nowrap z-[1] text-black">
            <div className="h-[43px] w-[190.9px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
            <input
              className="w-[17px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[16px] relative text-black text-left inline-block p-0 z-[3]"
              type="radio"
            />
            <div className="relative z-[2]">Without Chauffeur</div>
          </div>
        </div>
      </div>
      {/* Search Chauffeur */}
      <div className="w-[511.9px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-sm">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="relative inline-block min-w-[115px] z-[1]">
              Search Chauffeur
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[1]">
            <div className="h-[43px] w-[503.9px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
            <input
              className="w-[53px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[2]"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[15px] max-w-full">
          {/* person 1 */}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.6px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-cover z-[3] mq675:flex-1"
              loading="lazy"
              alt=""
              src={glenn_jean}
            />
            <div className="w-[248.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.9px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 w-[163.4px] relative text-inherit leading-[31.5px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Glenn Jean
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start gap-[31.1px] shrink-0 mt-[-4.3px] text-xs mq450:flex-wrap">
                  <div
                    className="flex-1 flex flex-col items-start justify-start min-w-[83px] text-left text-xs text-black font-rubik"
                  >
                    <div className="relative text-xl leading-[26.2px] inline-block min-w-[127.3px] z-[1] mq450:text-base mq450:leading-[21px]">
                      757-947-5015
                    </div>
                    <div className="w-[111.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[7.8px] box-border">
                      <div className="self-stretch relative leading-[18.3px] z-[1]">
                        City: Brentwood
                      </div>
                      <div className="self-stretch relative leading-[18.3px] z-[1]">
                        Country: Australia
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border">
                    <button className="cursor-pointer [border:none] py-1 px-[13px] bg-blue self-stretch rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                      <div className="h-[26.3px] w-[90.5px] relative rounded-3xs bg-blue hidden" />
                      <div className="w-[62.6px] relative text-base font-medium font-rubik text-white text-center inline-block shrink-0 z-[2]">
                        Select
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* person 2 */}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.7px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-cover z-[3] mq675:flex-1"
              loading="lazy"
              alt=""
              src={glenn_jean}
            />
            <div className="w-[248.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.8px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 w-[163.4px] relative text-inherit leading-[31.5px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Glenn Jean
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start gap-[31px] shrink-0 mt-[-4.3px] text-center text-base text-white mq450:flex-wrap">
                  <div
                    className="flex-1 flex flex-col items-start justify-start min-w-[83px] text-left text-xs text-black font-rubik"
                  >
                    <div className="relative text-xl leading-[26.2px] inline-block min-w-[127.3px] z-[1] mq450:text-base mq450:leading-[21px]">
                      757-947-5015
                    </div>
                    <div className="w-[111.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[7.8px] box-border">
                      <div className="self-stretch relative leading-[18.3px] z-[1]">
                        City: Brentwood
                      </div>
                      <div className="self-stretch relative leading-[18.3px] z-[1]">
                        Country: Australia
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border">
                    <button className="cursor-pointer [border:none] py-1 px-[13px] bg-blue self-stretch rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                      <div className="h-[26.3px] w-[90.5px] relative rounded-3xs bg-blue hidden" />
                      <div className="w-[62.6px] relative text-base font-medium font-rubik text-white text-center inline-block shrink-0 z-[2]">
                        Select
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChauffeur;