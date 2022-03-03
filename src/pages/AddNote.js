import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function AddNote (props) {


    return (
        <form>
            <FormControl fullWidth>
                <TextField label="Title" variant="outlined" 
                    margin="normal"/>
            </FormControl>
            <FormControl fullWidth>
                <TextField label="Text" variant="outlined"
                multiline rows={5} margin="normal" />
            </FormControl>
            <div>
                <Link to="/">
                    <Button type="button" color="secondary" >
                        Cancel
                    </Button>
                </Link>
                <Button type="reset" color="secondary" >
                    Reset
                </Button>
                <Button type="submit" color="primary" >
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default withRouter(AddNote);