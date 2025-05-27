import Image from "next/image";
import styles from "./slide.module.scss";

import Image1 from "./slides/image1.jpg";
import Image10 from "./slides/image10.jpg";
import Image11 from "./slides/image11.jpg";
import Image2 from "./slides/image2.jpg";
import Image3 from "./slides/image3.jpg";
import Image4 from "./slides/image4.jpg";
import Image5 from "./slides/image5.jpg";
import Image6 from "./slides/image6.jpg";
import Image7 from "./slides/image7.jpg";
import Image8 from "./slides/image8.jpg";
import Image9 from "./slides/image9.jpg";
const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11];

export default function Slide() {
    return (
        <div className="mb-[20px] w-full overflow-hidden [clip-path:polygon(0_10%,100%_0,100%_90%,0_100%)] md:mt-[30px] md:mb-[30px] md:[clip-path:polygon(0_20%,100%_0,100%_80%,0_100%)]">
            <div className={`${styles.animation} flex w-[2200%] sm:w-[1100%] lg:w-[733.334%]`}>
                {images.concat(images).map((image, index) => (
                    <div key={index} className="flex aspect-16/9 w-full items-center justify-center overflow-hidden">
                        <Image src={image} alt={`Slide ${index + 1}`} className="object-cover" quality={40} />
                    </div>
                ))}
            </div>
        </div>
    );
}
