import "./App.css";
import cols1 from "./asset/img1.png";
import cols2 from "./asset/img7.png";
import cols3 from "./asset/img2.png";
import cols4 from "./asset/img3.png";
import cols5 from "./asset/img4.png";
import cols6 from "./asset/img5.png";
import cols7 from "./asset/img6.png";
import logo from "./asset/LOGO.png";

function App() {
  const contentItems = [
    {
      overview: "Overview",
      content:
        "Get a clear overview of your <br/> ongoing projects, earnings, and <br/> communication history.",
    },
    {
      overview: "Financials",
      content:
        "Track your earnings, invoices, and <br/> payments in one centralized <br/> location.",
    },
  ];
  return (
    <div className="justify-center items-center">
      <div className=" flex-cols text-center items-center justify-center ">
        <img
          src={cols1}
          alt=""
          className="absolute left-[8%]"
          width={90}
          height={90}
        />
        <div className="text-center relative font-bold top-2 md:text-[70px] text-[23px] font-sans items-center">
          <h1>
            Welcome To <span className="text-[#6A0572]">Freed</span>, the
          </h1>
          <span>Future Of Freelancing</span>
        </div>
        <h1 className="relative top-4 grid md:text-[24px] text-wrap">
          Join our decentralized platform and experience the benefits of{" "}
          <span> blockchain technology in the freelance industry.</span>
        </h1>

        <img
          src={cols2}
          alt=""
          className="absolute right-[15%]"
          width={90}
          height={90}
        />
      </div>

      <div className=" relative top-9 flex gap-4 justify-center">
        <button className="w-[208px] h-[64px] rounded-[16px] bg-[#8E44AD] text-[24px] border-none text-[#FEFEFE]">
          Get Started
        </button>
        <button className="w-[208px] h-[64px] border-none rounded-[16px] border-[1px] border-[#8E44AD] text-[24px] text-[#8E44AD]">
          Learn More
        </button>
      </div>

      <div className="py-9 px-[5%]">
        <img
          src={cols3}
          alt=""
          width={50}
          height={10}
          className="py-9 items-center w-[100%] h-[50%]"
        />
      </div>
      <div>
        <div className="py-5 px-[5%]">
          <div>
            <span>About</span>
            <div className="flex md:flex-row flex-col justify-between">
              <div>
                <h1 className="md:text-[40px] text-[20px] font-bold">
                  Experience a Decentralized <br /> Marketplace for Transparent
                  <br />
                  <span className="text-[#8E44AD]">and Fair Freelancing</span>
                </h1>
                <h3 className="relative top-5 md:text-[17px] text-[16px] text-[#333333] font-sans">
                  Freed's decentralized marketplace ensures transparency and{" "}
                  <br />
                  fairness by eliminating intermediaries and providing a secure{" "}
                  <br />
                  environment for freelancers and clients to collaborate.
                </h3>
              </div>
              <img
                src={cols4}
                alt=""
                width={100}
                height={100}
                className="md:w-[50%] w-[100%] md:h-[50%] h-[100%] md:py-0 py-10"
              />
            </div>
          </div>
        </div>

        <div className="px-[5%]">
          <span>Feature</span>
          <div className="flex md:flex-row flex-col justify-between items-center">
            <img
              src={cols5}
              alt="logo"
              width={100}
              height={100}
              className="md:w-[40%] w-[100%] md:h-[40%] h-[100%] "
            />

            <div>
              <h1 className="py-9 md:text-[50px] text-[20px] font-bold">
                Unlock Global Opportunities <br /> with Cryptocurrency <br />
                Payments on Freed
              </h1>
              <h3 className="md:text-[20px] text-[18px]">
                Freed empowers freelancers worldwide by enabling <br />{" "}
                cryptocurrency payments, providing access to the freelance{" "}
                <br /> economy without banking limitations.
              </h3>
            </div>
          </div>
        </div>

        <div className="px-[5%]">
          <div className="flex md:flex-row justify-between flex-col md:py-10 py-[50%] items-center">
            <h1 className="md:text-[48px] text-wrap font-semibold text-[#333333] font-sans ">
              Intuitive Dashboards for <br /> Freelancers and Clients
            </h1>
            <p className="text-[#333333] font-sans text-wrap">
              Freed provides comprehensive user dashboards that offer <br />
              insights into job statuses, financials, communications, and <br />
              more. These intuitive dashboards enhance user experience and
              <br /> productivity.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between ">
            <div>
              <button>Sign Up</button>
              <button>Learn More </button>
            </div>
            <div className="flex gap-[33vh]">
              {contentItems.map((contentitems, index) => (
                <div key={index} className="grid ">
                  <span className="font-semibold text-[24px] text-[#333333]">
                    {contentitems.overview}
                  </span>
                  <h1
                    className=""
                    dangerouslySetInnerHTML={{ __html: contentitems.content }}
                  ></h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={cols6}
              alt=""
              width={50}
              height={10}
              className="relative top-9 rounded-[16px] items-center w-[100%] h-[50%]"
            />
          </div>
        </div>

        <div className="flex py-20 px-[5%]">
          <img
            src={cols7}
            alt=""
            width={50}
            height={50}
            className="w-[50%] h-[50%]"
          />
          <div>
            <h1 className="text-wrap text-[50px] font-semibold">
              Expand Your Skills with <br /> Freed's Learning <br />{" "}
              Opportunities
            </h1>
            <h3 className="text-wrap">
              At Freed, we believe in continuous growth and learning. That's why
              we offer a range of resources and workshops to help you enhance
              your skills and stay ahead in your freelance career.
            </h3>
          </div>
        </div>

        <div className="px-[5%] py-9">
          <div className="flex md:flex-row border-[2px]  rounded-md items-center border-[#8E44AD] justify-between w-[100%] h-[100%]">
            <div className="px-9">
              <h1 className="text-wrap font-sans text-[50px] font-semibold">
                Join the Freed <br /> Community Today
              </h1>
              <h3 className="text-[20px] text-[#333333] font-sans">
                Discover a new way to freelance and connect with clients
                globally.
              </h3>
              <div className="flex gap-4 py-6">
                <button className="w-[208px] h-[64px] rounded-[16px] bg-[#8E44AD] text-[24px] text-[#FEFEFE]">
                  Get Started
                </button>
                <button className="w-[208px] h-[64px] rounded-[16px] border-[1px] border-[#8E44AD] text-[24px] text-[#8E44AD]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[30%] h-[50vh] bg-[#8E44AD] flex items-center justify-center text-center">
              <img
                src={logo}
                alt=""
                width={10}
                height={10}
                className="w-[50%] h-[100%]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#6A0572] h-[100%] py-20">
          <div className="grid justify-center text-center">
            <h1 className="md:text-[64px] text-wrap font-sans text-[#FEFEFE] font-semibold">Stay Informed with <br/> Our Newsletter</h1>
            <h3 className="text-[#FFFFFF] font-sans md:text-[18px] text-wrap">
              Subscribe to receive updates, industry insights, and valuable
              tips.
            </h3>
            <div className="gap-4">
              <input
                placeholder="Enter Email"
                className="w-[537px] h-[72px] outline-none"
              />
              <button className="w-[216px] h-[72px] bg-[#8E44AD]">
                Subscribe
              </button>
            </div>
            <p className="md:text-[18px] font-sans text-wrap text-[#FFFFFF]">By continuing, you agree to our terms and condition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
