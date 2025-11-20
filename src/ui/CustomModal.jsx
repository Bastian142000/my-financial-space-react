import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "./Button/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  maxHeight: "90vh",
  borderRadius: "0.5rem",
  bgcolor: "background.paper",
  border: "1px solid #f6f6f6",
  boxShadow: 20,
  p: 3,
  overflowY: "auto",
};

function CustomModal({
  title,
  btnText,
  btnIcon,
  btnVariant,
  onClick,
  isPending,
  children,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Open modal */}
      <Button
        label={btnText}
        icon={btnIcon}
        variant={btnVariant}
        size="md"
        onClick={handleOpen}
      ></Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Title and Upper close button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
              fontWeight: "600",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <IconButton
              sx={{
                border: "1px solid #d1d0d1",
                borderRadius: "8px",
                padding: "8px",
                transition: "all 0.2s ease",
                ":hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "#a0a0a0",
                  transform: "scale(1.05)",
                },
                ":active": {
                  transform: "scale(0.95)",
                  backgroundColor: "#e8e8e8",
                },
              }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ fontSize: "20px", color: "#666" }} />
            </IconButton>
          </Box>

          {/* Content */}
          <div>
            {children}

            {/* Bottom buttons */}
            <div className="m-2 flex justify-center gap-5">
              <Button
                label={"Cancel"}
                variant="danger"
                size="md"
                onClick={handleClose}
              ></Button>

              <Button
                label={"Confirm"}
                variant="secondary"
                size="md"
                isLoading={isPending}
                disabled={isPending}
                onClick={async () => {
                  try {
                    await onClick();
                    handleClose();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              ></Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
