const CounterSection = () => {
  return (
    <>
      {/* Counter Start */}
      <section className="dark-bg pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-3 counter text-center col-sm-6">
              <i className="fas fa-calendar-alt light-icon font-30px" />
              <h2 className="count blue-color font-200 oswald-font">A Decade</h2>
              <h3>of Experience</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6">
              <i className="fas fa-users light-icon font-30px" />
              <h2 className="count blue-color font-200 oswald-font">A Dedicated Team</h2>
              <h3>of Agricultural Professionals</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6">
              <i className="fas fa-thumbs-up light-icon font-30px" />
              <h2 className="count blue-color font-200 oswald-font">Trusted by Clients</h2>
              <h3>Across Our Growing Community</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6">
              <i className="fas fa-trophy light-icon font-30px" />
              <h2 className="count blue-color font-200 oswald-font">Recognized Excellence</h2>
              <h3>Across Our Work</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Counter End */}
    </>
  );
};
export default CounterSection;
