import React, { Component } from "react";
import { Container } from "@material-ui/core";
import DiaplayNotes from "./pages/DisplayNotes";
import UpsertNote from "./pages/UpsertNote";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  // retrive data from localStorage if it exists
  componentDidMount() {
    const notes = window.localStorage.getItem("notes");
    this.setState({
      notes: notes ? JSON.parse(notes) : []
    });
  }

  // homepage
  deleteNote = note => {
    this.setState(curState => {
      return {
        notes: curState.notes.filter(item => item.id !== note.id)
      };
    }, this.saveNodes);
  };

  //upsertNote
  addNote = note => {
    this.setState(curState => {
      return {
        notes: [...curState.notes, Object.assign(note, { id: uuidv4() })]
      };
    }, this.saveNodes);
  };

  //upsertNote
  editNote = note => {
    this.setState(curState => {
      return {
        notes: curState.notes.map(item => (item.id === note.id ? note : item))
      };
    }, this.saveNodes);
  };

  saveNodes = () => {
    window.localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  render() {
    const { notes } = this.state;

    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <DiaplayNotes notes={notes} deleteNote={this.deleteNote} />
          </Route>

          <Route path="/edit">
            <UpsertNote upsertNote={this.editNote} />
          </Route>

          <Route path="/add">
            <UpsertNote upsertNote={this.addNote} />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
