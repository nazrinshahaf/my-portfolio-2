import React from "react";

const Home = () => {
  return (
    <div className="home-page-background" id="Home">
      <div>
        <h1>
          <span className="color-style-tags-synth home-page-tags-fontsize">
            &lt;
          </span>
          <span className="color-style-tags-text-synth home-page-tags-fontsize">
            h1
          </span>
          <span className="color-style-tags-synth home-page-tags-fontsize">
            &gt;
          </span>{" "}
          My Portfolio{" "}
          <span className="color-style-tags-synth home-page-tags-fontsize">
            &lt;/
          </span>
          <span className="color-style-tags-text-synth home-page-tags-fontsize">
            h1
          </span>
          <span className="color-style-tags-synth home-page-tags-fontsize">
            &gt;
          </span>
        </h1>
      </div>
      <div className="home-page-h2-container">
        <h2>
          <span className="color-style-declare-synth">const </span>
          <span className="color-style-tags-synth">Name</span> =
          <span className="color-style-tags-text-synth"> 'Nazrin Shah'</span>
        </h2>
        <h2>
          <span className="color-style-declare-synth">let </span>
          <span className="color-style-tags-synth">Skills</span> = [{" "}
          <span className="color-style-tags-text-synth">
            'Python', 'JavaScript', 'CSS', 'HTML', <br />
            <span style={{ marginLeft: "50px" }}>
              'jQuery', 'PostgreSQL', 'React', 'Bootstrap',{" "}
            </span>
            <br />
            <span style={{ marginLeft: "50px" }}>
              'React', '<span className="blinking-cursor-synth"> </span>
            </span>
          </span>{" "}
          ]
        </h2>
      </div>
    </div>
  );
};

export default Home;
