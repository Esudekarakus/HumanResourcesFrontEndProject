import React, { useState } from "react";

function Image({ imageUrl, onImageChange }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onImageChange(selectedFile);
  };

  return (
    <div className="Image">
      <h2>Resim Ekleyiniz:</h2>
      <input type="file" onChange={handleChange} />
      {imageUrl && <img src={imageUrl} alt="uploaded" />}
    </div>
  );
}

export default Image;
