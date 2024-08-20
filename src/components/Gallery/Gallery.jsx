import React from "react";
import Lightroom from "react-lightbox-gallery";
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";
import GalleryImg5 from "../../assets/images/gallery/g5.jpg";

const Gallery = () => {
  var images = [
    {
      src: GalleryImg1,
      desc: "Tourist In Sri Lanka Riding Train Hanging Outside Stock Photo",
      sub: "Kalana Ridmal",
    },
    {
      src: GalleryImg3,
      desc: "The Living God of Sigiriya ",
      sub: "Disanayaka M Hereath",
    },
    {
      src: GalleryImg6,
      desc: "Sri Lankan Elephant",
      sub: "Ekanayaka Jayasingha",
    },
    {
      src: GalleryImg5,
      desc: "THE GALLERY CAFÉ - Explore Sri Lanka",
      sub: "Chamath Soisa",
    },
    {
      src: GalleryImg7,
      sub: "Kasun Charith",
    },
    {
      src: GalleryImg4,
      desc: "Cylon tea",
      sub: "Siril Rajakaruna",
    },
  ];

  var settings = {
    columnCount: {
      default: 3,
      mobile: 2,
      tab: 3,
    },
    mode: "dark",
    enableZoom: false,
  };
  return <Lightroom images={images} settings={settings} />;
};

export default Gallery;
