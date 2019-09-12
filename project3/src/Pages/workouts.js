import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../Store/action/index";

import { Button, Icon } from "antd";
import WorkoutCard from "./workoutCard";
import Spinner from "../Components/WorkoutUI/Spinner/Spinner";

class Workouts extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({ loading: false });
    this.props.initializeWorkouts();
  }
  render() {
    const { workouts, selecedWorkouts } = this.props;
    let workoutList = <Spinner />;

    if (!this.props.loading && !this.state.loading && workouts) {
      // WORKOUT-List: array of ReactNode single workout
      workoutList = workouts.map((obj, index) => {
        const { id, Workout } = obj;
        const Reps_x_Sets = obj["Reps-x-Sets"];
        const foundSelected = selecedWorkouts.find(obj => obj.id === id);
        const checkSelected = foundSelected ? true : false;
        return (
          <WorkoutCard
            key={id}
            title={Workout}
            description={Reps_x_Sets}
            id={id}
            selected={checkSelected}
          />
        );
      });
    }

    return (
      <div className="Container-wrapper">
        <div className="Container">{workoutList}</div>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => this.props.history.push("/nutrition")}
        >
          Nutrition
          <Icon type="swap-right" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workoutReducer.data,
    selecedWorkouts: state.workoutReducer.selected,
    loaded: state.workoutReducer.loaded,
    loading: state.workoutReducer.loading,
    error: state.workoutReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initializeWorkouts: () => dispatch(actionCreator.initWorkoutAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
