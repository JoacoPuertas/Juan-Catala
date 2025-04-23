import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';

const Work = () => {
    const images = [foto1, foto2, foto3]; // Importá tus imágenes

    return (
        <Gallery images={images} />
    );
};

export default Work;
