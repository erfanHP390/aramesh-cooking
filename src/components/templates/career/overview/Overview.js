import React from "react";
import styles from "./Overview.module.css";

function Overview() {
  return (
    <>
      <div id="overview" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-body">
        <div className="container">
          {/* row */}
          <div className="row mb-6 mb-md-7">
            <div
              className="col-lg-6 order-lg-2 px-5 px-lg-7 text-center"
              data-aos="fade-left"
            >
              <img
                src="src/img-min/svg/career.svg"
                className="img-fluid"
                alt="career"
              />
            </div>
            <div
              className="col-lg-6 order-lg-1 align-self-center"
              data-aos="fade-right"
            >
              <div className="mt-4 mt-lg-0">
                <h2 className="h1 fw-light mt-3">
                  با پیوستن به تیم ما، بسیاری از{" "}
                  <span className="fw-semi-bold">تجربیات جدید</span> را دریافت
                  کنید
                </h2>
                <p className="lead mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          {/* end row */}
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fas fa-heart"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">برنامه های جامع بهداشتی</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fas fa-dollar"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <rect
                      x={32}
                      y={80}
                      width={448}
                      height={256}
                      rx={16}
                      ry={16}
                      transform="translate(512 416) rotate(180)"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <line
                      x1={64}
                      y1={384}
                      x2={448}
                      y2={384}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <line
                      x1={96}
                      y1={432}
                      x2={416}
                      y2={432}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <circle
                      cx={256}
                      cy={208}
                      r={80}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M480,160a80,80,0,0,1-80-80"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M32,160a80,80,0,0,0,80-80"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M480,256a80,80,0,0,0-80,80"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M32,256a80,80,0,0,1,80,80"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">زمان داوطلبانه پرداخت شده</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fas fa-mobile-alt"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M322,416c0,35.35-20.65,64-56,64H134c-35.35,0-56-28.65-56-64"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M336,336c17.67,0,32,17.91,32,40h0c0,22.09-14.33,40-32,40H64c-17.67,0-32-17.91-32-40h0c0-22.09,14.33-40,32-40"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M344,336H179.31a8,8,0,0,0-5.65,2.34l-26.83,26.83a4,4,0,0,1-5.66,0l-26.83-26.83a8,8,0,0,0-5.65-2.34H56a24,24,0,0,1-24-24h0a24,24,0,0,1,24-24H344a24,24,0,0,1,24,24h0A24,24,0,0,1,344,336Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M64,276v-.22c0-55,45-83.78,100-83.78h72c55,0,100,29,100,84v-.22"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <line
                      x1={241}
                      y1={112}
                      x2="248.44"
                      y2="175.97"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <path
                      d="M256,480H395.31a32,32,0,0,0,31.91-29.61L463,112"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                    <polyline
                      points="368 112 384 48 431 32"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <line
                      x1={224}
                      y1={112}
                      x2={480}
                      y2={112}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">غذای سالم و میان وعده ها</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fas fa-search"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <circle cx={184} cy={232} r={24} />
                    <path d="M256.05,384c-45.42,0-83.62-29.53-95.71-69.83A8,8,0,0,1,168.16,304H343.85a8,8,0,0,1,7.82,10.17C339.68,354.47,301.47,384,256.05,384Z" />
                    <circle cx={328} cy={232} r={24} />
                    <circle
                      cx={256}
                      cy={256}
                      r={208}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeMiterlimit: 10,
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">مرخصی خانوادگی سخاوتمندانه</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fab fa-book"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256,160c16-63.16,76.43-95.41,208-96a15.94,15.94,0,0,1,16,16V368a16,16,0,0,1-16,16c-128,0-177.45,25.81-208,64-30.37-38-80-64-208-64-9.88,0-16-8.05-16-17.93V80A15.94,15.94,0,0,1,48,64C179.57,64.59,240,96.84,256,160Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <line
                      x1={256}
                      y1={160}
                      x2={256}
                      y2={448}
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">یادگیری و توسعه</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className="p-4 mb-5 text-center border rounded-3 bg-light-dark hover-box-up">
                <div className="text-primary mb-3">
                  {/* icon */}
                  {/* <i class="fas fa-airplane"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3rem"
                    height="3rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M407.72,224c-3.4,0-14.79.1-18,.3l-64.9,1.7a1.83,1.83,0,0,1-1.69-.9L193.55,67.56A9,9,0,0,0,186.89,64H160l73,161a2.35,2.35,0,0,1-2.26,3.35l-121.69,1.8a8.06,8.06,0,0,1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29,0-1.1,1.21-.75,2.43L52.17,249.9a16.3,16.3,0,0,1,0,11.9L32.31,333c-.59,1.95-.52,3,1.77,3H52c8.14,0,9.25-1.06,13.41-6.3l37.7-45.7a8.19,8.19,0,0,1,6.6-3.1l120.68,2.7a2.7,2.7,0,0,1,2.43,3.74L160,448h26.64a9,9,0,0,0,6.65-3.55L323.14,287c.39-.6,2-.9,2.69-.9l63.9,1.7c3.3.2,14.59.3,18,.3C452,288.1,480,275.93,480,256S452.12,224,407.72,224Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-2">سفر و اعتبار سالانه</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Overview;
