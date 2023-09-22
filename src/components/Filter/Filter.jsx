import React, { Component } from 'react';
import styles from './Filte.module.css';

class Filter extends Component {
  render() {
    const { value, filterByName } = this.props;
    return (
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={filterByName}
        />
      </label>
    );
  }
}
export default Filter;
