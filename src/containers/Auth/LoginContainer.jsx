import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '@components/Auth';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { login } from './store/actions';
import { loginLoading } from './store/selectors';
import {
  EMAIL_NOT_VALID,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN,
} from './store/constants';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(EMAIL_NOT_VALID)
    .required(EMAIL_REQUIRED),
  password: Yup.string()
    .min(6, PASSWORD_MIN)
    .required(PASSWORD_REQUIRED),
});

class LoginContainer extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login({
      ...values,
    });
  };

  render() {
    const { loginLoading } = this.props;
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          this.handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Login
            loading={loginLoading || isSubmitting}
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
          />
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login.request(payload)),
});

const mapStateToProps = createStructuredSelector({
  loginLoading: loginLoading(),
});
LoginContainer.propTypes = {
  login: PropTypes.func,
  loginLoading: PropTypes.bool,
};

LoginContainer.defaultProps = {
  login: () => {},
  loginLoading: false,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
