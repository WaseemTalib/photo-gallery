import React, { useState } from 'react';
import Progress from './progress';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(''); 
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg).')
        }
    }

    return (
        <form>
            <label htmlFor="input">
            <input type="file" id="input" onChange={changeHandler} />
            <span>+</span>
            </label>
            <div className="output">
            {file && <Progress file={file} setFile={setFile} />}
            {error && <div className="error">{error}</div> }
            {file && <div>{file.name}</div> }
            </div>
        </form>
    );
};

export default UploadForm;