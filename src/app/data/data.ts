import { StaticImageData } from "next/image";
import D1 from '../images/d1.svg';
import D2 from '../images/d2.svg';
import D3 from '../images/d3.svg';
import D4 from '../images/d4.svg';
import D5 from '../images/d5.svg';
import D6 from '../images/d6.svg';
import D7 from '../images/d7.svg';
import D8 from '../images/d8.svg';
import D9 from '../images/d9.svg';



type IData={
    tittle: string,
    description: string,
    image: StaticImageData;
}

const skillData :IData[] = [
    {
    tittle:"Super Fast Vectorizer" ,
    description:"HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind",
    image:D1
    },
   {
    tittle:"Pixel Precision",
    description:"Adjust pixel level detailing in the output vectorized image",
    image:D2

   },
   {
    tittle:"Simple Interface",
    description:"Enhanced and polished user interface allows users to quickly vectorize image",
    image:D3

   },
   {
    tittle:"Several Export Options",
    description:"Convert to multiple vector formats (SVG, AI, PDF, and EPS)",
    image:D4

   },
   {
    tittle:"Input File Formats",
    description:"Works with PNG, JPG/JPEG, BMP, TIFF, WEBP, PDF with transparency",
    image:D5
   },
   {
    tittle:"Unlimited Colors",
    description:"Generate full-color vector graphics with more than 512 colors",
    image:D6
   },
   {
    tittle:"Custom Palette",
    description:"Create and/or pick custom color palette to readjust the colors",
    image:D7
   },
   {
    tittle:"Multi-layering",
    description:"Generate multi-layered (stack) and edge-to-edge (unstack) vectors",
    image:D8
   },
   {
    tittle:"Tweak Vector",
    description:"Review, edit, connect delete, elements in easy-to-use editor",
    image:D9
   },
]

export default skillData