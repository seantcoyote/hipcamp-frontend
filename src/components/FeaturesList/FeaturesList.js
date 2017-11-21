import React, {Component} from 'react';
import {object, array} from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class FeaturesList  extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  getListItems (features) {
    // Inline styles work better (than classNames) for overriding material-ui defaults
    const itemTitle = {color: '#777', letterSpacing: 1}
    const itemPresentTitle = {...itemTitle}
    const itemAbsentTitle = {
      ...itemTitle,
      textDecoration: 'line-through',
      opacity: 0.3
    }
    const checkIcon = <FontIcon
      className="fa fa-check-circle-o fa-lg"
      aria-hidden="true"
      style={{color: '#3cc69e'}}
    />
    const xIcon = <FontIcon
      className="fa fa-times-circle-o fa-lg"
      aria-hidden="true"
      style={{opacity: 0.3}}
    />

    return features.map((feature) => (
      <ListItem
        key={feature.title}
        onNestedListToggle={this.handleToggle}
        nestedItems={feature.subfeatures && this.getListItems(feature.subfeatures, this.handleToggle)}
        leftIcon={feature.presence ? checkIcon : xIcon}
        primaryTogglesNestedList={true}
        hoverColor="transparent"
        disabled={!feature.subfeatures.length > 0}
      >
        <span style={feature.presence ? itemPresentTitle : itemAbsentTitle}>{feature.title}</span>
      </ListItem>
    ));
  }

  handleToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render () {
    return (
      <MuiThemeProvider>
        <List style={this.props.style}>
          {this.props.features && this.getListItems(this.props.features)}
        </List>
      </MuiThemeProvider>
    )
  }
}

FeaturesList.propTypes = {
  features: array,
  style: object
}

export default FeaturesList
