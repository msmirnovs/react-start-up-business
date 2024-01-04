import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Pricing() {
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
        <section
          className='section is-background-no-repeat is-background-contain'
          style={{
            backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")',
          }}
        >
          <div className='container'>
            <div className='has-text-centered mb-6'>
              <h2 className='title is-spaced is-max-w-lg mx-auto'>
                <span>Start saving time today and</span>
                <span className='has-text-primary'>choose</span>
                <span>your best plan</span>
              </h2>
              <p className='subtitle is-max-w-sm mx-auto'>
                Best for freelance developers who need to save their time.
              </p>
            </div>
            <div className='columns is-multiline'>
              <div className='column is-6 is-4-desktop'>
                <div className='py-6 box has-text-centered'>
                  <img
                    className='image is-96x96 mx-auto'
                    src='metis-assets/illustrations/people.png'
                    alt=''
                  />
                  <h3 className='title is-size-3 my-3'>Begginer</h3>
                  <span className='title is-size-3 is-spaced has-text-primary'>
                    $32.99
                  </span>
                  <p className='subtitle'>user per month</p>
                  <div className='mb-6 is-flex is-justify-content-center'>
                    <ul>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>3 Emails</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>1 Datebases</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>Unlimited Domains</span>
                      </li>
                      <li className='is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>10 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className='buttons is-centered'>
                    <a className='button is-primary' href='#'>
                      Start Free Trial
                    </a>
                    <a className='button is-dark is-outlined' href='#'>
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6 is-4-desktop'>
                <div className='py-6 box has-background-primary has-text-centered'>
                  <img
                    className='image is-96x96 mx-auto'
                    src='metis-assets/illustrations/job-interview.png'
                    alt=''
                  />
                  <h3 className='title is-size-3 my-3 has-text-white'>
                    Intermediate
                  </h3>
                  <span className='title is-size-3 is-spaced has-text-white'>
                    $55.99
                  </span>
                  <p className='subtitle'>user per month</p>
                  <div className='mb-6 is-flex is-justify-content-center'>
                    <ul>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-white-bis'>6 Emails</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-white-bis'>4 Datebases</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-white-bis'>
                          Unlimited Domains
                        </span>
                      </li>
                      <li className='is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-white-bis'>
                          35 GB Storage
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='buttons is-centered'>
                    <a className='button is-light mr-2' href='#'>
                      Start Free Trial
                    </a>
                    <a className='button is-light is-outlined' href='#'>
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-12 is-4-desktop'>
                <div className='py-6 box has-text-centered'>
                  <img
                    className='image is-96x96 mx-auto'
                    src='metis-assets/illustrations/team-management.png'
                    alt=''
                  />
                  <h3 className='title is-size-3 my-3'>Professional</h3>
                  <span className='title is-size-3 is-spaced has-text-primary'>
                    $62.99
                  </span>
                  <p className='subtitle'>user per month</p>
                  <div className='mb-6 is-flex is-justify-content-center'>
                    <ul>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>12 Emails</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>8 Datebases</span>
                      </li>
                      <li className='mb-2 is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>Unlimited Domains</span>
                      </li>
                      <li className='is-flex'>
                        <svg
                          className='mr-2 image is-24x24 has-text-success'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='has-text-grey'>50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className='buttons is-centered'>
                    <a className='button is-primary' href='#'>
                      Start Free Trial
                    </a>
                    <a className='button is-dark is-outlined' href='#'>
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container has-text-black'>
            <div className='columns is-multiline mb-6'>
              <div className='column is-4-desktop is-12-touch'>
                <h2 className='title'>Frequently Asked Questions</h2>
              </div>
              <div className='column is-4-desktop is-offset-4-desktop is-12-touch is-flex is-align-items-center'>
                <p className='subtitle'>
                  Can’t find the answer you’re looking for? Write out to our
                  <a href='#'>customer support team.</a>
                </p>
              </div>
            </div>
            <div className='columns is-multiline'>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna.
                </p>
              </div>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Nullam turpis nisi, lobortis sit amet venenatis ac, egestas id
                  quam. Morbi condimentum dolor sit amet ornare vestibulum.
                  Maecenas nibh purus, pharetra ac felis sed, elementum molestie
                  urna. Nunc at arcu non ipsum auctor lacinia quis quis mi
                </p>
              </div>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis.
                </p>
              </div>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis.
                </p>
              </div>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Nullam turpis nisi, lobortis sit amet venenatis ac, egestas id
                  quam. Morbi condimentum dolor sit amet ornare vestibulum.
                </p>
              </div>
              <div className='column is-4-desktop is-6-tablet is-12-mobile'>
                <h4 className='title is-size-5 is-spaced mb-4'>
                  Nunc at arcu non ipsum auctor lacinia quis quis mi?
                </h4>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis.
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

