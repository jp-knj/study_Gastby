import styled from 'styled-components'

export const BannerSection = styled.section`
  margin: 0 auto;
  padding: 50px 2rem;
  max-width: 1080px;
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  flex-direction: column;
  justify-content: center;
`
export const BannerTitle = styled.div`
  h2 {
    font-size: 3rem;
    line-height: 4.2rem;
    font-weight: 700;
    z-index: 10;
    color: #111111;
    /* mix-blend-mode: difference; */
    p {
      margin: 0;
    }
  }
`
export const BannerBtn = styled.div`
  position: relative;
  z-index: 2;
      a {
        font-size: 1.6rem;
        color: #111111;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;
        svg {
          color: #111111;
          margin-left: 16px;
          border: 2px solid #111111;
          padding: 12px;
          height: 24px;
          width: 24px;
          transition: 0.4s ease-in-out;
        }
        &:hover {
          svg {
            background: #111111;
            color: #ffffff;
          }
        }
      }
`
