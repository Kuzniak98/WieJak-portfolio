import React, { useEffect, useState, useContext } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';

import { LoadingContext } from '../../context';
import img1 from '../../assets/projects/burger/header.jpg';
import img2 from '../../assets/projects/vault/header.jpg';
import img3 from '../../assets/about/photo.jpg';
import img4 from '../../assets/projects/incoming.jpg';
import img5 from '../../assets/projects/places/header.jpg';
import img6 from '../../assets/about/circle-interactivedeveloper.png';
import img7 from '../../assets/projects/burger/menu-mobile.jpg';
import img8 from '../../assets/projects/burger/builder-mobile.jpg';
import img9 from '../../assets/projects/burger/home-mobile.jpg';
import img10 from '../../assets/projects/places/mobile-posts.jpg';
import img11 from '../../assets/projects/places/home-mobile.jpg';
import img12 from '../../assets/projects/places/user-profile-mobile.jpg';
import img13 from '../../assets/projects/vault/mobile-1.jpg';
import img14 from '../../assets/projects/vault/mobile-2.jpg';
import img15 from '../../assets/projects/vault/mobile-3.jpg';
import img16 from '../../assets/about/circle-letswork.png';
import img17 from '../../assets/about/technologies/css.png';
import img18 from '../../assets/about/technologies/firebase.png';
import img19 from '../../assets/about/technologies/git.png';
import img20 from '../../assets/about/technologies/gsap.png';
import img21 from '../../assets/about/technologies/html.png';
import img22 from '../../assets/about/technologies/js.png';
import img23 from '../../assets/about/technologies/mongo.png';
import img24 from '../../assets/about/technologies/node.png';
import img25 from '../../assets/about/technologies/opengl.png';
import img26 from '../../assets/about/technologies/react-three-fiber.png';
import img27 from '../../assets/about/technologies/react.png';
import img28 from '../../assets/about/technologies/redux.png';
import img29 from '../../assets/about/technologies/sass.png';
import img30 from '../../assets/about/technologies/webgl.png';
import img31 from '../../assets/about/technologies/webpack.png';
import { loading, loadingComplete } from '../../animations/loader';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

const Loader = () => {
  const { dispatch } = useContext(LoadingContext)

  const [loaded, setLoaded] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [locked, toggleLocked] = useToggle(true);

  useLockBodyScroll(locked);

  useEffect(() => {
    images.forEach(img => {
      new Image().src = img;
    })
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true)
    })
  }, [])
  useEffect(() => {
    if (loaded && animated) {
      loadingComplete(() => {
        setMounted(false);
        dispatch({ type: 'SET_IS_LOADED', payload: true });
        toggleLocked(false)
      })
    }
  }, [loaded, animated, toggleLocked, dispatch])
  useEffect(() => {
    loading(() => setAnimated(true));
  }, [])

  let content = null;
  if (mounted) {
    content = (
      <div className='loader'>
        <div className="loader__overlay--up loader__overlay" />
        <div className="loader__overlay--down loader__overlay" />
        <div className="loader__name-box">
          <h1><span>Bartłomiej Wiejak</span></h1>
          <h2><span>Portfolio 2020</span></h2>
        </div>
        <div className="loader__loading">
          <div className="loader__loading-right" />
          <div className="loader__loading-left" />
          <div className="loader__loading-text">
            <span>
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </span>
          </div>
        </div>
        <div className="loader__copyright"><span>Copyright 2020 © Bartłomiej Wiejak</span></div>
      </div>
    )
  }
  return content;
}

export default Loader;