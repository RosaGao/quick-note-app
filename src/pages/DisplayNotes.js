import Note from "../components/Note";
import { List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const styles = {
    fab: {
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
    }
};


function DiaplayNotes (props) {
    const { notes, deleteNote, changePage, classes } = props;

    return (
        <>
        <List>
            {notes.map((note, index)=>{
                return <Note note={note} key={index} deleteNote={deleteNote} />;
            })}
        </List>
        <Fab aria-label={"Add"} 
            className={classes.fab}
            onClick={changePage}
        >
            <Add />
        </Fab>
        </>
    );
}

export default withStyles(styles)(DiaplayNotes);


