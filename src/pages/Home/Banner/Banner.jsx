import svg1 from "./../../../assets/assets/ils_14.svg";
import svg2 from "./../../../assets/assets/ils_14.1.svg";
import svg3 from "./../../../assets/assets/ils_14.2.svg";
import svg4 from "./../../../assets/assets/ils_14.3.svg";
const Banner = () => {
  return (
    <>


      <div className="hero min-h-screen bg-base-200 pt-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div class="relative w-full">
            <img src={svg1} alt="" class="illustration mt-[95px] mx-auto" />
            <img
              src={svg2}
              alt=""
              class="z-1 w-[15%]  bg-[#f2dad5] absolute -top-[7%] right-[41%] animate-jumpThree"
            />
            <img
              src={svg3}
              alt=""
              class="z-1 w-[15%]  bg-[#f77a56] absolute -top-[5%] right-[16%] animate-jumpTwo"
            />
            <img
              src={svg4}
              alt=""
              class="z-1 w-[15%]  bg-[#f2dad5] absolute top-[0%] left-[25%] animate-jumpThree"
            />
          </div>
          <div className="ml-5">
            <h1 className="text-5xl font-bold">Online Survey</h1>
            <p className="py-6">
            Welcome to Survey Genius, where data meets decision-making. Our platform is designed to provide you with powerful tools to gather, analyze, and interpret valuable feedback from your target audience.
            </p>
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400 ">
              <li class="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">
                User-Friendly Interface
                </span>
              </li>
              <li class="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Customizable Surveyse</span>
              </li>
              <li class="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Versatile Applications</span>
              </li>
              <li class="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Mobile Compatibility</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-5">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
