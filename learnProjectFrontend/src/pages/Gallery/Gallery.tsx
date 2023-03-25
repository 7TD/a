import styles from './Gallery.module.scss';
import Triangle from '../../assets/svg/Triangle.svg';
import RefreshCircleImage from '../../assets/svg/RefreshCicle.svg';
import React from "react";


export const Gallery = () => {
    const [selectedImage, setSelectedImage] = React.useState<string>();

    const handleChange = (event: any) => {
        console.log(event.target.files);
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
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
                            <img src={selectedImage} alt="image" width={380}/>
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
                        <button>Save image</button>
                    </div>
                </div>



                <div className={styles.ContentBodyList}>
                    <div className={styles.List}/>
                    <div className={styles.ListSelector}>
                        <div className={styles.Image}/>
                        <div className={styles.Selector}>
                            <img className={styles.TriangleLeft} src={Triangle} alt="Triangle"/>
                            <p>image-name.png</p>
                            <img className={styles.TriangleRight} src={Triangle} alt="Triangle"/>
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