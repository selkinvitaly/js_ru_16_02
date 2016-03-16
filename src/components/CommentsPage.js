"use strict";

import React, { Component, PropTypes } from "react";

import { myCommentsStore } from "../stores";

class CommentsPage extends Component {

  constructor() {
    super();
    this.state = {
      limit: 10,
      loading: true
    };

    this._handleChange = () => {
      this.change();
    };
  }

  componentDidMount() {
    myCommentsStore.addChangeListener(this._handleChange);
  }

  componentWillUnmount() {
    myCommentsStore.removeChangeListener(this._handleChange);
  }

  change() {
    this.setState({
      loading: myCommentsStore.loading
    });
  }

  getComments() {
    let comments = myCommentsStore.getOrLoadByPage(this.props.params.page, this.state.limit);

    return this.state.loading
      ? <li>loading comments...</li>
      : comments.map(comment => <li key={comment.id}>{comment.user}: {comment.text}</li>);
  }

  generatePager(count) {
    let res = [];

    for (let i = 0; i < count; i++) {
      res.push(i);
    }

    return res;
  }

  getPageNav() {
    let total = myCommentsStore.total;

    if (total === null) {
      return <p>calculating...</p>;
    }

    let count = Math.ceil(total / this.state.limit);

    return this.generatePager(count);
  }

  render() {
    return (
      <ul>
        {this.getComments()}
      </ul>
      {this.getPageNav()}
    );
  }

}

export default CommentsPage;
