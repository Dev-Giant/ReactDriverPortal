import { useState, useEffect } from "react";
import { Grid, CardMedia, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ImageSelect = ({ initialValue, indexedValue }) => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(initialValue);

  useEffect(() => {
    if (!image) return;
    setImageURL(URL.createObjectURL(image));
  }, [image]);

  function onImageChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <Grid item md={6} className="relative" sx={{ margin: "0 auto" }}>
      <label
        htmlFor={`icon-button-file${indexedValue}`}
        className="absolute top-16"
      >
        <input
          accept="image/*"
          id={`icon-button-file${indexedValue}`}
          type="file"
          className="hidden"
          onChange={onImageChange}
        />
        <IconButton
          sx={{ color: "white" }}
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <CardMedia
        sx={{ height: "240px", width: "100%" }}
        component="img"
        image={imageURL}
        alt="green iguana"
      />
    </Grid>
  );
};

export default ImageSelect;
