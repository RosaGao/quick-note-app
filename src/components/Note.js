import React, { Component } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
  Paper
} from "@material-ui/core";
import { Delete, Edit, ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { note, deleteNote } = this.props;

    return (
      <>
        <ListItem>
          <ListItemIcon onClick={this.handleClick}>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>

          <ListItemText primary={note.title}></ListItemText>

          <ListItemIcon>
            <Link
              to={{
                pathname: "/edit",
                search: `?id=${note.id}`,
                state: { title: note.title, text: note.text, id: note.id }
              }}
            >
              <Button>
                <Edit />
              </Button>
            </Link>
          </ListItemIcon>

          <ListItemIcon>
            <Button onClick={() => deleteNote(note)}>
              <Delete />
            </Button>
          </ListItemIcon>
        </ListItem>

        <Collapse
          in={this.state.open}
          timeout="auto"
          orientation="vertical"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemText
              secondary={
                <Box mx={4}>
                  <Paper elevation={4}>
                    <Box p={4}>
                      <ReactMarkdown
                        children={note.text}
                        remarkPlugins={[remarkGfm]}
                      />
                    </Box>
                  </Paper>
                </Box>
              }
            />
          </List>
        </Collapse>
      </>
    );
  }
}

export default Note;
