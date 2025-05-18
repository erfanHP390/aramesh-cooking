import React from 'react'

function Statistic() {
  return (
    <>
     <div id="statistic" className="section py-6 py-md-7 bg-body">
  <div className="container">
    <header className="text-center mx-auto mb-5">
      <h2 className="h3 fw-bold">
        {" "}
        آمار <span className="fw-light">ما</span>
      </h2>
      <hr className="divider my-4 bg-warning border-warning" />
      <p className="lead text-muted">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
    </header>
    <div className="row">
      <div className="col-md-6 progress-vertical-trigger">
        <div className="row mb-5 mb-lg-0">
          {/* Vertical Progress Bar */}
          <div className="col-3 text-center">
            <div className="progress-vertical rounded mb-3">
              <div className="progress-vertical-line" data-percent={73} />
            </div>
            <p className="h6">UI/UX</p>
          </div>
          {/* Vertical Progress Bar */}
          <div className="col-3 text-center">
            <div className="progress-vertical rounded mb-3">
              <div className="progress-vertical-line" data-percent={53} />
            </div>
            <p className="h6">SEO</p>
          </div>
          {/* Vertical Progress Bar */}
          <div className="col-3 text-center">
            <div className="progress-vertical rounded mb-3">
              <div className="progress-vertical-line" data-percent={83} />
            </div>
            <p className="h6">Web</p>
          </div>
          {/* Vertical Progress Bar */}
          <div className="col-3 text-center">
            <div className="progress-vertical rounded mb-3">
              <div className="progress-vertical-line" data-percent={93} />
            </div>
            <p className="h6">Apps</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 ms-md-auto">
        <p className="lead mb-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است .
        </p>
        <a href="#" className="btn btn-warning hover-button-up">
          اطلاعات بیشتر
          <svg
            className="bi bi-graph-up ms-2"
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
            <path
              fillRule="evenodd"
              d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Statistic
