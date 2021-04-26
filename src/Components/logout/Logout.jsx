import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userActions } from '~/state/user/user.actions';
import history from "~/util/history";
import RoundSpinner from "../shared/RoundSpinner";

const LogoutPage = (props) => {

    useEffect(() => {
        props.dispatch(userActions.logout());
        history.push('/');
    })

    return (
        <div>
            <RoundSpinner />
        </div>
    );

}

export default connect()(LogoutPage);