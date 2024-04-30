import React from 'react';
import '../styles/Privacy.css'; // Import CSS for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div >
      <Navbar isHomePage={false} />
      <div className="privacy-policy-container">
        <h1 className="policy-heading mb-20">Privacy Policy</h1>

        <div className="policy-section">
          <h2 className="policy-section-heading">Information We Collect</h2>
          <p>
            <span className="italic-text">Personal Information:</span> When you use our website or engage with our services, we may collect personal information such as your name, contact details, academic background, and other relevant details necessary for providing our services.
          </p>
          <p>
            <span className="italic-text">Usage Information:</span> We may also collect information about your usage of our website, including your IP address, browser type, pages visited, and other statistical data to improve our website's performance and user experience.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">How We Use Your Information</h2>
          <ol>
            <li><span className="italic-text">Service Provision:</span> We use the information we collect to provide you with the services you request, such as university selection assistance, admission guidance, visa application support, and other related services.</li>
            <li><span className="italic-text">Communication:</span> We may use your contact information to communicate with you about our services, updates, promotions, and other relevant information. You can opt out of these communications at any time.</li>
            <li><span className="italic-text">Improvement of Services:</span> We may analyze usage data to improve our website, services, and customer experience, ensuring that we continue to meet the needs of our users effectively.</li>
          </ol>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We restrict access to your personal information to authorized personnel only, and all employees are trained to handle personal data securely.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or in cases where it is necessary to provide our services.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect certain functionalities of the website.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Changes to the Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this Privacy Policy periodically for updates.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at [insert contact information].
          </p>
        </div>

        <p className="consent-text">
          By using our website and engaging with our services, you consent to the collection and use of your information as outlined in this Privacy Policy.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
