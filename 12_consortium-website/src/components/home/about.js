import React from 'react'

export const About = () => {
  return (
    <section className='about'>
      <div className='about_inner'>
        {/* <div className='about_side'>
          <h2 class="background">what's our activity</h2>
        </div> */}
        <div className='about_meta'>
          <h2 className='about_title'>
            About Us<span>/ 私たちについて</span>
          </h2>
          <h6 className='about_title-sub'>
            <div className='line'>その街の地下鉄だからこその目印へ。<br /></div>
            <div className='line'>街（Osaka）の個別性を表すイニシャル「O」<br /></div>
            <div className='line'>その2つが交わる点を探り当て<br /></div>
            <div className='line'>都市のシンボルとしてVISUALIZE。<br /></div>
          </h6>
          <p className='about_description'>
            成熟社会とは、経済や社会制度が発展し、必要な物やサービスは満たされ、自由で便利な生活はできるが、成長がピークに達し色々な状況を呈している社会のことである。 … ところが成熟社会になると自己実現を目指して生き方が多様化し、物事の価値や判断を個人が行い、個人が責任を負う状況へと変化してきたのである
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
