const { HttpError, ctrlWrapper } = require("../service");
const {
  getAllnotes,
  getNote,
  createNote,
  deleteMessage,
} = require("../database");

const messagesAll = async (req, res) => {
  const messages = await getAllnotes();
  res.status(200).json(messages);
};

const messageById = async (req, res) => {
  const { messageId } = req.params;
  const result = await getNote(messageId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const messageAdd = async (req, res) => {
  const { name, email, message } = req.body;
  const result = await createNote(name, email, message);
  res.status(201).json(result);
};

const messageDelete = async (req, res) => {
  const { messageId } = req.params;

  const result = await deleteMessage(messageId);

  if (result.affectedRows === 0) {
    throw HttpError(404, "Message not found");
  }

  res.json({ message: "contact deleted" });
};

module.exports = {
  messagesAll: ctrlWrapper(messagesAll),
  messageById: ctrlWrapper(messageById),
  messageAdd: ctrlWrapper(messageAdd),
  messageDelete: ctrlWrapper(messageDelete),
};
