import bottom_shape from "../assets/images/bottom_shape.png"

const GeneralInformation = () => {
  return (
    <section
      className="self-stretch rounded-3xs bg-white border-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-6 px-[23px] pb-[31px] gap-[30.5px] max-w-full z-[1] text-left text-5xl text-black font-rubik"
    >
      <div className="w-[942.8px] h-[453.4px] relative rounded-3xs bg-white border-grey border-[1px] border-solid box-border hidden max-w-full" />
      <h1 className="m-0 w-[313.8px] relative text-inherit leading-[36.6px] font-medium font-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[29px]">{`General Information `}</h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full text-sm">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20.1px] min-w-[281px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="relative inline-block min-w-[106px] z-[2]">
                Customer Name
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[2]">
              <div className="h-[43px] w-[433.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                placeholder="Enter Name"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="relative inline-block min-w-[106px] z-[2]">
                Pick Up Address
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[2]">
              <div className="h-[43px] w-[433.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                placeholder="Pick Up Address"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="relative inline-block min-w-[106px] z-[2]">
                Drop Off Address
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[2]">
              <div className="h-[43px] w-[433.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                placeholder="Drop Off Address"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="relative inline-block min-w-[106px] z-[2]">
                Discount
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[2]">
              <div className="h-[43px] w-[433.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                placeholder="Discount Here"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[20.1px] min-w-[281px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="relative inline-block min-w-[106px] z-[2]">
                Current Date
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[17px] pb-[11px] max-w-full z-[2]">
              <div className="h-[43px] w-[433.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                placeholder="dd-mm-yyyy"
                type="date"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="w-[367.2px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="relative inline-block min-w-[83px] z-[2]">
                Pick Up Date
              </div>
              <div className="relative inline-block min-w-[84px] z-[2]">
                Pick Up Time
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[13.6px] text-base mq675:flex-wrap">
              <div className="flex-1 rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[9px] pb-[11px] pl-[17px] pr-2.5 min-w-[115px] gap-5 z-[2]">
                <div className="h-[43px] w-[269.6px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
                <input
                  className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                  placeholder="dd-mm-yyyy"
                  type="date"
                />
              </div>
              <div className="w-[149.9px] rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-3 pb-[11px] gap-[13.4px] z-[2]">
                <div className="h-[43px] w-[149.9px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
                <div className="relative inline-block min-w-[39px] whitespace-nowrap z-[3]">
                  <select style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                  }} className="bg-whitesmoke [border:none] [outline:none] w-[100.9px] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]">
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                  </select>
                </div>
                <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
                  <img
                    className="w-[9px] h-[6px] relative object-cover z-[23]"
                    alt=""
                    src={bottom_shape}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6.2px] max-w-full">
            <div className="w-[372.2px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="relative inline-block min-w-[88px] z-[2]">
                Drop Off Date
              </div>
              <div className="relative inline-block min-w-[89px] z-[2]">
                Drop Off Time
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[13.6px] text-base mq675:flex-wrap">
              <div className="flex-1 rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[9px] pb-[11px] pl-[17px] pr-2.5 min-w-[115px] gap-5 z-[2]">
                <div className="h-[43px] w-[269.6px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
                <input
                  className="w-[400px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]"
                  placeholder="dd-mm-yyyy"
                  type="date"
                />
              </div>
              <div className="w-[149.9px] rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-3 pb-[11px] gap-[13.4px] z-[2]">
                <div className="h-[43px] w-[149.9px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden" />
                <div className="relative inline-block min-w-[39px] whitespace-nowrap z-[3]">
                  <select style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                  }} className="bg-whitesmoke [border:none] [outline:none] w-[100.9px] font-rubik text-base bg-[transparent] h-[19px] relative text-black text-left inline-block p-0 z-[3]">
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                  </select>
                </div>
                <div className="flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
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
      </div>
    </section>
  );
};

export default GeneralInformation;