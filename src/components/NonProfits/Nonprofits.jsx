import React from 'react';

const Nonprofit = () => (
  <div className="nonprofit__wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 nonprofit__title">
          <h1>For Nonprofits Working on the Pandemic</h1>
        </div>
        <div className="col-12 nonprofit__description">
          <p>
            If you are a nonprofit organization working on COVID-related
            activities that involve APIs, Postman has created special discounts
            to help you further your work. Qualifying nonprofits
            (see eligibility guidelines below)
            will receive ten
            <span><a className="link-style" href="https://www.postman.com/pricing"> Postman Business Plan </a></span>
            licenses for free, and a 75% discount for each additional license thereafter.
            If you are interested in participating, fill out form below
            and we will get you started ASAP.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <h5 className="nonprofits__heading">Eligibility Guidelines for Nonprofits</h5>
          <p className="nonprofit__text">
            To be eligible for Postman’s COVID-related nonprofit discount program, a nonprofit and non-governmental organization in the United States must be qualified with tax-exempt status under 501(c)(3) or 501(c)(4) of the U.S. Internal Revenue Code.  Eligible organizations must also operate on a not-for-profit basis and have a mission to benefit the local community that could include, but is not limited to:
          </p>
          <ul className="nonprofits__li">
            <li>Providing relief to the poor</li>
            <li>Advancing education</li>
            <li>Improving social and community welfare</li>
            <li>Preserving culture</li>
            <li>Preserving or restoring the environment</li>
            <li>Promoting human rights and humanitarianism</li>
            <li>Social Services provider, e.g. Elder Care, Hospice, Mental Health Treatment, Community Health Services, Substance Abuse Treatment, Blood & Organ Transplant Banks, Developmental Services, Disability Services, Reproductive Health Services</li>
            <li>Nonprofit sports body</li>
            <li>Religious, charitable, scientific, or literary</li>
          </ul>
          <h5 className="nonprofits__heading">Ineligible organization types</h5>
          <p className="nonprofit__text">
            Not all 501(c)(3) and 501(c)(4) nonprofit organizations are eligible for donated Postman products. Ineligible organizations include the following:
          </p>
          <ul className="nonprofits__li">
            <li>Hospitals, organizations involved with health insurance or group health plans, and related organizations</li>
            <li>Legislative and political activity organizations, or advocacy groups</li>
            <li>Trade, business or professional organizations; fraternal beneficiary societies, orders, or associations; providers of other services or benefits to members or employees</li>
            <li>Government instrumentalities or agencies</li>
            <li>Foundations</li>
            <li>Religious organizations without a secular community designation. To have a secular designation, an organization must provide services to people regardless of their religious beliefs and must not propagate a belief in a specific faith. It must also have a tax ID (EIN) separate from that of the church or religious organization.</li>
            <li>
              <span className="bold">US:</span>
              Only 501(c)(3) and 501(c)(4) nonprofits are eligible. This means that organizations that are designated as nonprofit under IRS Subsections other than 501(c)(3) or 501(c)(4) are not eligible.
            </li>
          </ul>
          <h5 className="nonprofits__heading">Terms of service:</h5>
          <ul className="nonprofits__li">
            <li>
              Organizations that request Postman products must agree to the
              <span><a className="link-style" href="https://www.postman.com/pricing"> Postman EULA </a></span>
              along with any applicable Postman terms of service prior to obtaining access to the products.
            </li>
            <li>Postman reserves the right to supplement or amend these eligibility guidelines at any time without notice.</li>
            <li>Products will be distributed to qualifying organizations only, not to individuals.</li>
            <li>Postman reserves the right to grant or deny an organization&apos;s request at any time, for any reason.</li>
            <li>For organizations that possess multiple IRS designations, the product donation licenses and discounts may only be used by the 501(c)(3) or 501(c)(4) organization.</li>
            <li>Recipient organizations may not transfer or resell Postman products.</li>
          </ul>
        </div>
        <div className="col-md-5 Form">
          <h2 className="h3">Tell us about your organization</h2>
          <form id="mktoForm_1376" className="nonprofit__form" />
        </div>
      </div>
    </div>
  </div> // container
);

export default Nonprofit;
