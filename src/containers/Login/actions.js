import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  CHANGE_VALUE,
  SET_VALID,
  SET_INVALID,
  VALIDATE,
  SUBMITTED,
  SUBMITTING,
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE, CLEAR_FORM,
} from './constants';

export const getAPIData = () => ({
  type: GET_API_DATA,
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data,
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error,
});
export const changeValue = (field, value) => ({
  type: CHANGE_VALUE,
  field,
  value,
});
// Validate an individual field given a specific validation
export const validate = (field, validation) => ({
  type: VALIDATE,
  field,
  validation,
});

// Mark a field as invalid with a specific error message
export const setInvalid = (field, error) => ({
  type: SET_INVALID,
  field,
  error,
});

// Mark the field as invalid with the error message to be removed
export const setValid = (field, error) => ({
  type: SET_VALID,
  field,
  error,
});

// Submit the form
// We'll supply all of the validations for the form as well as a handler
// to call after the form has been validated
export const submit = (validations, handler) => ({
  type: SUBMIT,
  validations,
  handler,
});

// Mark the form as submitting for display indication
export const setSubmitting = () => ({
  type: SUBMITTING,
});

// Mark the form as submitted for display indication
export const setSubmitted = (values, handler) => ({
  type: SUBMITTED,
  values,
  handler,
});

// Mark the form submitting success
export const submitSuccess = (auth) => ({
  type: SUBMIT_SUCCESS,
  auth,
});

// Mark the form submitting failure
export const submitError = (err) => ({
  type: SUBMIT_FAILURE,
  err,
});

export const clearFormFields = () => ({
  type: CLEAR_FORM,
});
