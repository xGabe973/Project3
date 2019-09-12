import React from "react";
import { connect } from "react-redux";
import { message } from "flwww";
import { Card, Icon, Tooltip } from "antd";

import * as actionCreator from "../Store/action/index";
// import workout_card from "../asset/workout_card.svg";
const workout_card = "https://media.giphy.com/media/7SrW2AY3m5CY8/giphy.gif";
const { Meta } = Card;

const Item = props => {
  const { title, description, id, selected } = props;
  const onSelected = () => {
    props.maxCountSelection
      ? message("You Selected Out Of 10.", "error")
      : props.onSelectedItem(id);
  };
  const onDeSelected = () => {
    props.onDeSelectedItem(id);
  };
  const actions = [];
  if (selected) {
    actions.push(
      <Icon
        style={{ margin: "0px", padding: "12px 0" }}
        type="check-circle"
        theme="twoTone"
        twoToneColor="#52c41a"
        onClick={onDeSelected}
      />
    );
  } else {
    actions.push(
      <Icon
        style={{ margin: "0px", padding: "12px 0" }}
        type="check"
        key="check-1"
        onClick={onSelected}
      />
    );
  }

  const titleWithToolTip = (
    <Tooltip title={title}>
      <span>{title}</span>
    </Tooltip>
  );
  const discWithToolTip = (
    <Tooltip title={description}>
      <span>{description}</span>
    </Tooltip>
  );
  const borderStyle = props.selected ? { borderColor: " #52c41a" } : null;
  return (
    <Card
      className="card-custom"
      style={borderStyle}
      hoverable={!props.selected}
      cover={<img alt="Shoulder-Shrugs" src={workout_card} />}
      actions={actions}
    >
      <Meta title={titleWithToolTip} description={discWithToolTip} />
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    maxCountSelection: state.workoutReducer.selected.length === 10
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectedItem: id => dispatch(actionCreator.selectedWorkout(id)),
    onDeSelectedItem: id => dispatch(actionCreator.deselectedWorkout(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
