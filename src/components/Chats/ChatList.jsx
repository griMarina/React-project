import { List, ListItem, ListItemText, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import React from "react";
import { getId } from "../../utils";
import { getCounter } from "../../utils.js";
import "./ChatList.css";

const counter = getCounter();

export const ChatList = ({ chats, chatId, setChats }) => {
  const theme = useTheme();

  const addChat = () => {
    const id = getId();
    setChats({
      ...chats,
      [id]: {
        name: `Chat ${counter()}`,
        messages: [],
      },
    });
  };

  const deleteChat = (id) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      delete newChats[id];
      return newChats;
    });
  };

  return (
    <List className="chat-list" style={{ padding: 20 }}>
      {Object.keys(chats).map((id) => {
        return (
          <React.Fragment key={id}>
            <ListItem className="chat">
              <Link to={`/chats/${id}`}>
                <ListItemText
                  style={{ color: id === chatId ? "white" : "grey" }}
                  primary={chats[id].name}
                />
              </Link>
              <IconButton aria-label="delete" onClick={() => deleteChat(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </React.Fragment>
        );
      })}
      <IconButton aria-label="add" onClick={addChat}>
        <AddIcon />
      </IconButton>
    </List>
  );
};
