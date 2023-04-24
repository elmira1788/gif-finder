// import React, { useState, useRef } from 'react';
// import gifshot from 'gifshot';

// function GifEditor() {
//   const [images, setImages] = useState([]);
//   const [caption, setCaption] = useState('');

//   const handleAddImage = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setImages([...images, reader.result]);
//     };
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleSave = () => {
//     const gifOptions = {
//       images: images,
//       text: caption,
//       font_size: 24,
//       text_baseline: 'top',
//       text_align: 'center',
//       text_color: '#ffffff',
//       font_family: 'Arial',
//       sampleInterval: 10,
//       interval: 0.1,
//       numFrames: 30,
//       fontWeight: 'bold',
//       fontStretch: 'normal',
//       repeat: 0,
//       background: '#000000',
//       progressCallback: (progress) => console.log(progress),
//       completeCallback: (url) => {
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'my-gif.gif';
//         a.click();
//       },
//     };
//     gifshot.createGIF(gifOptions);
//     console.log('saved!')
//   };

//   return (
//     <div className='gif-editor'>
//       <input type="file" accept="image/*" onChange={handleAddImage} />
//       {images.length > 0 && (
//         <div>
//           <label htmlFor="caption">Caption:</label>
//           <input
//             type="text"
//             id="caption"
//             value={caption}
//             onChange={handleCaptionChange}
//           />
//           <img src={images[0]} alt="Preview" width='300px' height='300px'/>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GifEditor;


// import React, { useState } from "react";

// const GifEditor = () => {
//   const [image, setImage] = useState(null);
//   const [caption, setCaption] = useState("");
//   const [gifUrl, setGifUrl] = useState("");

//   const handleImageUpload = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const apiKey = "1FMtpVLnNTai96Ywi7u3011mcF65BAj2";
//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("api_key", apiKey);
//     // formData.append("tags", caption);


//     try {
//       const response = await fetch("/https://upload.giphy.com/v1/gifs" ,{
//         method: "POST",
       
//         body: formData,
      
//       });
//       console.log(response)

//       if (response.ok) {
//         const { data } = await response.json();
//         console.log(data)
//         const { url } = data.images.original;
//         setGifUrl(url);
//       }
//     } catch (error) {
//       console.error(error);
//     }

// const formData = new FormData();
// formData.append("api_key", "1FMtpVLnNTai96Ywi7u3011mcF65BAj2");
// formData.append("file", document.querySelector("input[type='file']").files[0])
// fetch("https://upload.giphy.com/v1/gifs", {
//   method: "POST",
//   body: formData,
// }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
//   };

//   return (
//     <div className="gif-editor">
//       <h1>Create GIF</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Image:
//           <input type="file" onChange={handleImageUpload} />
//         </label>
//         <br />
//         <label>
//           Caption:
//           <input type="text" value={caption} onChange={handleCaptionChange} />
//         </label>
//         <br />
//         <button type="submit">Create GIF</button>
//       </form>
//       {gifUrl && (
//         <div>
//           <h2>Generated GIF:</h2>
//           <img src={gifUrl} alt="Generated GIF" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default GifEditor;






