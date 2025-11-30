import React from 'react'
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='container py-4'>
      <div className="row">
        <div className="col-3 d-flex align-items-stretch">
          <div className="contact-info w-100">
            <div className="contact-section mb-5">
              <p> <FiPhoneCall size={18} />
              </p>
              <h5 className="fw-bold mb-3">Call To Us</h5>
              <p className="mb-3">We are available 24/7, 7 days a week.</p>
              <p className="mb-1">Phone: <strong>+8801611112222</strong></p>
            </div>
            <hr className="my-4"  />

            <div className="contact-section">
              <p> <FiMail size={18} />
              </p>
              <h5 className="fw-bold mb-3">Write To US</h5>
              <p className="mb-3">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mb-1">Emails: <strong>customer@exclusive.com</strong></p>
              <p className="mb-0">Emails: <strong>support@exclusive.com</strong></p>
            </div>
          </div>
        </div>

        <div className="col-9 d-flex align-items-stretch">
          <div className="contact-form w-100 bg-light p-4 rounded">
            <h4 className="mb-4">Send Us a Message</h4>
            <form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name *" 
                  />
                </div>
                <div className="col-md-4">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email *" 
                  />
                </div>
                <div className="col-md-4">
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Your Phone *" 
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                    style={{ height: '200px' }}

                  rows="5" 
                  placeholder="Your Massage"
                ></textarea>
              </div>
              
              <button className="btn btn-danger px-4 py-2" >
                Send Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact