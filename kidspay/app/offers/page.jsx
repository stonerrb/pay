"use client";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import axios from "axios";
import { Modal, Fade } from "@mui/material";
import { motion } from "framer-motion";

function Page() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/get-offers").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="spacer2 layer1">
  <h1 className="font-bold text-4xl text-center col text-white">Offers</h1>
  <div className="flex flex-wrap justify-center items-center gap-7 max-w-screen-xl mx-auto">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleCardClick(item)}
          style={{ display: "inline-block", padding: "10px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Offer"
                ></img>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </motion.div>
      ))}
      <Modal
        open={!!selectedItem}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={!!selectedItem}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <div>
              <img src="https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Offer"></img>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "70%", // Add max-width
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h4"
                component="h2"
                gutterBottom
              >
                {selectedItem?.name}
              </Typography>
              <Typography
                id="modal-modal-description"
                variant="body1"
                gutterBottom
              >
                {selectedItem?.offer}
              </Typography>
              <Typography
                id="modal-modal-description"
                variant="body1"
                gutterBottom
              >
                {selectedItem?.description}
              </Typography>
              <hr />
              <h3 className="bold">Details</h3>
              <Typography
                id="modal-modal-description"
                variant="body1"
                gutterBottom
              >
                {selectedItem?.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </Typography>
              <Typography
                id="modal-modal-description"
                variant="body1"
                gutterBottom
              >
                {selectedItem?.expiration}
              </Typography>
            </div>
          </motion.div>
        </Fade>
      </Modal>
      </div>
    </div>
  );
}

export default Page;
