import React, { Component } from 'react';
import { connect } from 'react-redux';

// INUTILE DANS LE PROJET (juste utilisé pour les tests)

class List extends Component {
  render() {

    const { activities, dispatch } = this.props;
    console.log(this.props)
    return (
      <div>
        <ul>
        {activities.map((item) => 
          <li>{item.first_name}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities
});
export default connect(mapStateToProps)(List);
