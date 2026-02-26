import { cloneElement } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return children
      ? cloneElement(children, {
          elevation: trigger ? 4 : 0,
        })
      : null;
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              وبسابت شخصی
            </Typography>
            <Button variant="contained" color="secondary">click</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
