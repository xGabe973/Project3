import React from "react";
import { connect } from "react-redux";
import { message } from "flwww";
import { List, Avatar, Icon } from "antd";
import defaultThumbnail from "../asset/thumbail_nutrition.svg";
import * as actionCreator from "../Store/action/index";

const NutritionList = props => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.recipeList}
      renderItem={item => {
        const { id, title, href, ingredients, thumbnail } = item;
        const foundSelected = props.selectedNutrition.find(obj => {
          return obj.id === id;
        });
        const checkSelected = foundSelected ? true : false;
        const onSelected = () => {
          props.maxCountSelection
            ? message("You Selected Out Of 10.", "error")
            : props.onSelectedItem(id);
        };
        const onDeSelected = () => {
          props.onDeSelectedItem(id);
        };

        const actions = [];
        if (checkSelected) {
          actions.push(
            <Icon
              style={{ fontSize: "40px", margin: "0", padding: "22px 0", backgroundColor: 'white' }}
              type="check-circle"
              theme="twoTone"
              twoToneColor="#52c41a"
              onClick={onDeSelected}
            />
          );
        } else {
          actions.push(
            <Icon
              style={{ fontSize: "30px", margin: "0", padding: "22px 0", backgroundColor: 'white' }}
              type="check"
              key="check-1"
              onClick={onSelected}
            />
          );
        }
        return (
          <List.Item actions={actions}>
            <List.Item.Meta
              avatar={
                <Avatar
                  shape="square"
                  size={150}
                  src={thumbnail.length > 0 ? thumbnail : defaultThumbnail}
                />
              }
              title={
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "30px", backgroundColor: "white", color: "#1890ff" }}
                >
                  {title.trim()}
                </a>
              }
              description={ingredients.trim()}
            />
          </List.Item>
        );
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    selectedNutrition: state.nutritionReducer.selected,
    maxCountSelection: state.nutritionReducer.selected.length === 10
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSelectedItem: id => dispatch(actionCreator.selectedNutrition(id)),
    onDeSelectedItem: id => dispatch(actionCreator.deselectedNutrition(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NutritionList);
