import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

interface IProps {
  className?: string;
}

function Login(props: IProps) {
  const [showPassword, setShowPassword] = useState(false); 
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); 
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  const handleLoginClick = () => {
    history.push('/dashboard');
  }
  return (
    <section className={`login flex flex-col bg-white overflow-hidden ${props.className || ''}`}>
      <div className="xs:mt-[22px] xs:mr-0 xs:mb-20 xs:ml-[13px] tn:mt-[22px] tn:mx-auto tn:mb-[50px] w-full flex flex-col gap-y-[50px] mt-[22px] mb-[91px] ml-[13px]">
        <div className="tn:gap-x-2 flex gap-x-3 z-[1]">
          <img className="w-10 object-contain" src={'/assets/logo.png'} alt="alt text" />
          <p className="md:items-start mt-1 mb-[3px]">
            <span className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-black md:text-[24px] xxs:text-[22px]">
              <span className="font-extrabold text-[rgb(83, 91, 205)]">Sign</span>
              <span className="font-extrabold text-[rgb(160, 150, 18)]">Pal</span>
            </span>
          </p>
        </div>

        <div className="md:flex-col md:items-center md:gap-y-[30px] w-[93.16%] flex justify-center gap-5">
          <div className="md:w-full md:min-w-[unset] md:m-0 w-[512px] flex flex-col z-[1] min-w-0 mt-[92px] mb-[134px] mr-10">
            <p className="md:text-[36px] md:items-start xxs:text-[32px] font-bold text-[40px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)]">
              Login
            </p>
            <p className="font-normal text-[16px] leading-tight font-PlusJakartaSans text-[rgb(49,49,49)] opacity-[0.75] mt-4">
              Login to access your account
            </p>

            <div className="flex flex-col relative mt-[49px]">
              <div className="bg-white rounded outline outline-[rgb(121,116,126)] outline-1 outline-offset-[-1px] relative min-h-[56px]" />
              
              <div className="w-[460px] flex flex-col gap-y-2 absolute left-3 top-[-8px]">
                <div className="flex flex-col bg-white w-11 z-[1] max-w-[85%]">
                  <p className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(28,27,31)] text-center w-9 h-[18px] max-w-[85%] mx-1">
                    Email
                  </p>
                </div>
                <input
                  type="email"
                  placeholder="nguyenthuha@gmail.com"
                  className="w-full h-full outline-none px-100 py-100 text-[16px] leading-tight font-PlusJakartaSans text-[rgb(28,27,31)]" 
                />
              </div>
            </div>

            <div className="flex flex-col bg-white rounded outline outline-[rgb(121,116,126)] outline-1 outline-offset-[-1px] relative mt-6">
              <img
                onClick={togglePasswordVisibility} // Add onClick event to toggle password visibility
                className="w-12 object-cover relative mt-1 mb-1 ml-auto cursor-pointer"
                src={'/assets/d483db8daa47f60f8b8df3a652230b66.svg'}
                alt="Show/Hide Password"
              />

              <div className="w-[460px] flex flex-col gap-y-2 absolute left-3 top-[-8px]">
                <div className="flex flex-col bg-white w-[73px] z-[1] max-w-[85%]">
                  <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(49,49,49)] text-center w-[89.04%] h-[18px] mx-1">
                    Password
                  </div>
                </div>

                <div className="flex flex-col ml-1">
                  <input
                    type={showPassword ? "text" : "password"} 
                    placeholder="•••••••••••••••••••••••••"
                    className="w-full h-full outline-none px-100 py-100 text-[16px] leading-tight font-PlusJakartaSans text-[rgb(28,27,31)]" 
                  />
                </div>
              </div>
            </div>

            <div className="xs:mt-6 xs:mr-4 xs:mb-0 xs:ml-0 tn:mt-6 tn:mr-2 tn:mb-0 tn:ml-0 tn:flex-col tn:items-center tn:gap-y-[30px] tn:gap-x-2 flex justify-between gap-x-2.5 mt-6 mr-[17px]">
              <div className="tn:w-full tn:min-w-[unset] w-[130px] flex gap-x-2 min-w-0">
                <img className="w-6 object-cover" src={'/assets/525d0c0c6632a39f58c993f9839ebab6.svg'} alt="alt text" />
                <p className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(49,49,49)] my-[3px]">
                  Remember me
                </p>
              </div>

              <button
                className="tn:w-full tn:m-0 flex justify-end font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(255,134,130)] text-right my-[3px]"
                onClick={() => history.push('/forgot-password')}
              >
                Forgot Password
              </button>
            </div>

            <button className="flex justify-center font-bold text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center bg-[rgb(30,30,47)] rounded pt-[15px] pr-2 pb-[15px] pl-2 mt-10 cursor-pointer"
            onClick={handleLoginClick} >
              Login
            </button>
            <div className="flex justify-center mt-4 mx-auto">
              <span className="font-bold text-[14px] leading-[1.28] font-PlusJakartaSans text-black text-center">
                <span className="font-bold text-[rgb(48,48,48)]">Don’t have an account? </span>
                <span
            className="font-bold text-[rgb(255,134,130)] cursor-pointer"
            onClick={handleSignUpClick} 
          >
            Sign up</span>
              </span>
            </div>

            <div className="sm:flex-col sm:items-center sm:gap-y-[30px] flex gap-x-4 mt-10">
              <hr
                className="sm:w-full sm:m-0 bg-[rgb(49,49,49)] w-[199px] h-px opacity-[0.25] min-h-[1px] mt-[9px] mb-2"
              />
              <div className="sm:w-full font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(49,49,49)] opacity-[0.5]">
                Or login with
              </div>
              <hr
                className="sm:w-full sm:m-0 bg-[rgb(49,49,49)] w-[198px] h-px opacity-[0.25] min-h-[1px] mt-[9px] mb-2"
              />
            </div>

            <div className="tn:flex-col tn:items-center tn:gap-y-[30px] tn:gap-x-2 flex gap-x-4 mt-10">
              {/* Social media login options */}
              <img
                className="tn:w-full tn:min-w-[unset] tn:max-w-[160px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-40 object-cover min-w-0"
                src={'/assets/de9f3005456292fe90e42f79e20e10dc.svg'}
                alt="alt text"
              />
              <img
                className="tn:w-full tn:min-w-[unset] tn:max-w-[160px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-40 object-cover min-w-0"
                src={'/assets/1e58727831e4d8eac8c2399d37191fbc.svg'}
                alt="alt text"
              />
              <img
                className="tn:w-full tn:min-w-[unset] tn:max-w-[160px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-40 object-cover min-w-0"
                src={'/assets/28d74fcb9395a994ef47ddfa4d563aeb.svg'}
                alt="alt text"
              />
            </div>
          </div>

          <img
            className="md:w-full md:min-w-[unset] md:max-w-[563px] w-[563px] object-cover min-w-0 ml-10"
            src={'/assets/fbbd5af3dcd1a864ccd3cfdf2a8a8082.png'}
            alt="alt text"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
