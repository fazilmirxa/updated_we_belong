import ImageCollage from "./ImageCollage";
import { homeCollage1, homeCollage2, homeCollage3, homeCollage4, homeCollage5, homeCollage6, homeCollage7, homeCollage8, homeCollage9 } from '../assets';

const HomeImageSection = () => {
    return (
        <div className="py-12">
            <ImageCollage images={[homeCollage1, homeCollage2, homeCollage3, homeCollage4, homeCollage5, homeCollage6, homeCollage7, homeCollage8, homeCollage9]} />
        </div>
    )
}

export default HomeImageSection;    