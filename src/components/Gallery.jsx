import React from 'react';
import './Gallery.css'; // Asegurate de crear este archivo

const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
