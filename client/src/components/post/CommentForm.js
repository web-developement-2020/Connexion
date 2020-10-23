import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../App.css';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className='row'>
        <div className='col-md-12 comment-form'>
          <form onSubmit={this.onSubmit}>
            <div className='input-group'>
              <div className='input-group-prepend valign'>
                <span className='input-group-text'>
                  <i className='fas fa-comment-dots'></i>
                </span>
              </div>
              <TextAreaFieldGroup
                className='form-control'
                aria-label='With textarea'
                placeholder='Add your comment!'
                name='text'
                value={this.state.text}
                onChange={this.onChange}
                error={errors.text}
              />
              <button type='submit' className='btn btn-secondary'>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addComment })(CommentForm);
