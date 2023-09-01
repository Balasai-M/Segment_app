import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./index.css";
import Button from "../Button";

export default function BasicModal(props) {
  const { open, handleClose, onSubmit, title, content } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="Main-dialog"
      >
        <DialogTitle
          zIndex={1}
          id="alert-dialog-title"
          style={{
            backgroundColor: "#fff",
            color: "#052955",
            fontSize: "24px",
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            height: "20px",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent className="modal-con">
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              padding: "10px",
            }}
          >
            <Button
              name={"Save the Segment"}
              boxShadow="0px 5px 10px 0px #00000040"
              bgColor="#052955"
              textColor="#fff"
              fontSize="18px"
              fontWeight="400"
              width="170px"
              height="40px"
              onClick={onSubmit}
            />
            <Button
              name="Cancel"
              boxShadow="0px 5px 10px 0px #00000040"
              textColor="#052955"
              fontSize="18px"
              fontWeight="500"
              width="170px"
              height="40px"
              onClick={handleClose}
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
