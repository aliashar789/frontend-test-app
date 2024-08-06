import dashboard from "../assets/images/dashboard.png"
import calendar from "../assets/images/calendar.png"
import customers from "../assets/images/customers.png"
import reservations from "../assets/images/reservations.png"
import vehicles from "../assets/images/vehicles.png"
import tracking from "../assets/images/tracking.png"
import offer_gen from "../assets/images/offer_gen.png"
import vector_line from "../assets/images/vector_line.png"

const SideBar = () => {
  return (
    <div
      className="absolute top-[0px] left-[-3px] bg-white border-grey border-r-[1px] border-solid box-border w-[302px] flex flex-col items-start justify-start pt-[149.5px] pb-[1919.9px] pl-[39px] pr-[15px] gap-[10.8px] text-left text-lg text-black font-rubik"
    >
      <div className="w-[302px] h-[2594.1px] relative bg-white border-grey border-r-[1px] border-solid box-border hidden" />
      <a href="/" className="w-[223px] rounded-3xs bg-white flex flex-row items-start justify-start pt-[10.7px] px-[21px] pb-[12.8px] box-border gap-[9px] z-[1] no-underline text-black">
        <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden" />
        <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
          <img
            className="w-[19px] h-[20.3px] relative z-[2]"
            alt=""
            src={dashboard}
          />
        </div>
        <div className="w-[104px] relative leading-[28.8px] inline-block shrink-0 z-[2]">
          Dashboard
        </div>
      </a>
      <a href="/" className="no-underline text-black w-[223px] rounded-3xs bg-white flex flex-row items-start justify-start pt-[11.7px] px-5 pb-[11.8px] box-border gap-[8.5px] z-[1]">
        <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden" />
        <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
          <img
            className="w-[20.5px] h-[20.3px] relative z-[2]"
            alt=""
            src={calendar}
          />
        </div>
        <div className="w-[104px] relative leading-[28.8px] inline-block shrink-0 z-[1]">
          Calendar
        </div>
      </a>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-px gap-[22px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[23px] gap-[10.7px]">
          <a href="/" className="no-underline text-black self-stretch rounded-3xs bg-white flex flex-row items-start justify-start pt-[11.7px] px-5 pb-[11.8px] gap-[7.2px] z-[1]">
            <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden" />
            <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
              <img
                className="w-[21.8px] h-[20.3px] relative z-[2]"
                alt=""
                src={customers}
              />
            </div>
            <div className="w-[104px] relative leading-[28.8px] inline-block shrink-0 z-[2]">
              Customers
            </div>
          </a>
          <a href="/" className="no-underline text-black self-stretch rounded-3xs bg-white flex flex-row items-start justify-start pt-[11.7px] px-5 pb-[11.8px] gap-[8.3px] z-[1]">
            <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden" />
            <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
              <img
                className="w-[20.7px] h-[23.7px] relative z-[2]"
                alt=""
                src={reservations}
              />
            </div>
            <div className="relative leading-[28.8px] inline-block min-w-[115px] z-[2]">
              Reservations
            </div>
          </a>
        </div>
        <div className="w-[172px] flex flex-row items-start justify-start py-0 px-[19px] box-border">
          <a href="/" className="no-underline text-black flex-1 flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
              <img
                className="w-[23px] h-[17.4px] relative z-[1]"
                loading="lazy"
                alt=""
                src={vehicles}
              />
            </div>
            <h3 className="m-0 flex-1 relative text-inherit leading-[28.8px] font-normal font-[inherit] z-[1]">
              Vehicles
            </h3>
          </a>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <a href="/" className="no-underline text-black w-[223px] rounded-3xs bg-white flex flex-row items-start justify-start pt-[11.7px] px-[21px] pb-[11.8px] box-border gap-[9px] z-[1]">
            <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden" />
            <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
              <img
                className="w-[19px] h-[20.3px] relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src={tracking}
              />
            </div>
            <div className="w-[104px] relative leading-[28.8px] inline-block shrink-0 z-[2]">
              Tracking
            </div>
          </a>
          <a href="/" className="no-underline w-[223px] rounded-3xs bg-white flex flex-row items-start justify-start pt-[11.7px] pb-[11.8px] pl-[21px] pr-[15px] box-border relative gap-[9px] z-[1] text-blue">
            <div className="h-[52.3px] w-[223px] relative rounded-3xs bg-white hidden z-[0]" />
            <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
              <img
                className="w-[19px] h-[20.3px] relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src={offer_gen}
              />
            </div>
            <h3 className="m-0 flex-1 relative text-inherit leading-[28.8px] font-medium font-[inherit] z-[2]">
              Offer Generator
            </h3>
            <img
              className="h-[77px] w-px absolute !m-[0] bottom-[-75.3px] left-[26.9px] z-[3]"
              alt=""
              src={vector_line}
            />
          </a>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[22px] pr-0">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px gap-2.5">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[17px] gap-1.5">
                <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                  <div className="w-2 h-2 relative rounded-[50%] bg-grey border-grey border-[0px] border-solid box-border z-[4]" />
                </div>
                <div className="flex-1 rounded-3xs bg-white flex flex-row items-start justify-start py-[5px] px-3 whitespace-nowrap z-[3]">
                  <div className="h-[37px] w-[191.5px] relative rounded-3xs bg-white hidden" />
                  <a href="/" className="no-underline text-black w-[152px] relative leading-[150%] inline-block shrink-0 z-[4]">
                    All Offers
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-1.5 text-white">
                <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                  <div className="w-2 h-2 relative rounded-[50%] bg-grey border-grey border-[0px] border-solid box-border z-[4]" />
                </div>
                <div className="flex-1 rounded-3xs bg-blue flex flex-row items-start justify-start py-[5px] pl-3 pr-[9px] whitespace-nowrap z-[3]">
                  <div className="h-[37px] w-[209.1px] relative rounded-3xs bg-blue hidden" />
                  <a href="/" className="no-underline m-0 flex-1 relative text-inherit leading-[150%] font-medium font-[inherit] z-[4]">
                    Make New Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;