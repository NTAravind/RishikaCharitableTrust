import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import qr from '../images/qr.jpeg';

export default function VolunteerSection() {
  const [activeTab, setActiveTab] = useState('volunteer');

  useEffect(() => {
    const switchToDonate = () => setActiveTab('donate');
    const switchToVolunteer = () => setActiveTab('volunteer');
    window.addEventListener('openDonateTab', switchToDonate);
    window.addEventListener('openVolunteerTab', switchToVolunteer);
    return () => {
      window.removeEventListener('openDonateTab', switchToDonate);
      window.removeEventListener('openVolunteerTab', switchToVolunteer);
    };
  }, []);

  // Create a mapping object for interest values to their descriptions
  const interestDescriptions = {
    "": "None selected",
    "anna": "Anna Daana – Food Distribution",
    "vastra": "Muttu Project –Education on woman sanitary Health",
    "arogya": "Arogya Daana – Health Support",
    "mutru": "Mutru Project – Youth & Agriculture",
    "amruth": "Amruth Khel – Playgrounds & Child Welfare",
    "ewaste": "E-Waste Collection – Sustainability",
    "jnana": "Jnana Chethana – Education & Workshops",
    "grama": "Grama Pravesha – Village Outreach"
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a copy of the form data with the interest description included
    const emailData = {
      ...formData,
      interestDescription: interestDescriptions[formData.interest] || "None selected"
    };

    // Initialize emailjs service
    const serviceId = 'service_kgpgaht'; // Replace with your EmailJS service ID
    const templateId = 'template_uub9sbb'; // Replace with your EmailJS template ID
    const userId = '3-Y1kn6Bs9PiklcBR'; // Replace with your EmailJS user ID

    // Send email using EmailJS with the enhanced data
    emailjs.send(serviceId, templateId, emailData, userId)
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Your application has been submitted successfully!');
        },
        (error) => {
          console.error('Error:', error);
          alert('There was an error submitting your form. Please try again.');
        }
      );
  };

  return (
    <div className="bg-[var(--color-primary)] rounded-3xl my-10 py-8 px-4 min-h-screen max-sm:rounded-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-2 max-sm:text-4 xl">Get Involved</h2>
        <div className="w-16 h-1 bg-[var(--color-secondary)] mx-auto mb-6"></div>

        <p className="text-center text-white mb-8 text-[1.3rem]">
          Join us in our mission to create positive change. There are many ways you can contribute.
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 px-4 font-medium ${
                activeTab === 'volunteer'
                  ? 'text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]'
                  : 'text-gray-500 hover:text-[var(--color-secondary)]'
              }`}
              onClick={() => setActiveTab('volunteer')}
            >
              Volunteer
            </button>
            <button
              className={`flex-1 py-3 px-4 font-medium ${
                activeTab === 'donate'
                  ? 'text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]'
                  : 'text-gray-500 hover:text-[var(--color-secondary)]'
              }`}
              onClick={() => setActiveTab('donate')}
            >
              Donate
            </button>
          </div>

          {/* VOLUNTEER TAB */}
          {activeTab === 'volunteer' && (
            <div className="p-6 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Become a Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Our volunteers are the heart of our organization. Choose how you'd like to help and make a difference today.
                </p>

                <div className="space-y-5">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center font-medium text-[var(--color-secondary)]">
                        {num}
                      </div>
                      <div>
                        <h4 className="text-[var(--color-primary)] font-medium">
                          {num === 1 && 'Flexible Time Commitment'}
                          {num === 2 && 'Various Opportunities'}
                          {num === 3 && 'Make a Real Impact'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {num === 1 && 'Volunteer once a day, a week, or occasionally. Any time helps.'}
                          {num === 2 && 'From teaching to organizing events — theres a role for everyone.'}
                          {num === 3 && 'Your contribution directly helps those in need across Karnataka.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {['fullName', 'email', 'phone'].map((field, idx) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                      {field === 'fullName' && 'Full Name'}
                      {field === 'email' && 'Email Address'}
                      {field === 'phone' && 'Phone Number'}
                      {idx < 2 && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={idx < 2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">Area of Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="anna">Anna Daana – Food Distribution</option>
                    <option value="vastra">Muttu Project –Education on woman sanitary Health</option>
                    <option value="arogya">Arogya Daana – Health Support</option>
                    <option value="mutru">Mutru Project – Youth & Agriculture</option>
                    <option value="amruth">Amruth Khel – Playgrounds & Child Welfare</option>
                    <option value="ewaste">E-Waste Collection – Sustainability</option>
                    <option value="jnana">Jnana Chethana – Education & Workshops</option>
                    <option value="grama">Grama Pravesha – Village Outreach</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                    placeholder="Tell us about your skills or availability..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-secondary)] text-white py-3 px-4 rounded-md hover:bg-[var(--color-primary)] transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          )}


  {/* DONATE TAB */}
  {activeTab === 'donate' && (
    <div className="p-6 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Support Our Cause</h3>
        <p className="text-gray-600 mb-4">
          Every contribution counts. Help us fund educational programs, health camps, and resource distribution.
        </p>

        <ul className="space-y-3 text-gray-600">
          {[
            'Fund educational programs for underprivileged communities',
            'Provide essential resources to families in need',
            'Support community development initiatives',
            'Expand our volunteer training programs'
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <a
            href="upi://pay?pa=yourupiid@okaxis&pn=Your%20Name&cu=INR"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded hover:shadow-lg transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
              <path fill="#e64a19" d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927	c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789	C48.176,19.325,46.819,14.262,42.858,11.975z"></path><path fill="#fbc02d" d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275	c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59	C38.261,20.727,37.523,17.968,35.365,16.723z"></path><path fill="#43a047" d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317	c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86	c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"></path><path fill="#1e88e5" d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03	c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596	l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"></path>
            </svg>
            <span className="text-[var(--color-primary)] font-medium">Pay with GPay</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
        <div className="text-center mb-4">
          <h4 className="font-medium text-[var(--color-primary)]">Scan to Donate</h4>
          <p className="text-sm text-gray-600">Use your phone's camera</p>
        </div>

        <div className="w-48 h-48 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-3xl">
          <img src={qr} alt="Donation QR Code" />
        </div>
      </div>
    </div>
  )}
</div>
      </div>
    </div>
  );
}