import React, { useState } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import {sculptures} from "../js/imgs"

import "yet-another-react-lightbox/styles.css";


const Sculptures = () => {
  const [index, setIndex] = useState(-1);

const displaySculptures= sculptures.map(img => ({width:300, height:400, src:`/images/${img.src}`}))
console.log('displaySculptures', displaySculptures)


  return (
    <Layout>

      <PhotoAlbum
        layout="rows"
        photos={displaySculptures}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={displaySculptures}
      />
    </Layout>
  );
};

export default Sculptures;
