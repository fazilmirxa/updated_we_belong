import ImageCollage from "./ImageCollage";
import { imageCollage1, bannerDetailImg, imageCollageCore } from '../assets';

const HomeImageSection = () => {
    return (
        <div className="py-12">
            <ImageCollage images={[imageCollage1, bannerDetailImg, imageCollage1, bannerDetailImg, imageCollageCore, bannerDetailImg, imageCollage1, bannerDetailImg, imageCollage1]} />
        </div>
    )
}

export default HomeImageSection;    