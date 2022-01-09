import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";

const ShareButton = ({ url }) => {
  const [open, setOpen] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleShareLinkClick = () => {
    navigator.clipboard.writeText(url);
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <IconButton onClick={handleShareLinkClick} aria-label="share">
        <ShareIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Image url has been saved to your clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default ShareButton;
