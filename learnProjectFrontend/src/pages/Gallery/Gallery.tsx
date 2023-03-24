import styles from './Gallery.module.scss';
import Triangle from '../../assets/svg/Triangle.svg';
import RefreshCircleImage from '../../assets/svg/RefreshCicle.svg';


export const Gallery = () => {


    return (
        <>
            <div className={styles.head}>
                <h2>Gallery</h2>
            </div>
            <div className={styles.ContentBody}>
                <div className={styles.ContentBodyTitleImage}>
                    <div className={styles.Image}></div>
                    <span>TitleImage</span>
                    <div className={styles.TitleImageBtns}>
                        <button className={styles.BlueBtn}>Add image</button>
                        <button className={styles.ReadBtn}>Cancel</button>
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