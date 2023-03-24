import styles from './About.module.scss';


export const About = () => {


    return(
        <>
            <div className={styles.head}>
                <h2>About</h2>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentSections}>
                    <div className={styles.ContentSectionImage}/>
                    <div className={styles.ContentSectionText}>
                        <h2>LLorem ipsum dolor</h2>
                        <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in dictum. Rhoncus urna neque viverra justo nec ultrices dui. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Arcu odio ut sem nulla pharetra. Tincidunt arcu non sodales neque sodales ut etiam. Tortor dignissim convallis aenean et tortor at risus viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Elit eget gravida cum sociis. Orci sagittis eu volutpat odio facilisis mauris sit. Arcu bibendum at varius vel pharetra. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Nunc sed velit dignissim sodales ut. Aenean et tortor at risus viverra adipiscing at in tellus. Eget mi proin sed libero enim sed faucibus turpis.</p>
                    </div>
                </div>

            </div>
        </>
    );
}