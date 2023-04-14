import React, { useState } from "react";

const PhotoUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const response = await fetch("https://foster-birthday-backend.onrender.com/photo", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data); // Log the response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PhotoUploader;