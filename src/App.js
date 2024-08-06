import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import GeneralInformation from "./components/GeneralInformation";
import Vehicles from "./components/Vehicles";
import SelectChauffeur from "./components/SelectChauffeur";
import TermsConditions from "./components/TermsConditions";

const App = () => {
  return (
    <div className="w-full h-[2496px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-[25px] text-black font-rubik mq850:h-auto mq850:min-h-[2496]">
      <h1 className="m-0 absolute top-[117px] left-[344px] text-inherit leading-[38px] font-semibold font-[inherit] inline-block w-[225.1px] mq450:text-xl mq450:leading-[30px]">
        Make New Offer
      </h1>
      <TopBar />
      <SideBar />
      <h3 className="m-0 absolute top-[152.8px] left-[345px] text-lg font-normal font-[inherit] text-gray inline-block w-[428px] z-[1]">
        Offer Generator / Make New Offer
      </h3>
      <main className="absolute top-[223.8px] left-[344.3px] rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border w-[1025px] flex flex-col items-end justify-start pt-9 pb-[59px] pl-[41px] pr-[39px] gap-[30.1px] max-w-full">
        <div className="w-[1025px] h-[2055.2px] relative rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border hidden max-w-full" />
        <GeneralInformation />
        <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[20.1px] box-border gap-[25px] max-w-full">
          <Vehicles />
          <SelectChauffeur />
          <TermsConditions />
        </section>
        <button className="cursor-pointer [border:none] py-[7px] px-[21px] bg-blue w-[216.1px] rounded-3xs flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-steelblue">
          <div className="h-11 w-[216.1px] relative rounded-3xs bg-blue hidden" />
          <div className="flex-1 relative text-xl leading-[150%] font-medium font-rubik text-white text-center z-[1]">
            Generate Offer
          </div>
        </button>
      </main>
    </div>
  );
};

export default App;