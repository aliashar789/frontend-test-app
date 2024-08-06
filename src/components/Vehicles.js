import carBackground from "../assets/images/carBackground.png"
import bottom_shape from "../assets/images/bottom_shape.png"

const Vehicles = () => {
  return (
    <div
      className="self-stretch rounded-3xs bg-white border-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[41px] pb-[54px] pl-[23px] pr-[22px] gap-[40.7px] max-w-full z-[1] text-left text-5xl text-black font-rubik"
    >
      <div className="w-[942.8px] h-[607.6px] relative rounded-3xs bg-white border-grey border-[1px] border-solid box-border hidden max-w-full" />
      <div className="w-[503.8px] flex flex-col items-start justify-start gap-[26.7px] max-w-full">
        <h1 className="m-0 w-[247px] relative text-inherit leading-[36.6px] font-medium font-[inherit] inline-block z-[1] mq450:text-lgi mq450:leading-[29px]">
          Select Vehicle
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-sm">
          <div className="w-[299.3px] flex flex-row items-start justify-between gap-5">
            <div className="relative inline-block min-w-[34px] z-[1]">Make</div>
            <div className="relative inline-block min-w-[39px] z-[1]">
              Model
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16.8px] text-base">
            <div className="flex-1 rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[9px] pb-[11px] pl-[17px] pr-3.5 min-w-[158px] gap-5 z-[1]">
              <div className="h-[43px] w-[243.5px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
              <div className="relative inline-block min-w-[50px] z-[2]">
                <select style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }} className="bg-whitesmoke [border:none] [outline:none] w-[200.9px] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]">
                  <option value="Suzuki">Suzuki</option>
                  <option value="Swift">Swift</option>
                </select>
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <img
                  className="w-[9px] h-[6px] relative object-cover z-[23]"
                  alt=""
                  src={bottom_shape}
                />
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[9px] pb-[11px] pl-[17px] pr-3 min-w-[158px] gap-5 z-[1]">
              <div className="h-[43px] w-[243.5px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
              <div className="relative inline-block min-w-[40px] z-[2]">
                <select style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }} className="bg-whitesmoke [border:none] [outline:none] w-[200.9px] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]">
                  <option value="Swift">Swift</option>
                  <option value="Suzuki">Suzuki</option>
                </select>
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <img
                  className="w-[9px] h-[6px] relative object-cover z-[23]"
                  alt=""
                  src={bottom_shape}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[338.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[178.6px] box-border gap-[18.7px] max-w-full mq850:h-auto">
        <div
          className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] shrink-0 max-w-full text-left text-5xl text-black font-rubik"
        >
          {/* vechile 1*/}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.6px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-contain z-[1] mq675:flex-1"
              loading="lazy"
              alt=""
              src={carBackground}
            />
            <div className="w-[248.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.9px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit leading-[31.5px] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Suzuki Swift
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mt-[-4.3px] text-xl mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6.8px] min-w-[106px]">
                    <div
                      className="self-stretch flex flex-col items-start justify-start gap-[0.1px]"
                    >
                      <div className="w-[119px] relative leading-[26.2px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                        LEM 1234
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-px shrink-0 text-xs">
                        <div className="w-[155.1px] flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[18.3px] shrink-0 z-[1]">
                            Year: 2002
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-5.6px] w-[86px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                              Type: Sedan
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="w-[38.9px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                            Color:
                          </div>
                          <div
                            className="w-[30.2px] h-[13.6px] flex flex-col items-start justify-start pt-[2.7px] pb-0 pl-0 pr-2.5 box-border"
                          >
                            <div className="w-[19.5px] h-[10.9px] relative rounded-8xs bg-red z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[18.3px] z-[1]">
                            City: New York
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-xs text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border ml-[-5px] text-center text-base text-white mq450:ml-0">
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
          {/* vechile 2 */}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.7px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-contain z-[1] mq675:flex-1"
              loading="lazy"
              alt=""
              src={carBackground}
            />
            <div className="w-[248.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.8px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit leading-[31.5px] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Suzuki Swift
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mt-[-4.3px] text-xl mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6.8px] min-w-[106px]">
                    <div
                      className="self-stretch flex flex-col items-start justify-start gap-[0.1px]"
                    >
                      <div className="w-[119px] relative leading-[26.2px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                        LEM 1234
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-px shrink-0 text-xs">
                        <div className="w-[155.1px] flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[18.3px] shrink-0 z-[1]">
                            Year: 2002
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-5.6px] w-[86px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                              Type: Sedan
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="w-[38.9px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                            Color:
                          </div>
                          <div
                            className="w-[30.2px] h-[13.6px] flex flex-col items-start justify-start pt-[2.7px] pb-0 pl-0 pr-2.5 box-border"
                          >
                            <div className="w-[19.5px] h-[10.9px] relative rounded-8xs bg-red z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[18.3px] z-[1]">
                            City: New York
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-xs text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border ml-[-5.1px] mq450:ml-0">
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
        <div
          className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] shrink-0 max-w-full text-left text-5xl text-black font-rubik"
        >
          {/* vechile 3 */}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.6px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-contain z-[1] mq675:flex-1"
              loading="lazy"
              alt=""
              src={carBackground}
            />
            <div className="w-[248.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.9px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit leading-[31.5px] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Suzuki Swift
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mt-[-4.3px] text-xl mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6.8px] min-w-[106px]">
                    <div
                      className="self-stretch flex flex-col items-start justify-start gap-[0.1px]"
                    >
                      <div className="w-[119px] relative leading-[26.2px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                        LEM 1234
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-px shrink-0 text-xs">
                        <div className="w-[155.1px] flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[18.3px] shrink-0 z-[1]">
                            Year: 2002
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-5.6px] w-[86px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                              Type: Sedan
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="w-[38.9px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                            Color:
                          </div>
                          <div
                            className="w-[30.2px] h-[13.6px] flex flex-col items-start justify-start pt-[2.7px] pb-0 pl-0 pr-2.5 box-border"
                          >
                            <div className="w-[19.5px] h-[10.9px] relative rounded-8xs bg-red z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[18.3px] z-[1]">
                            City: New York
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-xs text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border ml-[-5px] text-center text-base text-white mq450:ml-0">
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
          {/* vechile 4 */}
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white flex flex-row items-end justify-start pt-[17.4px] px-[15px] pb-[17.5px] box-border gap-[14.7px] min-w-[286px] max-w-full z-[1] mq675:flex-wrap">
            <div className="h-[159.9px] w-[440.2px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white hidden max-w-full" />
            <img
              className="h-[125px] w-[134.4px] relative rounded-3xs object-contain z-[1] mq675:flex-1"
              loading="lazy"
              alt=""
              src={carBackground}
            />
            <div className="w-[248.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[248.8px] mq675:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit leading-[31.5px] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[25px]">
                  Suzuki Swift
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mt-[-4.3px] text-xl mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6.8px] min-w-[106px]">
                    <div
                      className="self-stretch flex flex-col items-start justify-start gap-[0.1px]"
                    >
                      <div className="w-[119px] relative leading-[26.2px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                        LEM 1234
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-px shrink-0 text-xs">
                        <div className="w-[155.1px] flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[18.3px] shrink-0 z-[1]">
                            Year: 2002
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="ml-[-5.6px] w-[86px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                              Type: Sedan
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="w-[38.9px] relative leading-[18.3px] inline-block shrink-0 z-[1]">
                            Color:
                          </div>
                          <div
                            className="w-[30.2px] h-[13.6px] flex flex-col items-start justify-start pt-[2.7px] pb-0 pl-0 pr-2.5 box-border"
                          >
                            <div className="w-[19.5px] h-[10.9px] relative rounded-8xs bg-red z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[18.3px] z-[1]">
                            City: New York
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[77px] rounded-8xs bg-success-success-4 border-success-success-3 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] z-[1] text-xs text-success-100">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border ml-[-5.1px] mq450:ml-0">
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

export default Vehicles;