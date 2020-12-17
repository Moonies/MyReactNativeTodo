import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../redux/store';

export const MainScreen = () => {
  return <div />;
};

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    data: state.todo,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
