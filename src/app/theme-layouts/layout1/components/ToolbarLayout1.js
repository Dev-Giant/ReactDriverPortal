import { memo } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Hidden, Toolbar, Box, Link } from "@mui/material";
import ChatPanelToggleButton from "app/theme-layouts/shared-components/chatPanel/ChatPanelToggleButton";
import NavbarToggleButton from "app/theme-layouts/shared-components/NavbarToggleButton";
import UserMenu from "app/theme-layouts/shared-components/UserMenu";
import { selectToolbarTheme } from "app/store/fuse/settingsSlice";
import AdjustFontSize from "../../shared-components/AdjustFontSize";
import ColorSwitcher from "../../shared-components/ColorSwitcher";
import NotificationPanelToggleButton from "../../shared-components/notificationPanel/NotificationPanelToggleButton";

const pages = [
  "Trips",
  "Unit",
  "Paper Work",
  "History",
  "Home Request",
  "Chat",
  "Contacts",
];

function ToolbarLayout1(props) {
  const toolbarTheme = useSelector(selectToolbarTheme);
  const navbar = useSelector(({ fuse }) => fuse.navbar);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx("flex relative z-20 shadow-md", props.className)}
        color="default"
        sx={{ backgroundColor: toolbarTheme.palette.background.paper }}
        position="static"
      >
        <Toolbar className="p-0 min-h-48 md:min-h-64 w-full justify-between">
          <Box
            sx={{ display: { xs: "none", lg: "flex" }, flexGrow: 1 }}
            className="px-16 items-center"
          >
            <Link href="/" underline="none" role="button">
              <img
                src="assets/images/logo/logo.png"
                style={{ width: "120px", marginRight: "50px" }}
              />
            </Link>
          </Box>

          <Hidden lgUp>
            <ChatPanelToggleButton />
          </Hidden>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            <ColorSwitcher />

            <AdjustFontSize />

            <NotificationPanelToggleButton />

            <UserMenu />

            <>
              <Hidden lgDown>
                {!navbar.open && (
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                )}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
              </Hidden>
            </>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
