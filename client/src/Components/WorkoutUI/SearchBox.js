import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Store/action/index";

import { Tag, Input, Tooltip, Icon, Typography } from "antd";
const { Search } = Input;
const { Text } = Typography;
class SearchBoxComp extends React.Component {
  state = {
    tags: [" "],
    inputVisible: false,
    inputValue: "",
    searchQuery: ""
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);

    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };

  saveInputRef = input => (this.input = input);

  handleSearch = query => {
    const obj = {
      i: this.state.tags.join(","),
      q: query
    };
    this.props.onSubmitSearch(obj);
  };
  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div className="search-bar-wrapper">
        <h3>Search Your Favourite Recipe</h3>
        <div>
          <Search
            placeholder="Search Your Favorite Recipe"
            enterButton="Search"
            size="large"
            onSearch={this.handleSearch}
          />
        </div>
        <div>
          <div style={{ margin: "8px" }}>
            <Text type="warning">Add Ingredients by tag</Text>
          </div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag
                key={tag}
                closable={true}
                onClose={() => this.handleClose(tag)}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: "#fff", borderStyle: "dashed" }}
            >
              <Icon type="plus" /> New Tag
            </Tag>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitSearch: data => dispatch(actionCreator.initNutritionAsync(data))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBoxComp);
