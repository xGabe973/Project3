import React from "react";
import { connect } from "react-redux";
import { Badge, Dropdown } from "flwww";
import { Icon, Typography } from "antd";
//import Drawer from "./drawer";
import * as actionCreator from "../../Store/action/index";

const { Text } = Typography;
const styleClearIcon = {
  color: "#e84f34",
  verticalAlign: "0.1em",
  border: "1px solid wheat",
  padding: "2px",
  marginLeft: "5px",
  fontSize: "larger",
  borderRadius: "1rem"
};


// Functional Component
const Favorites = props => {

 
 
  const maxCountFav = props.countFavWorkout <= 19;
  const badgeColor = {
    color: maxCountFav ? "#006eff" : "#fff",
    border: "2px solid ",
    borderColor: maxCountFav ? "#006eff" : "#e84f34",
    backgroundColor: maxCountFav ? "#fff" : "#e84f34",
    right: "-2px"
  };

  const workoutFavList = (
    <div>
      <span>
        <Text code>Workouts </Text>
        {props.countFavWorkout > 0 ? (
          <Icon
            type="delete"
            theme="twoTone"
            twoToneColor="#e84f34"
            style={styleClearIcon}
            onClick={props.onClearWorkout}
          />
        ) : null}
      </span>
      {props.selectedWorkouts.map((obj, index) => {
        return (
          <Text strong ellipsis={true} key={index}>
            {obj.title}
          </Text>
        );
      })}
    </div>
  );

  const nutritionFavList = (
    <div>
      <span>
        <Text code>Nutrition </Text>
        {props.countFavNutrition > 0 ? (
          <Icon
            type="delete"
            theme="twoTone"
            twoToneColor="#e84f34"
            style={styleClearIcon}
            onClick={props.onClearNutrition}
          />
        ) : null}
      </span>
      {props.selectedNutritions.map((obj, index) => {
        return (
          <Text strong key={index}>
            {obj.title}
          </Text>
        );
      })}
    </div>
  );

  return (
    <header className="App-header">
      
     
     <div>
        <Dropdown
          elementList={[workoutFavList, nutritionFavList]}
          position="bottom-right"
        >
          <Badge
            count={props.countFavWorkout + props.countFavNutrition}
            style={badgeColor}
          >
            <Icon type="heart" style={{ fontSize: "27px", color: "white" }} />
          </Badge>
        </Dropdown>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  const nutritionNamelist = state.nutritionReducer.selected.map(
    (obj, index) => {
      return { id: obj.id, title: obj.title };
    }
  );
  const workoutNamelist = state.workoutReducer.selected.map(obj => {
    return { id: obj.id, title: obj.Workout };
  });
  return {
    countFavWorkout: state.workoutReducer.selected.length,
    countFavNutrition: state.nutritionReducer.selected.length,
    selectedWorkouts: workoutNamelist,
    selectedNutritions: nutritionNamelist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearWorkout: () => dispatch(actionCreator.clearSelectedWorkouts()),
    onClearNutrition: () => dispatch(actionCreator.clearSelectedNutrition())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
