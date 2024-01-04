import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function HttpCodes() {
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
        <section className='section'>
          <div className='container'>
            <div className='is-max-w-md mx-auto has-text-centered'>
              <img
                className='mb-5 is-fullwidth p-4'
                src='metis-assets/illustrations/error2.png'
                alt=''
              />
              <span className='title has-text-primary'>Whoops!</span>
              <h2 className='title is-spaced'>Something went wrong!</h2>
              <p className='subtitle'>
                Sorry, but we are unable to open this page.
              </p>
              <div className='buttons is-centered'>
                <a className='button is-primary' href='#'>
                  Go back to Homepage
                </a>
                <a className='button is-light' href='#'>
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='is-relative'>
            <div
              className='is-absolute is-hidden-touch column is-6-desktop is-right ml-auto has-background-white-bis'
              style={{ top: 0, bottom: 0 }}
            />
            <div className='section is-relative'>
              <div className='columns is-multiline'>
                <div className='column is-12 is-4-desktop is-offset-1-desktop'>
                  <div className='has-text-centered has-text-left-desktop'>
                    <a href='#'>
                      <img
                        className='mb-6'
                        src='metis-assets/logos/metis/metis.svg'
                        alt=''
                        width={106}
                      />
                    </a>
                    <div className='mb-6'>
                      <p className='subitlte mb-4'>
                        Subscribe and stay fully connected with product.
                      </p>
                      <div className='field is-grouped is-max-w-sm mx-auto'>
                        <div className='control is-expanded has-icons-left'>
                          <span className='icon is-left'>
                            <svg
                              className='image is-24x24'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                            </svg>
                          </span>
                          <input
                            className='input'
                            type='text'
                            placeholder='Type your e-mail'
                          />
                        </div>
                        <div className='control'>
                          <button className='button is-primary' type='submit'>
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='is-hidden-touch'>
                      <p className='subtitle'>© 2020. All rights reserved.</p>
                      <div>
                        <a href='#'>
                          <img
                            src='metis-assets/icons/facebook-blue.svg'
                            alt=''
                          />
                        </a>
                        <a href='#'>
                          <img
                            src='metis-assets/icons/twitter-blue.svg'
                            alt=''
                          />
                        </a>
                        <a href='#'>
                          <img
                            src='metis-assets/icons/instagram-blue.svg'
                            alt=''
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='py-6 column is-12 is-6-desktop is-offset-1-desktop has-background-white-bis'>
                  <div className='columns is-centered'>
                    <div className='column is-3 mb-3 has-text-centered-touch'>
                      <h5 className='title is-size-5 is-spaced mb-4'>Store</h5>
                      <ul className='is-size-5'>
                        <li>
                          <a className='subtitle' href='#'>
                            First Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Second Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Third Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Fourth Link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='column is-3 mb-3 has-text-centered-touch'>
                      <h5 className='title is-size-5 is-spaced mb-4'>About</h5>
                      <ul className='is-size-5'>
                        <li>
                          <a className='subtitle' href='#'>
                            First Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Second Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Third Link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='column is-3 mb-3 has-text-centered-touch'>
                      <h5 className='title is-size-5 is-spaced mb-4'>
                        Catalog
                      </h5>
                      <ul className='is-size-5'>
                        <li>
                          <a className='subtitle' href='#'>
                            First Link
                          </a>
                        </li>
                        <li>
                          <a className='subtitle' href='#'>
                            Second Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='is-hidden-desktop has-text-centered mt-6'>
                <p className='subtitle mb-4'>© 2020. All rights reserved.</p>
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
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

