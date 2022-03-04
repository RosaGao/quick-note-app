import React, { Component } from "react";
import { FormControl, TextField, Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const styles = {
  form: {
    marginTop: "2rem",
    marginBottom: "1rem",
    padding: "1rem"
  },
  paper: {
    marginBottom: "1rem"
  }
};

class UpsertNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      const { id, title, text } = state;
      this.setState({
        id,
        title,
        text
      });
    }
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
    this.props.upsertNote(this.state);
    this.props.history.push("/");
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
      <form style={styles.form}>
        <Paper elevation={3} style={styles.paper}>
          <FormControl fullWidth>
            <TextField
              onChange={this.updateTitle}
              value={this.state.title}
              label="Title"
              variant="outlined"
            />
          </FormControl>
        </Paper>

        <Paper elevation={3} style={styles.paper}>
          <FormControl fullWidth>
            <TextField
              onChange={this.updateText}
              value={this.state.text}
              label="Text"
              variant="outlined"
              multiline
              rows={6}
            />
          </FormControl>
        </Paper>

        <div>
          <Link to="/">
            <Button type="return" color="secondary">
              Return
            </Button>
          </Link>

          <Button onClick={this.handleReset} type="reset" color="secondary">
            Reset
          </Button>

          <Button onClick={this.handleSubmit} type="submit" color="primary">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(UpsertNote);
