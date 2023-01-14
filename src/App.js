import React, { useState } from "react";
import "./App.css";

function App() {
  const [video, setVideo] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.secure_url);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />

      <video src={video} controls />
    </div>
  );
}

export default App;
