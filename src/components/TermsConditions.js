
const TermsConditions = () => {
  return (
    <div
      className="self-stretch rounded-3xs bg-white border-grey border-[1px] border-solid box-border flex flex-col items-start justify-start pt-6 pb-[33px] pl-[23px] pr-[22px] gap-[30.5px] max-w-full z-[1] text-left text-5xl text-black font-rubik"
    >
      <div className="w-[942.8px] h-[251.2px] relative rounded-3xs bg-white border-grey border-[1px] border-solid box-border hidden max-w-full" />
      <h1 className="m-0 w-[313.8px] relative text-inherit leading-[36.6px] font-medium font-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[29px]">{`Terms & Conditions`}</h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-sm">
        <div className="flex flex-row items-start justify-start py-0 px-1.5">
          <div className="relative z-[2]">
            Please specify terms and conditions.
          </div>
        </div>
        <textarea
          className="border-grey border-[1px] border-solid bg-whitesmoke h-[100.1px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-[11px] px-[17px] font-rubik text-base text-black z-[2]"
          placeholder={`Terms & Conditions here`}
          rows={5}
          cols={45}
        />
      </div>
    </div>
  );
};

export default TermsConditions;