import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Apps() {
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
            <div className='columns is-multiline is-centered is-vcentered'>
              <div className='mb-6 column is-12 is-4-desktop'>
                <div>
                  <h2 className='title is-spaced'>
                    Sed ac magna sit amet risus tristique interdum, at vel velit
                    in hac habitasse platea dictumst.
                  </h2>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sagittis, quam nec venenatis lobortis, mi risus tempus
                    nulla, sed porttitor est nibh at nulla. Praesent placerat
                    enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                  </p>
                  <a className='button is-primary' href='#'>
                    Learn More
                  </a>
                </div>
              </div>
              <div className='column is-12 is-6-desktop is-offset-1-desktop'>
                <ul>
                  <li className='mb-6 is-flex'>
                    <div className='pr-5'>
                      <span className='is-flex is-align-items-center is-justify-content-center is-64x64 is-size-4 has-text-primary is-rounded has-background-link-light has-text-weight-bold'>
                        1
                      </span>
                    </div>
                    <div className='mt-3'>
                      <h3 className='title is-size-5 is-spaced mb-3'>
                        Key Elements
                      </h3>
                      <p className='subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus eget justo et iaculis.
                      </p>
                    </div>
                  </li>
                  <li className='mb-6 is-flex'>
                    <div className='pr-5'>
                      <span className='is-flex is-align-items-center is-justify-content-center is-64x64 is-size-4 has-text-primary is-rounded has-background-link-light has-text-weight-bold'>
                        2
                      </span>
                    </div>
                    <div className='mt-3'>
                      <h3 className='title is-size-5 is-spaced mb-3'>
                        Flexible Elements
                      </h3>
                      <p className='subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus eget justo et iaculis.
                      </p>
                    </div>
                  </li>
                  <li className='is-flex'>
                    <div className='pr-5'>
                      <span className='is-flex is-align-items-center is-justify-content-center is-64x64 is-size-4 has-text-primary is-rounded has-background-link-light has-text-weight-bold'>
                        3
                      </span>
                    </div>
                    <div className='mt-3'>
                      <h3 className='title is-size-5 is-spaced mb-3'>
                        Flexible Software
                      </h3>
                      <p className='subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus eget justo et iaculis.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='section has-background-white-bis'>
          <div className='container'>
            <div className='columns is-multiline mb-6'>
              <div className='column is-5'>
                <h2 className='title is-spaced'>
                  <span>Make your</span>
                  <span className='has-text-primary'>life easier</span>
                  <span>for marketing sales and customer support</span>
                </h2>
              </div>
              <div className='column is-7'>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                  auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                  imperdiet.
                </p>
              </div>
            </div>
            <div className='columns is-multiline'>
              <div className='column is-6-tablet is-3-desktop'>
                <div className='box py-6 has-text-centered'>
                  <svg
                    className='mb-4 mx-auto image is-32x32 has-text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                    />
                  </svg>
                  <h3 className='title is-size-5 is-spaced mb-3'>
                    Category Example
                  </h3>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className='column is-6-tablet is-3-desktop'>
                <div className='box py-6 has-text-centered'>
                  <svg
                    className='mb-4 mx-auto image is-32x32 has-text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                    />
                  </svg>
                  <h3 className='title is-size-5 is-spaced mb-3'>
                    Category Example
                  </h3>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className='column is-6-tablet is-3-desktop'>
                <div className='box py-6 has-text-centered'>
                  <svg
                    className='mb-4 mx-auto image is-32x32 has-text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                  <h3 className='title is-size-5 is-spaced mb-3'>
                    Category Example
                  </h3>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className='column is-6-tablet is-3-desktop'>
                <div className='box py-6 has-text-centered'>
                  <svg
                    className='mb-4 mx-auto image is-32x32 has-text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  <h3 className='title is-size-5 is-spaced mb-3'>
                    Category Example
                  </h3>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
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

