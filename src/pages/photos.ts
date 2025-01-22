import images from "@/assets/images";
import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
      {
        asset: images.rise2025,
        width: 5000,
        height: 1620,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      
      {
        asset: images.pas1,
        width: 4080,
        height: 4080,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      
      {
        asset: images.pas2,
        width: 4080,
        height: 4080,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      {
        asset: images.pas3,
        width: 4080,
        height: 4080,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      {
        asset: images.pas5,
        width: 4080,
        height: 4080,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      {
        asset: images.pas6,
        width: 4080,
        height: 4080,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      {
        asset: images.cs1,
        width: 1080,
        height: 720,
        alt: "A person pointing at a beige map",
      },
      {
        asset: images.cs2,
        width: 1080,
        height: 720,
        alt: "A person pointing at a beige map",
      },
      {
        asset: images.cs3,
        width: 1080,
        height: 720,
        alt: "A person pointing at a beige map",
      },
      {
        asset: images.hs1,
        width: 1080,
        height: 900,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
      {
        asset: images.ict1,
        width: 1080,
        height: 1620,
        alt: "A silver and black coffee mug on a brown wooden table",
      },
  {
    asset: images.announcement1,
    width: 1080,
    height: 780,
    alt: "Hiking boots",
  },
  {
    asset: images.announcement2,
    width: 1080,
    height: 1620,
    alt: "Purple petaled flowers near a mountain",
  },
  {
    asset: images.announcement3,
    width: 1080,
    height: 720,
    alt: "A person pointing at a beige map",
  },
  {
    asset: images.announcement4,
    width: 1080,
    height: 720,
    alt: "Two hikers walking toward a snow-covered mountain",
  },
 
  
  
].map(
  ({ asset, alt, width, height }) => ({
    src: asset,
    alt,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: asset, // Since no URL modification is needed now, we use the static import directly.
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  }) as Photo
);

export default photos;
