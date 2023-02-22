import React from 'react';
import styles from '../styles/home.module.css';

const Home = () => (
  <>
    <h2 className={styles.homeTitle}>welcome to our page  &#33;</h2>
    <div className="homeBody">
      <p>
        simply dummy text of the printing and typesetting industry. has been
        the industrys standard dummy text ever since the 1500s when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </p>
      <br />
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </div>
  </>
);
export default Home;
