import React, { useState } from "react";

const About = () => {
  const [aboutMe, setAboutMe] = useState({
    name: "Nazrin Shah Adrian Fernandez",
    location: "Cyberjaya, Selangor, Malaysia",
  });
  return (
    <div className="about-main-background" id="About">
      <div className="about-container">
        {/* <h2>
          <span className="color-style-tags-monokai">&lt;</span>
          <span className="color-style-tags-text-monokai">h2</span>
          <span className="color-style-tags-monokai">&gt;</span> About Me{" "}
          <span className="color-style-tags-monokai">&lt;/</span>
          <span className="color-style-tags-text-monokai">h2</span>
          <span className="color-style-tags-monokai">&gt;</span>
        </h2> */}
        <div className="about-content">
          <div className="about-grid-element">
            <span className="about-grid-number">1</span>{" "}
            <span className="about-color-pink">import</span> React, &#123;
            useState &#125;
            <span className="about-color-pink"> from</span>{" "}
            <span className="about-color-yellow">"react"</span>;
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">2</span>
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">3</span>{" "}
            <span className="about-color-blue about-italic">const</span>{" "}
            <span className="about-color-green">AboutMe</span>{" "}
            <span className="about-color-pink">=</span> () => &#123;
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">4</span>{" "}
            <span className="about-color-blue about-italic about-tab-1">
              const
            </span>{" "}
            [aboutMe, <span className="about-color-green">setAboutMe</span>]{" "}
            <span className="about-color-pink">=</span>
            <span className="about-color-green"> useState</span>(&#123;{" "}
            <span className="about-color-purple"></span>
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">5</span>
            <span className="about-tab-2">name: </span>
            <span className="about-color-yellow">
              'Nazrin Shah Adrian Fernandez'
            </span>
            ,
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">
              6{" "}
              <span className="about-tab-2">
                location:{" "}
                <span className="about-color-yellow">
                  'Cyberjaya, Selangor, Malaysia'
                </span>
              </span>
            </span>
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">7</span>{" "}
            <span className="about-tab-1">&#125;)</span>
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">8</span>
          </div>
          <div className="about-grid-element">
            <span className="about-grid-number">9</span>
            <span className="about-color-gray about-tab-1">
              {" "}
              //I'm a Full Stack Web Developer, and I'm always looking for
              challenge.
            </span>
          </div>
          <div className="about-grid-element">
            <span>10</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">11</span>
            <span className="about-color-pink about-tab-1"> return</span> (
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">12</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">13</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">14</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">15</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">16</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">17</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">18</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">19</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">20</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">21</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">22</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">23</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">24</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">24</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">25</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">26</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">27</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">28</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">29</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">30</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">31</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">32</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">33</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">34</span>
          </div>
          <div className="about-grid-element">
            <span className="about-number-tab">35</span>
            <span className="about-color-pink about-tab-0">export defualt</span>
            <span className="about-color-green"> About</span>;
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;