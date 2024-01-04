import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Signin() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className='navbar is-relative is-transparent py-3'>
            <div className='container'>
              <div className='navbar-brand'>
                <a className='navbar-item' href='#'>
                  <img
                    src='metis-assets/logos/metis/metis.svg'
                    alt=''
                    width='auto'
                    style={{ minHeight: 40 }}
                  />
                </a>
                <a
                  className='navbar-burger'
                  role='button'
                  type='button'
                  data-toggle='side-menu'
                  data-target='#sideMenu04'
                  aria-controls='sideMenu04'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span aria-hidden='true' />
                  <span aria-hidden='true' />
                  <span aria-hidden='true' />
                </a>
              </div>
              <div className='navbar-menu'>
                <div className='navbar-start is-centered-absolute'>
                  <a className='navbar-item' href='#'>
                    Product
                  </a>
                  <a className='navbar-item' href='#'>
                    Company
                  </a>
                  <a className='navbar-item' href='#'>
                    About Us
                  </a>
                  <a className='navbar-item' href='#'>
                    Features
                  </a>
                </div>
                <div className='navbar-end'>
                  <div className='navbar-item'>
                    <div className='buttons'>
                      <a className='button is-primary is-outlined' href='#'>
                        Log In
                      </a>
                      <a className='button is-primary' href='#'>
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div
            className='is-hidden navbar-side is-fixed'
            style={{
              top: 0,
              left: 0,
              bottom: 0,
              width: '80%',
              height: '100%',
              zIndex: 9999,
            }}
            id='sideMenu04'
          >
            <div
              className='navbar-backdrop is-fixed is-top is-right is-fullsize has-background-grey'
              style={{ opacity: '75%', zIndex: 50 }}
            />
            <nav
              className='navbar is-relative is-flex is-flex-direction-column pt-4 px-4'
              style={{
                width: '100%',
                height: '100%',
                zIndex: 50,
                overflowY: 'auto',
              }}
            >
              <div className='mb-5 navbar-brand is-flex is-justify-content-space-between'>
                <a className='navbar-item' href='#'>
                  <img
                    style={{ minHeight: 35 }}
                    src='metis-assets/logos/metis/metis.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <a className='navbar-item'>
                  <svg
                    className='image is-24x24'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </a>
              </div>
              <div>
                <nav className='navbar mb-5'>
                  <div className='is-fullwidth'>
                    <a className='navbar-item' href='#'>
                      Product
                    </a>
                    <a className='navbar-item' href='#'>
                      Company
                    </a>
                    <a className='navbar-item' href='#'>
                      About Us
                    </a>
                    <a className='navbar-item' href='#'>
                      Features
                    </a>
                  </div>
                </nav>
                <div className='mb-6 pt-5 has-border-top'>
                  <a
                    className='button is-block is-primary is-outlined mb-2'
                    href='#'
                  >
                    Log In
                  </a>
                  <a className='button is-block is-primary' href='#'>
                    Sign Up
                  </a>
                </div>
              </div>
              <div className='pl-4 pb-4 mt-auto'>
                <p className='mb-5 is-size-7'>
                  <span>Get in Touch</span>
                  <a href='#'>info@example.com</a>
                </p>
                <a href='#'>
                  <img src='metis-assets/icons/facebook-blue.svg' alt='' />
                </a>
                <a href='#'>
                  <img src='metis-assets/icons/twitter-blue.svg' alt='' />
                </a>
                <a href='#'>
                  <img src='metis-assets/icons/instagram-blue.svg' alt='' />
                </a>
              </div>
            </nav>
          </div>
        </section>
        <section className='section has-background-primary'>
          <div className='container'>
            <div className='is-max-w-md mx-auto'>
              <div className='mb-6 has-text-centered'>
                <a href='#'>
                  <img
                    src='metis-assets/logos/metis/metis-light.svg'
                    width={106}
                  />
                </a>
              </div>
              <div className='box has-text-centered py-6 px-5'>
                <span className='subtitle is-spaced'>Sign In</span>
                <h4 className='title is-size-3'>Join our community</h4>
                <div>
                  <div className='field'>
                    <div className='control has-icons-right'>
                      <input
                        className='input'
                        type='email'
                        placeholder='name@email.com'
                      />
                      <span className='icon is-small is-right'>
                        <svg
                          className='image is-24x24'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className='field'>
                    <div className='control has-icons-right'>
                      <input
                        className='input'
                        type='password'
                        placeholder='Enter your password'
                      />
                      <span className='icon is-small is-right'>
                        <svg
                          className='image is-24x24'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className='field mb-5'>
                    <div className='control'>
                      <button className='button is-primary is-fullwidth'>
                        Sign In
                      </button>
                    </div>
                  </div>
                  <p className='mb-5'>or continue with</p>
                  <button
                    className='mb-3 button is-dark is-outlined is-fullwidth'
                    href='#'
                  >
                    <img
                      className='mr-2'
                      src='metis-assets/logos/facebook-sign.svg'
                      alt=''
                    />
                    <span>Sign In with Facebook</span>
                  </button>
                  <button
                    className='button is-dark is-outlined is-fullwidth'
                    href='#'
                  >
                    <img
                      className='mr-2'
                      src='metis-assets/logos/google-sign.svg'
                      alt=''
                    />
                    <span>Sign In with Google</span>
                  </button>
                </div>
              </div>
              <div className='has-text-centered has-text-white'>
                <p>
                  <a className='has-text-grey-light' href='#'>
                    Police privacy
                  </a>{' '}
                  and{' '}
                  <a className='has-text-grey-light' href='#'>
                    Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns is-multiline is-justify-content-space-between'>
              <div className='column is-2'>
                <a href='#'>
                  <img
                    src='metis-assets/logos/metis/metis.svg'
                    alt=''
                    width={106}
                  />
                </a>
              </div>
              <div className='column is-3'>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo.
                </p>
              </div>
              <div className='column is-2 is-offset-1'>
                <h3 className='title is-size-5 is-spaced mb-3'>Office</h3>
                <p className='subtitle'>359 Hidden Valley Road, NY</p>
              </div>
              <div className='column is-2'>
                <h3 className='title is-size-5 is-spaced mb-3'>Contacts</h3>
                <p className='subtitle'>hello@gmail.com</p>
              </div>
            </div>
            <div className='mt-5 is-flex is-justify-content-space-between'>
              <p className='subtitle is-size-7'>© 2020. All rights reserved.</p>
              <div>
                <a href='#'>
                  <img src='metis-assets/icons/facebook-blue.svg' alt='' />
                </a>
                <a href='#'>
                  <img src='metis-assets/icons/twitter-blue.svg' alt='' />
                </a>
                <a href='#'>
                  <img src='metis-assets/icons/instagram-blue.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

