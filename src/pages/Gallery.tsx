import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";
import Sidebar from "@/components/sidebar";

export default function App() {
  const [index, setIndex] = useState(-1);
  const [delay, setDelay] = React.useState(5000);
  return (
    <>
      <div className="flex flex-col dark:bg-gray-900 dark:text-white h-full w-full">
        <Sidebar />
        <div className="container mx-auto p-4 lg:pl-20">
          {/* Grid layout for photos */}
          <div className="w-full">
            <div className="photo-grid">
                <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={200}
                onClick={({ index }) => setIndex(index)}
                />
            </div>
          </div>
        

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slideshow={{ delay }}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>


    </>
  );
}
