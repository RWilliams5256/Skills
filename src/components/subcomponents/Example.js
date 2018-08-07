import Autosuggest from 'react-autosuggest';
import React from 'react'
import helpers from '../../utils/helpers';
import './Example.css';
// Imagine you have a list of lists that you'd like to autosuggest.
var lists = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  console.log("getsuggestions lists is array: ", Array.isArray(lists));
  console.log("lists: ", lists);
  console.log("lists at 0: ", lists[0]);
  return inputLength === 0 ? [] : lists.filter(word =>
    word.searchItem.toLowerCase().search(inputValue) !== -1
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <span>
    {suggestion.listName} > {suggestion.subGroup} > <strong>{suggestion.name}</strong>
  </span>
);

class searchLists extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };


  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    helpers.dbCallforAllOptions();
    lists = JSON.parse(sessionStorage.getItem('allItems'))
    const { value, suggestions } = this.state;
    console.log("render lists is array : ",Array.isArray(lists));
    console.log("skills: ", lists)
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a Skill',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
} export default searchLists;