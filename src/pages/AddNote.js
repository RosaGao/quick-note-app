import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
    this.history = createBrowserHistory();
  }

  updateTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  updateText = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.history.back();
  };

  handleReset = event => {
    event.preventDefault();
    this.setState({
      text: "",
      title: ""
    });
  };

  render() {
    return (
      <form>
        <FormControl fullWidth>
          <TextField
            onChange={this.updateTitle}
            value={this.state.title}
            label="Title"
            variant="outlined"
            margin="normal"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            onChange={this.updateText}
            value={this.state.text}
            label="Text"
            variant="outlined"
            multiline
            rows={5}
            margin="normal"
          />
        </FormControl>
        <div>
          <Link to="/">
            <Button type="button" color="secondary">
              Cancel
            </Button>
          </Link>
          <Button onClick={this.handleReset} type="reset" color="secondary">
            Reset
          </Button>
          <Button onClick={this.handleSubmit} type="button" color="primary">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default AddNote;
