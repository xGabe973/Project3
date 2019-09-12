import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Store/action/index";

// import { Button, Icon } from "antd";
import NutritionList from "./nutritionList";
import Spinner from "../../component/UI/Spinner/Spinner";
import SearchBox from "../../component/UI/SearchBox";

class Workouts extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({ loading: false });
    this.props.initializeNutrition();
  }
  render() {
    let nutritionList = <Spinner />;
    if (!this.props.loading && !this.state.loading) {
      nutritionList = <NutritionList reciepeList={this.props.reciepeList} />;
    }

    return (
      <div className="Container-wrapper">
        <SearchBox />
        {nutritionList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.nutritionReducer.loading,
    reciepeList: state.nutritionReducer.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initializeNutrition: () => dispatch(actionCreator.initNutritionAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
