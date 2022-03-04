import React, { Component } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button
} from "@material-ui/core";
import { Delete, Edit, ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
    const { note, upsertNote } = this.props;
    const { open } = this.state;

    return (
      <>
        <ListItem>
          <ListItemIcon onClick={this.handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
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
            <Button onClick={() => upsertNote(note)}>
              <Delete />
            </Button>
          </ListItemIcon>
        </ListItem>

        <Collapse in={open} timeout="auto" orientation="vertical" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText secondary={note.text} />
          </List>
        </Collapse>
      </>
    );
  }
}

export default Note;
