import React from "react";
import Note from "../components/Note";
import { List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";

const styles = {
  fab: {
    position: "absolute",
    bottom: "2rem",
    right: "2rem"
  }
};

function DiaplayNotes(props) {
  const { notes, deleteNote, classes } = props;

  return (
    <>
      <List>
        {notes.map((note, index) => {
          return <Note note={note} key={index} deleteNote={deleteNote} />;
        })}
      </List>
      <Link to="/add">
        <Fab aria-label={"Add"} className={classes.fab}>
          <Add />
        </Fab>
      </Link>
    </>
  );
}

export default withStyles(styles)(DiaplayNotes);
