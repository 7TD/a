import ResecleCircleImage from '../../image/RefreshCicle.svg';
import Triangle from '../../image/Triangle.svg';
import {Header} from './Header/Header';
import styles from './Desktop2.module.scss';


export const Desktop2 = () => {


    return (
        <>
            <div className={styles.Desktop}>
                <Header />
                <div className={styles.Content}>
                    <div className={styles.ContentHead}>
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
                            <div className={styles.List} />
                            <div className={styles.ListSelector}>
                                <div className={styles.Image} />
                                <div className={styles.Selector}>
                                    <img className={styles.TriangleLeft} src={Triangle} alt="Triangle"/>
                                    <p>image-name.png</p>
                                    <img className={styles.TriangleRight} src={Triangle} alt="Triangle"/>
                                </div>
                                <button>
                                    <img src={ResecleCircleImage} alt="Refresh cicle" />
                                    Update list
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}