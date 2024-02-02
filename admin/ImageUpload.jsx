import React, { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../Firebase/firebase';
import '../../styles/imageupload.css'


const ImageUpload = ({ title, imagePath }) => {
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const uploadImage = async () => {
        if (!image) {
            console.error('No image selected.');
            return;
        }

        const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
        const randomString = Math.random().toString(36).substring(2, 8);
        const fileName = `${timestamp}_${randomString}_${image.name}`;

        const storageRef = ref(storage, `upload/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload progress: ${progress}%`);
            },
            (error) => {
                console.error('Error during upload:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setImageURL(url);
                    })
                    .catch((downloadError) => {
                        console.error('Error getting download URL:', downloadError);
                    });
            }
        );
    };

    // Return the JSX for the component
    return (
        <div className="box1">
            <div className="product-box-content">
                <h2>{title}</h2>
                <div style={{ backgroundImage: `url(${imageURL || imagePath})` }} className="product-box-image"></div>
                <input type="file" onChange={handleImageChange} />
                <button onClick={uploadImage} className="product-box-button1">Upload Image</button>
                <div className="button-container">
                    <a href="index2.html" className="product-box-button">
                        See more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;

