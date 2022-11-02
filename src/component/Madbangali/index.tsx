/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import "./Madbang.css";
import Topleftlogo from "../../assets/assets2/image/Top left Logo.png";
import MagicEdenLogo from "../../assets/assets2/image/Magic_Eden_Logo_Trans.png";
import Opensea from "../../assets/assets2/image/Opensea Logo.png";
import RightLogo from "../../assets/assets2/image/Right logo.png";
import ArtPreview1 from "../../assets/assets2/image/Art preview 1.png";
import ArtPreview2 from "../../assets/assets2/image/Art Preview 2.png";
import ArtPreview3 from "../../assets/assets2/image/Art Preview 3.png";
import ArtPreview4 from "../../assets/assets2/image/Art Preview 4.png";
import ArtPreview5 from "../../assets/assets2/image/Art Preview 5.png";
import Righthandarrow from "../../assets/assets2/image/Right Hand Arrow.png";
import Lefthandarrow from "../../assets/assets2/image/Left Hand Arrow.png";

function MadBanga() {
//   return (
//     <>
//       <h1>Hey, VLad</h1>
//       <button
//         onClick={() => {
//           alert(2);
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
  return (
    <div className="body">
      <header>
        <nav className="navbar navbar-expand-md navbar-light" id="banner">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                alt=""
                className="img-fluid pt-3 logo-img"
                src={Topleftlogo}
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse center-nav"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item px-3">
                  <a className="nav-link active" href="#">
                    THE ART
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/">
                    BUY A WEENY
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto right-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      alt=""
                      className="img-fluid right-logos"
                      src={MagicEdenLogo}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      alt=""
                      className="img-fluid right-logos2"
                      src={Opensea}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      alt=""
                      className="img-fluid right-logos2"
                      src={RightLogo}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="hero"></section>
        <section id="about" className="mb-5">
          <div className="about-container">
            <p className="about-text">
              Ween frens is a special collection of 6,666 hand-drawn INKED and
              completely reimagined vintage characters inspired by the golden
              generation of 70's cartoons.
            </p>
            <p className="about-text">
              The weenies collection is barely scratching the surface of what is
              coming next.
            </p>
            <p className="about-text">
              Are you ready take the journey with us ?
            </p>
          </div>
        </section>

        <section id="art">
          <div className="row">
            <div className="col-4 ">
              <img className="art-image img-fluid" src={ArtPreview1} />
            </div>
            <div className="col-4 ">
              <img className="art-image img-fluid" src={ArtPreview2} />
            </div>
            <div className="col-4 ">
              <img className="art-image img-fluid" src={ArtPreview4} />
            </div>
          </div>
          {/* 
            <div className="row second-art-row">
                <div className="col-6 offset-2 second-art-left">
                    
                    <img className="art-image img-fluid" src={ArtPreview5} />
                </div>
                <div className="col-6 second-art-right">
                    <img className="art-image img-fluid" src={ArtPreview3} />
                </div>
            </div> */}
        </section>

        <section id="plan">
          <div className="container">
            <div className="row">
              <div className="col-2 d-flex justify-content-end align-items-center">
                <div className="">
                  <a href="#">
                    <img src={Lefthandarrow} className="img-fluid hand" />
                  </a>
                </div>
              </div>
              <div className="col  text-center p-2">
                <h2 className="plan-heading">PART 1</h2>
                <h3 className="plan-subheading">LAUNCHING THE COLLECTION</h3>
                <p className="plan-text">
                  When Frens is a special collection of 6.666 hand-drawn inked
                  and completely reimagined vintage characters inspired by the
                  golden generation of 70's cartoons.
                </p>
              </div>
              <div className="col-2 d-flex justify-content-start align-items-center">
                <div className="">
                  <a href="#">
                    <img src={Righthandarrow} className="img-fluid hand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="row upper-footer">
          <div className="col-6 col-xl-4 col-md-5 text-center">
            <a className="footer-link" href="#">
              CONTACT US
            </a>
          </div>
          <div className="col-xl-4 col-md-2 d-none d-md-block"></div>
          <div className="col-6 col-xl-4 col-md-5  text-center">
            <a className="footer-link" href="#">
              WORK WITH US
            </a>
          </div>
        </div>
        <div className="row text-center lower-footer">
          <p className="footer-disclaimer text-white">
            ©️ 2022, WEENFRENS POWERED BY WEB3 DEGENS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MadBanga;
