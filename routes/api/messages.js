const express = require("express");

const {
  messagesAll,
  messageById,
  messageAdd,
  messageDelete,
} = require("../../controllers/controlers");

const router = express.Router();

router.get("/", messagesAll);

router.get("/:messageId", messageById);

router.post("/", messageAdd);

router.delete("/:messageId", messageDelete);

module.exports = router;
