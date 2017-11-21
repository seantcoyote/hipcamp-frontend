import React, {Component} from 'react';
import {object, array} from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class FeaturesList  extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
  }

  getListItems (features) {
    const itemPresentTitle = {color: '#777'}
    const itemAbsentTitle = {
      color: '#777',
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
        nestedItems={feature.subfeatures.length > 0 && this.getListItems(feature.subfeatures, this.handleToggle)}
        leftIcon={feature.presence ? checkIcon : xIcon}
        primaryTogglesNestedList={true}
        hoverColor={{color: 'transparent'}}
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
      <List style={this.props.style}>
        {this.getListItems(this.props.features)}
      </List>
    )
  }
}

FeaturesList.propTypes = {
  features: array.isRequired,
  style: object
}

export default FeaturesList
