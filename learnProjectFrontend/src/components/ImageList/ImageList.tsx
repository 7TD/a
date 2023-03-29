import styles from './ImageList.module.scss';
import {ImageFiled} from "./ImageField/ImageFiled";
import React from "react";
import {ImageApi} from "../../api/imageRequest";
import {ImageInfo} from "../../models/ImageInfo";

interface ImageListProps {
    returnImage: Function
}

export const ImageList = ({ returnImage } : ImageListProps) => {
    const [images, setImages] = React.useState<ImageInfo[]>([]);
    const [activeImage, setActiveImage] = React.useState<ImageInfo>({id: 0, photo: ''});

    const getImages = async () => {
        let response = await new ImageApi().getImages();
        setImages(response.data);
    }
    React.useEffect(() => {
        returnImage(activeImage);
    }, [activeImage])

    React.useEffect( () => {
        getImages();
    }, [])

    return (
        <>
            <div className={styles.list}>
                { images.map((image) => (
                    <div className={ activeImage === image ? styles.bg : '' }>
                        <ImageFiled
                            setActiveImage={setActiveImage}
                            activeImage={activeImage}
                            image={image}
                            key={image.id}
                        />
                    </div>
                )) }

            </div>
        </>
    );
}