import React from "react";

const GalleryInfo = () => {
  return (
    <React.Fragment>
      <p>
        <b>MapReverse</b> is a project prototype built by{" "}
        <a
          href="https://github.com/zhuxiflying/MapReverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xi Zhu
        </a>{" "}
        and{" "}
        <a
          href="https://sites.psu.edu/arobinson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthony Robinson
        </a>{" "}
        at{" "}
        <a
          href="https://www.geovista.psu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the GeoVISTA Center
        </a>{" "}
        in the Department of Geography at Penn State University. MapReverse is
        designed to help explore maps shared in social media to uncover their
        potential sources and derivatives. MapReverse combines machine learning
        services for reverse image search with visualizations to make it
        possible for users to better understand the characteristics and
        dissemination of maps in social media. Please refer to{" "}
        <a
          href="https://www.researchgate.net/publication/325181270_Elements_of_Viral_Cartography"
          target="_blank"
          rel="noopener noreferrer"
        >
          our recent article
        </a>{" "}
        for more information, or you can contact <i>arobinsonATpsu.edu</i>
      </p>
    </React.Fragment>
  );
};

export default GalleryInfo;
