import FreeTrialButton from "./FreeTrialButton";

const FreeTrialBanner = () =>{
  return(
    <>
      <div className="w-full py-14 bg-[url('https://s3-cdnwhjr.whjr.online/website/desktop/mathbg1x.png')]">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div></div>
            <div className="items-center">
              <p className="text-[28px] sm:text-[36px] md:text-[40px] font-serif font-extrabold leading-[40px] sm:leading-[48px] md:leading-[60px] text-black mb-10">WhiteHat Jr is more than just coding, math and music!</p>
              <FreeTrialButton btn1={'Learn more'} btn2={'Book a FREE Trial'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FreeTrialBanner;