import React from 'react';
import { ReactComponent as CasesPrev } from "../assets/arrow-right.svg";
import { ReactComponent as CasesNext } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "A custom formula for your skin's unique needs",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "A custom formula for your skin's unique needs",
    img: "lumin-min",
  }
]

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next disabled">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map(caseItem => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-iamge">
                <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
