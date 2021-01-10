import React from "react";

const Featured = () => {
  return (
    <section class="featured">
      <div class="featured_wrap">
        <article class="featured_meta">
          <h1 class="featured_title">HISTORY OF AGENCY</h1>
          <h4 class="featured_title-sub">WHO LOVES OR PURSUES OR DESIRES TO OBTAIN PAIN OF ITSELF, BUT BECAUSE OCCASIONALLY CIRCUMSTANCES OCCUR AND PAIN CAN PROCURE HIM SOME GREAT PLEASURE</h4>
          <p class="featured_description"><br />Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.</p>
        </article>
        <div class="featured_imgs">
          <img class="featured_img" src={require(`../assets/lumin-min.png`)} alt="lumin-min"/>
        </div>
      </div>
    </section>
  );
};

export default Featured;
