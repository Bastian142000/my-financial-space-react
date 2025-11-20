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
  borderRadius: "2rem",
  bgcolor: "background.paper",
  border: "1px solid #f6f6f6",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

function CustomModal({
  title,
  btnText,
  btnIcon,
  btnVariant,
  onClick,
  isPending,
  modalBorderColor,
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
          {/* Title and upper close button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Content */}
          <div className={`rounded-2xl border ${modalBorderColor}`}>
            {children}

            {/* Bottom buttons */}
            <div className="mb-5 flex justify-center gap-5">
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
