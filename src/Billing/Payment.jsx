import React from 'react'

const Payment = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {/* Left Sidebar - Picture wala part */}
        <div className="col-md-3">
          <h1 className="h4 fw-bold mb-4">Manage My Account</h1>
          
          <div className="mb-4">
            <h6 className="fw-bold">My Profile</h6>
            <ul className="list-unstyled ms-3">
              <li className="mb-1">Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">My Orders</h6>
            <ul className="list-unstyled ms-3">
              <li className="mb-1">My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">My Wishlist</h6>
          </div>
        </div>

        {/* Right Content - Billing Details */}
        <div className="col-md-9">
          <div className="row mb-4">
            <h1 className="fw-bold">Billing Detail</h1>
          </div>
          
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name *</label>
                <input type="text" className="form-control" id="lastName" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="company" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="company" />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Street Address *</label>
              <input type="text" className="form-control" id="address" required />
            </div>

            <div className="mb-3">
              <label htmlFor="apartment" className="form-label">Apartment, floor, etc (Optional)</label>
              <input type="text" className="form-control" id="apartment" />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Town/City *</label>
              <input type="text" className="form-control" id="city" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input type="email" className="form-control" id="email" required />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="saveInfo" />
              <label className="form-check-label" htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
              <div className="d-flex gap-3 mt-4">
  <button type="button" className="btn btn-outline-secondary px-4">Cancel</button>
  <button type="submit" className="btn btn-danger px-4">Save Changes</button>
</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment