import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

class List extends Component {
  static propTypes = {
    fetchList: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    const { fetchList } = this.props;

    fetchList();
  }

  renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.title}>
        {`${parseInt(index, 10) + 1}.${item.title}`}
      </Text>
      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
  )

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
        <FlatList
          ref={(c) => { this.listRef = c; }}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default List;
