import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from "@material-ui/core/Box";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShareLinkButton = ({ url }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Box textAlign="center">
        <Button className="button" variant="outlined" onClick={handleClick}>
          Copy image url link
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Image url has been saved to your clipboard!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ShareLinkButton;
