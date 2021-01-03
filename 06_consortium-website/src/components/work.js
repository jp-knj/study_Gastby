import React from 'react'

export const Work = () => {
  return (
    <section className="work">
      <div className="work_wrap">
        <div className="work_meta">
          <h1 className="work_title">OUR WORK</h1>
          <h6 className="work_title-sub">Laborious to obtain some advantage from it</h6>
        </div>

          <div class="row">

              <div class="card">
                <img class="card_img" src={require(`../assets/lumin-min.png`)} alt="lumin-min" />
                <div class="card_overlay">
                  <div class="card_details">
                    <span class="card_title">STYLE FASHION</span>
                    <span class="card_info">NEW BAG & STYLE FASHION</span>
                  </div>
                  <span class="btnBefore"></span>
                  <span class="btnAfter"></span>
                  <a class="card_link" href="single-project.html"></a>
                </div>
              </div>

            </div>
          </div>
    </section>
  );
};
export default Work;
