import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { changeFuseTheme } from "app/store/fuse/settingsSlice";
import themesConfig from "app/configs/themesConfig";

const ColorSwitcher = () => {
  const [currentColor, setCurrentColor] = useState("Light");
  const dispatch = useDispatch();
  const settings = useSelector(({ fuse }) => fuse.settings.current);

  function handleSchemeSelect() {
    let themeId;
    if (currentColor === "Light") {
      setCurrentColor("Dark");
      dispatch(changeFuseTheme(themesConfig.greyDark));
    } else {
      setCurrentColor("Light");
      dispatch(changeFuseTheme(themesConfig.legacy));
    }
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label={currentColor}
        onClick={handleSchemeSelect}
      />
    </FormGroup>
  );
};

export default ColorSwitcher;
