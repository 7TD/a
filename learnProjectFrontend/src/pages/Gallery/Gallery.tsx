import styles from './Gallery.module.scss';
import Triangle from '../../assets/svg/Triangle.svg';
import RefreshCircleImage from '../../assets/svg/RefreshCicle.svg';
import React from 'react';
import {ImageApi} from '../../api/imageRequest';
import {ImageList} from "../../components/ImageList/ImageList";
import {ImageInfo} from "../../models/ImageInfo";


export const Gallery = () => {
    const [selectedImage, setSelectedImage] = React.useState<string>();
    const [img, setImg] = React.useState(null);

    const [activeImage, setActiveImage] = React.useState<ImageInfo>();

    const handleChange = (event: any) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
        setImg(event.target.files[0]);
    }

    // Добавление
    const addImage = async () => {
        let data = new FormData();
        img && data.append('img', img);
        await new ImageApi().addImage(data);
    }

    // Кнопки переключения картинок
    const nextImage = () => {
        const nextImg: ImageInfo = { id:0, photo: '' };


        setActiveImage(nextImg);
    }

    return (
        <>
            <div className={styles.head}>
                <h2>Gallery</h2>
            </div>
            <div className={styles.ContentBody}>
                <div className={styles.ContentBodyTitleImage}>
                    {selectedImage ? (
                        <div className={styles.Image}>
                            <img src={selectedImage} alt="image"/>
                        </div>
                    ) : (<div className={styles.Image} />)}
                    <span>TitleImage</span>
                    <div className={styles.TitleImageBtns}>
                        <label>
                            <input type="file" onChange={handleChange} />
                            <span>Add image</span>
                        </label>
                        <button
                            onClick={() => setSelectedImage('')}
                            className={styles.ReadBtn}>
                            Cancel
                        </button>
                    </div>
                    <div className={styles.ContentBodyTitleImagePush}>
                        <button onClick={addImage}>Save image</button>
                    </div>
                </div>
                <div className={styles.ContentBodyList}>
                    <ImageList returnImage={setActiveImage} />
                    <div className={styles.ListSelector}>
                        <div className={styles.Image}>
                            <img src={`data:image/jpeg;base64,${activeImage?.photo}`} alt="image" />
                        </div>
                        <div className={styles.Selector}>




                            <img className={styles.TriangleLeft} src={Triangle} alt="Triangle"/>
                            <p>image-name.png</p>
                            <img onClick={nextImage} className={styles.TriangleRight} src={Triangle} alt="Triangle"/>




                        </div>
                        <button>
                            <img src={RefreshCircleImage} alt="Refresh cicle"/>
                            Update list
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}