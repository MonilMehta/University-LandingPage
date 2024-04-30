import React from 'react';
import '../styles/Refund.css'; // Import CSS for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="refund-policy-super-container">
      <Navbar isHomePage={false} />
      <div className="refund-policy-container">
        <h1 className="policy-heading">Refund Policy</h1>

        <div className="policy-section">
          <h2 className="policy-section-heading">Application Fees</h2>
          <p>
            Application fees paid for our services, including university application assistance and visa application support, are non-refundable once the service has been initiated.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Tuition Fees</h2>
          <p>
            Refund of tuition fees paid to universities in Russia is subject to the refund policy of the respective university. We will assist students in processing refund requests according to the university's guidelines.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Visa Fees</h2>
          <p>
            Visa fees paid to the Russian consulate or embassy are non-refundable once the visa application process has commenced. Any fees paid for visa services provided by Study MBBS in Russia are non-refundable.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Service Fees</h2>
          <p>
            Service fees paid for our consulting and support services are non-refundable once the service has been provided. However, if the service has not yet been initiated, a partial refund may be considered on a case-by-case basis.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Cancellation Policy</h2>
          <p>
            In the event of cancellation of services by the student before the service has been initiated, a partial refund may be considered, minus any non-refundable fees incurred by Study MBBS in Russia up to that point.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Refund Processing</h2>
          <p>
            Refund requests must be submitted in writing to Study MBBS in Russia along with relevant documentation, such as proof of payment and cancellation reasons. Refunds will be processed within [insert timeframe] upon approval of the request.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Force Majeure</h2>
          <p>
            Study MBBS in Russia shall not be liable for any delay or failure to perform its obligations under this refund policy due to circumstances beyond its reasonable control, including but not limited to natural disasters, government actions, or acts of terrorism.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Contact Us</h2>
          <p>
            For any questions or concerns regarding our refund policy, please contact us at [insert contact information]. Our team will be happy to assist you.
          </p>
        </div>

        <p className="consent-text">
          By engaging with our services, you acknowledge and agree to abide by the terms of this refund policy. We strive to ensure fairness and clarity in all refund matters while providing quality support to our students.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
