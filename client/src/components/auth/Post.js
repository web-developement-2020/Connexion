import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='container'>
          <div className='row'>
            {/* card  */}
            <div className='card card-body mb-3'>
              <div className='row'>
                <div className='col-md-2 profile-content'>
                  <Link to='profile.html'>
                    <img
                      className='profile-img rounded-circle d-none d-md-block'
                      src='https:\/\/0.gravatar.com\/avatar\/b258c6a54d33a27183639ac972107a12=150'
                      alt=''
                    />
                  </Link>
                </div>
                <div className='col-md-10'>
                  <h2 align='right' class="header">
                    <i class='fas fa-photo-video'></i> Post
                  </h2>
                  <h6 className='card-title'>Michael Dam</h6>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
              <div className='row followers-following'>
                <div className='col-md-2'></div>
                <div className='col-md-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-people-fill'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'
                    />
                  </svg>
                  <small> followers: 40</small>
                </div>
                <div className='col-md-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-people'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
                    />
                  </svg>
                  <small> following: 100</small>
                </div>
                <div className='col-md-4'></div>
              </div>
              <div className='container'>
                <div className='row justify-content-center post-img-card'>
                  <div className='col-8 post-img' align='center'>
                    <img
                      id='post'
                      crossorigin
                      src='http://res.cloudinary.com/socialconnexion/image/upload/v1601126395/nwcxvn5xqw1ai5bgzaej.jpg'
                      className='card-img-bottom'
                      alt='...'
                    />

                    <p>
                      <svg
                        width='1.3em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-suit-heart'
                        fill='red'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z'
                        />
                      </svg>{' '}
                      <small>3447 likes</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 comment-form'>
                  <form>
                    <div className='input-group'>
                      <div className='input-group-prepend valign'>
                        <span className='input-group-text'>
                          <svg
                            width='1em'
                            height='1em'
                            viewBox='0 0 16 16'
                            className='bi bi-chat-text'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z'
                            />
                            <path
                              fill-rule='evenodd'
                              d='M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z'
                            />
                          </svg>
                        </span>
                      </div>
                      <textarea
                        className='form-control'
                        aria-label='With textarea'
                        Placeholder='Add your comment!'
                      ></textarea>
                      <button type='submit' className='btn btn-secondary'>
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='row'>
                {/* View Comments */}
                <div className='col-md-12'>
                  <div className='accordion' id='accordionExample'>
                    <div className='card'>
                      <div className='card-header' id='headingOne'>
                        <h2 className='mb-0'>
                          <button
                            className='btn btn-link btn-block text-left'
                            data-toggle='collapse'
                            data-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            View comments
                          </button>
                        </h2>
                      </div>
                      <div
                        id='collapseOne'
                        className='collapse show comment-body'
                        aria-labelledby='headingOne'
                        data-parent='#accordionExample'
                      >
                        <div className='row'>
                          <div className='col-md-1 comment'>
                            <Link to='profile.html'>
                              <img
                                id='profile-mini'
                                className='rounded-circle d-none d-md-block'
                                src='https://www.gravatar.com/avatar/anything?s=50&d=mm'
                                alt=''
                              />
                            </Link>
                          </div>
                          <div className='col-md-11'>
                            <div className='comment-text'>
                              {' '}
                              <p className='card-text'>
                                <small>
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </small>
                              </p>
                              <hr />
                            </div>
                          </div>

                          <div className='col-md-1 comment'>
                            <Link to='profile.html'>
                              <img
                                id='profile-mini'
                                className='rounded-circle d-none d-md-block'
                                src='https://www.gravatar.com/avatar/anything?s=50&d=mm'
                                alt=''
                              />
                            </Link>
                          </div>
                          <div className='col-md-11'>
                            <div className='comment-text'>
                              {' '}
                              <p className='card-text'>
                                <small>
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </small>
                              </p>
                              <p className='card-text'>
                                <small>
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </small>{' '}
                                <svg
                                  width='1em'
                                  height='1em'
                                  viewBox='0 0 16 16'
                                  className='bi bi-emoji-smile'
                                  fill='currentColor'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                                  />
                                  <path
                                    fill-rule='evenodd'
                                    d='M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z'
                                  />
                                  <path d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z' />
                                </svg>
                              </p>
                              <hr />
                            </div>
                          </div>
                          <div className='col-md-1 comment'>
                            <Link to='profile.html'>
                              <img
                                id='profile-mini'
                                className='rounded-circle d-none d-md-block'
                                src='https://www.gravatar.com/avatar/anything?s=50&d=mm'
                                alt=''
                              />
                            </Link>
                          </div>
                          <div className='col-md-11'>
                            <div className='comment-text'>
                              {' '}
                              <p className='card-text'>
                                <small>
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </small>
                              </p>
                              <p className='card-text'>
                                <small>
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </small>
                                <svg
                                  width='1em'
                                  height='1em'
                                  viewBox='0 0 16 16'
                                  className='bi bi-heart-fill'
                                  fill='red'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
