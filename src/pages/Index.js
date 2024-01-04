import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='is-background-contain is-background-no-repeat'
          style={{
            backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")',
            backgroundPosition: 'top',
          }}
        >
          <nav
            className='navbar is-relative is-transparent py-3'
            aria-label='main navigation'
          >
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
                  data-target='#sideMenuHeaders04'
                  aria-controls='sideMenuHeaders04'
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
          <div className='section'>
            <div className='container'>
              <div className='is-max-w-lg mx-auto has-text-centered mb-6'>
                <h2 className='title is-spaced'>
                  <span>The quick</span>
                  <span className='has-text-primary'>brown fox</span>
                  <span>jumps over the lazy dog.</span>
                </h2>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
                <div className='buttons is-centered'>
                  <a className='button is-primary' href='#'>
                    Check Now
                  </a>
                  <a className='button is-dark is-outlined' href='#'>
                    Documentation
                  </a>
                </div>
              </div>
              <div className='is-relative is-max-w-3xl mx-auto mb-6'>
                <img src='metis-assets/elements/pattern-small.png' alt='' />
                <div
                  style={{
                    position: 'absolute',
                    top: '3%',
                    left: '9%',
                    width: '82%',
                    height: '90%',
                  }}
                >
                  <img
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                    src='metis-assets/elements/app-mockup.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='columns is-multiline mb-5'>
                <div className='column is-6 is-3-desktop'>
                  <div className='is-flex'>
                    <div className='mr-4 has-background-light p-5 is-radius'>
                      <svg
                        className='image is-32x32 has-text-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <span className='is-size-4 has-text-weight-bold'>
                        250 324
                      </span>
                      <p className='subtitle'>Followers</p>
                    </div>
                  </div>
                </div>
                <div className='column is-6 is-3-desktop'>
                  <div className='is-flex'>
                    <div className='mr-4 has-background-light p-5 is-radius'>
                      <svg
                        className='image is-32x32 has-text-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                        />
                      </svg>
                    </div>
                    <div>
                      <span className='is-size-4 has-text-weight-bold'>
                        6 510
                      </span>
                      <p className='subtitle'>Solved Problems</p>
                    </div>
                  </div>
                </div>
                <div className='column is-6 is-3-desktop'>
                  <div className='is-flex'>
                    <div className='mr-4 has-background-light p-5 is-radius'>
                      <svg
                        className='image is-32x32 has-text-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                        />
                      </svg>
                    </div>
                    <div>
                      <span className='is-size-4 has-text-weight-bold'>
                        14 350
                      </span>
                      <p className='subtitle'>Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className='column is-6 is-3-desktop'>
                  <div className='is-flex'>
                    <div className='mr-4 has-background-light p-5 is-radius'>
                      <svg
                        className='image is-32x32 has-text-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <div>
                      <span className='is-size-4 has-text-weight-bold'>
                        149 324
                      </span>
                      <p className='subtitle'>Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            id='sideMenuHeaders04'
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
                <a
                  className='navbar-item'
                  data-toggle='side-menu'
                  data-target='#sideMenuHeaders04'
                  aria-controls='sideMenuHeaders04'
                  aria-label='Close'
                >
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
            <div className='is-max-w-lg mx-auto mb-6 has-text-centered'>
              <h2 className='title is-spaced'>
                Lorem ipsum dolor sit amet consectutar domor
              </h2>
              <p className='subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div className='columns is-multiline'>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/advertisement.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Weekly Sales</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 mx-auto image is-96x96'
                  src='metis-assets/icons/set2/analytics.png'
                  alt=''
                />
                <h3 className='title is-size-5'>General Analytics</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/hourglass.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Saving your time</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/calculation.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Calculations</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/card-payment.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Fast payments</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/podcast.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Daily podcasts</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/online-shopping.png'
                  alt=''
                />
                <h3 className='title is-size-5'>E-commerce</h3>
              </div>
              <div className='mb-6 column is-6-tablet is-3-desktop has-text-centered'>
                <img
                  className='mb-4 image mx-auto is-96x96'
                  src='metis-assets/icons/set2/video-web.png'
                  alt=''
                />
                <h3 className='title is-size-5'>Advertisement</h3>
              </div>
            </div>
          </div>
        </section>
        <section className='hero is-primary'>
          <div className='hero-body has-text-white'>
            <div className='container'>
              <div className='is-max-w-lg mx-auto has-text-centered'>
                <span className='tag is-info is-rounded'>Lorem ipsum</span>
                <h2 className='mt-5 title is-spaced'>
                  Lorem ipsum dolor sit amet consectutar domor
                </h2>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
                <div className='mt-5'>
                  <a className='button is-light' href='#'>
                    Get Started
                  </a>
                </div>
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

