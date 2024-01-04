import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
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
            <div className='is-max-w-md mx-auto mb-6 has-text-centered'>
              <span className='tag is-info is-rounded'>Lorem ipsum</span>
              <h2 className='mt-4 title is-spaced'>
                Lorem ipsum dolor sit amet consectutar domor
              </h2>
              <p className='subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div className='columns is-multiline'>
              <div className='column is-12 is-6-desktop mb-4'>
                <div className='columns is-align-items-center is-variable is-5'>
                  <div className='column is-6 has-text-centered'>
                    <img
                      className='is-cover-256x256 is-radius'
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </div>
                  <div className='column is-6 has-text-centered-mobile'>
                    <h3 className='title is-size-5'>Julie Bailey</h3>
                    <p className='subtitle mb-2 has-text-info'>CEO</p>
                    <p className='subtitle'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-12 is-6-desktop mb-4'>
                <div className='columns is-align-items-center is-variable is-5'>
                  <div className='column is-6 has-text-centered'>
                    <img
                      className='is-cover-256x256 is-radius'
                      src='https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </div>
                  <div className='column is-6 has-text-centered-mobile'>
                    <h3 className='title is-size-5'>Tom Brown</h3>
                    <p className='subtitle mb-2 has-text-info'>
                      Director, Product Development
                    </p>
                    <p className='subtitle'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-12 is-6-desktop mb-4'>
                <div className='columns is-align-items-center is-variable is-5'>
                  <div className='column is-6 has-text-centered'>
                    <img
                      className='is-cover-256x256 is-radius'
                      src='https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </div>
                  <div className='column is-6 has-text-centered-mobile'>
                    <h3 className='title is-size-5'>Anne Jones</h3>
                    <p className='subtitle mb-2 has-text-info'>
                      Head of Operations
                    </p>
                    <p className='subtitle'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-12 is-6-desktop'>
                <div className='columns is-align-items-center is-variable is-5'>
                  <div className='column is-6 has-text-centered'>
                    <img
                      className='is-cover-256x256 is-radius'
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </div>
                  <div className='column is-6 has-text-centered-mobile'>
                    <h3 className='title is-size-5'>Julie Bailey</h3>
                    <p className='subtitle mb-2 has-text-info'>
                      Head of Development
                    </p>
                    <p className='subtitle'>
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title has-text-centered mb-6'>Our Blog</h2>
            <div className='mb-6 columns is-desktop is-multiline'>
              <div className='column is-6-desktop'>
                <a className='has-text-white' href='#'>
                  <div className='p-6 has-background-primary has-text-centered is-radius'>
                    <span className='tag is-info is-rounded'>Startup</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4 has-text-white'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p className='subtitle has-text-light'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div className='column is-6-desktop'>
                <a className='has-text-black' href='#'>
                  <div className='p-6 has-background-light has-text-centered is-radius'>
                    <span className='tag is-info is-rounded'>Development</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p className='subtitle'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block has-text-primary'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div className='column is-6-desktop'>
                <a className='has-text-black' href='#'>
                  <div className='p-6 has-background-light has-text-centered is-radius'>
                    <span className='tag is-info is-rounded'>Startup</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p className='subtitle'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block has-text-primary'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div className='column is-6-desktop'>
                <a className='has-text-black' href='#'>
                  <div className='p-6 has-background-light has-text-centered is-radius'>
                    <span className='tag is-info is-rounded'>Development</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p className='subtitle'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block has-text-primary'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div className='column is-6-desktop'>
                <a className='has-text-black' href='#'>
                  <div className='p-6 has-background-light has-text-centered is-radius'>
                    <span className='tag is-info is-rounded'>Startup</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p />
                    <p className='subtitle'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block has-text-primary'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div className='column is-6-desktop'>
                <a className='has-text-black' href='#'>
                  <div className='has-text-centered p-6 is-radius has-background-light'>
                    <span className='tag is-info is-rounded'>Startup</span>
                    <h3 className='title is-size-4 is-spaced mt-5 mb-4'>
                      Curabitur vestibulum odio maximus.
                    </h3>
                    <p />
                    <p className='subtitle'>
                      Aenean tempus orci eu est ultrices hendrerit. Fusce
                      suscipit, leo a semper venenatis, felis urna pulvinar
                      nibh, vitae porta erat risus sed mauris. Vestibulum
                      vehicula leo eget libero eleifend, quis dictum eros
                      bibendum. Maecenas convallis tempor varius.
                    </p>
                    <span className='is-inline-block has-text-primary'>
                      <svg
                        className='image is-24x24'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className='has-text-centered has-text-weight-bold'>
              <a
                className='is-size-4 is-flex is-align-items-center is-justify-content-center'
                href='#'
              >
                See all Articles
                <svg
                  className='image is-32x32 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className='section has-background-primary'>
          <div className='container'>
            <div className='columns is-vcentered'>
              <div className='column is-6'>
                <h2 className='title is-spaced has-text-white'>
                  <span>Lorem ipsum</span>
                  <span className='has-text-info'>dolor sit</span>
                  <span>amet, consectetur adipiscing.</span>
                </h2>
                <p className='subtitle has-text-light'>
                  Integer felis tellus, rhoncus ac pulvinar vitae.
                </p>
              </div>
              <div className='is-flex column is-6 is-justify-content-center'>
                <div className='field is-grouped is-grouped-multiline'>
                  <div className='control has-icons-left'>
                    <span className='icon is-small is-left'>
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
                    <button className='button is-white' type='submit'>
                      Sign Up
                    </button>
                  </div>
                </div>
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

