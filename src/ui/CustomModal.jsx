import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

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

export default function CustomModal({
  btnText,
  title,
  onClick,
  status,
  modalBorderColor,
  btnWidth,
  btnBorderColor,
  btnTextColor,
  btnHoverBgColor,
  btnHoverTextColor,
  children,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* Open modal */}
      <Button
        width={btnWidth}
        borderColor={btnBorderColor}
        textColor={btnTextColor}
        hoverBgColor={btnHoverBgColor}
        hoverTextColor={btnHoverTextColor}
        onClick={handleOpen}
      >
        {btnText}
      </Button>

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
                width={"w-20"}
                borderColor={"border-red-600"}
                textColor={"text-red-500"}
                hoverBgColor={"hover:bg-red-600"}
                hoverTextColor={"hover:text-white"}
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                width={"w-20"}
                borderColor={"border-green-600"}
                textColor={"text-green-500"}
                hoverBgColor={"hover:bg-green-600"}
                hoverTextColor={"hover:text-white"}
                disabled={status === "loading"}
                onClick={async () => {
                  try {
                    await onClick();
                    handleClose();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {status === "loading" ? "Loading..." : "Confirm"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
