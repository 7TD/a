import styles from './ImageFiled.module.scss';
import React from "react";
import {ImageInfo} from "../../../models/ImageInfo";

interface ImageProps {
    setActiveImage: Function
    activeImage: ImageInfo
    image: ImageInfo
}

export const ImageFiled = ({image, setActiveImage, activeImage} : ImageProps) => {

    const onActive = () => {
        setActiveImage(image);
    }

    return (
        <>
            <div className={styles.field}>
                <p onClick={onActive} className={activeImage === image ? styles.fieldActive : styles.fieldDisable}>image name</p>
            </div>
        </>
    );
}