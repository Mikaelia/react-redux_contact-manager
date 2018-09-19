import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    // this is made accessible to Contacts via connector. Once called,
    // this will pull contacts from state into props
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// The main idea of mapStateToProps() is to isolate
// which parts of the overall state this component needs as its props.
const mapStateToProps = state => ({
  // recieves entire redux store as argument
  // assigning to contacts prop (this.props.contacts)
  // now Contacts can pull contacts from the state
  // returns object with one key: contacts.
  // allows for specific piece of state to be passed as prop to Contacts
  //anytime store updated, mapStateToProps will be called

  contacts: state.contact.contacts
  //contacts at the end there is inital state of contact reducer
});

// putting into prop in Contacts component

// getContacts (used instead of mapDispatchToProps) will return an object
// instead of passing 'getContacts' as a key, returning the value, which is still the function
// which calls the dispatch itself. getContacts calls the dispatch function with proper params
// retrieved from API

// the connected component is finally exported, provides these props to Contacts
// if don't want to subscribe to state changes, pass {} instead of mapStateToProps

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
