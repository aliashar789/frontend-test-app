import logo from "../assets/images/logo.png"
import toggle_icon from "../assets/images/toggle_icon.png"
import bell_icon from "../assets/images/bell_icon.png"
import user_icon from "../assets/images/user_icon.png"

const TopBar = () => {
  return (
    <header
      className="absolute top-[0px] left-[0px] w-[1440px] flex flex-row items-start justify-start gap-[2.5px] max-w-full"
    >
      <div className="h-[94px] w-[297.5px] relative">
        <div className="absolute top-[0px] left-[297.5px] bg-white border-grey border-r-[1px] border-solid box-border w-[94px] h-[299px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[3]" />
        <img
          className="absolute top-[25.2px] left-[89.5px] w-[118.1px] h-[45.7px] z-[4]"
          loading="lazy"
          alt=""
          src={logo}
        />
      </div>
      <div className="flex-1 flex flex-row items-start justify-between py-[26px] pl-[15px] pr-[71px] box-border relative max-w-full gap-5">
        <div className="h-[calc(100%_+_1046px)] w-[calc(100%_-_1046px)] absolute !m-[0] top-[0px] right-[-94px] bottom-[-1046px] left-[1140px] bg-white border-grey border-r-[1px] border-solid box-border [transform:_rotate(90deg)] [transform-origin:0_0]" />
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <img
            className="w-[30px] h-[21px] relative overflow-hidden shrink-0 z-[1] cursor-pointer"
            loading="lazy"
            alt=""
            src={toggle_icon}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[21px]">
          <div className="h-[42px] w-[42px] rounded-3xs bg-whitesmoke border-grey border-[1px] border-solid box-border flex flex-row items-center justify-center shrink-0 z-[1]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={bell_icon}
            />
          </div>
          <img
            className="h-[42px] w-[42px] relative min-h-[42px] shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={user_icon}
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;