import { FormControl, TextField, Button } from "@material-ui/core";


function AddNote (props) {
    const { changePage } = props;

    const handleCancel = (event) => {
        event.preventDefault();
        changePage();
    }

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
                <Button type="button" color="secondary" 
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
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

export default AddNote;