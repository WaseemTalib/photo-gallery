import { useState, useEffect } from 'react';
import { firestorage, firestore, timestamp } from '../firebase/config';

const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = firestorage.ref(file.name);
        const collectionRef = firestore.collection('images');
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt })
            setUrl(url);
        })
    }, [file])
    return { progress, url, error };
};

export default UseStorage;