// import React, { useState } from 'react';
// import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.email && formData.message) {
//       console.log('Form submitted:', formData);
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <div className="min-h-screen ">
//       {/* Header */}
      
//       <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 relative overflow-hidden h-[300px] flex items-center justify-center">
//         {/* Background image (absolute, low-opacity) */}
//         <div className="absolute inset-0">
//           <img
//             src="/contact.webp"
//             className="w-full h-full object-cover object-center opacity-10"
//             alt="background"
//           />
//         </div>

//         {/* Centered content */}
//         <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
//           <p className="text-gray-300">Home / Contact Us</p>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Quick Contact */}
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h2>
//             <p className="text-gray-600 mb-6">
//               If you have any questions simply use the following contact details.
//             </p>

//             <div className="space-y-6">
//               {/* Address */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                   <MapPin className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">ADDRESS:</h3>
//                   <p className="text-gray-600 text-sm">
//                     204 , Money Plant Highstreet,S.G. Highway<br />
//                     Ahemdabad, India
//                   </p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                   <Mail className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">EMAIL:</h3>
//                   <a href="mailto:dataxhirejob@gmail.com" className="text-blue-600 text-sm hover:underline">
//                     DataXhire/job@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                   <Phone className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">PHONE:</h3>
//                   <a href="tel:+919999999999" className="text-gray-600 text-sm hover:text-blue-600">
//                     +91 99999 99999
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="mt-8 flex space-x-3">
//               <a href="#" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition-colors">
//                 <Linkedin size={20} />
//               </a>
//               <a href="#" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition-colors">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Send Message Form */}
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message Us</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="6"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
//                 ></textarea>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* Map */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="h-full min-h-[400px] lg:min-h-full relative">
//               <iframe
//                 src='https://www.google.com/maps?q=Money+Plant+Highstreet,+Jagatpur+Road,+Ahmedabad&output=embed'
                
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: '400px' }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Location Map"
//                 className="absolute inset-0"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Contact Info Section
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We're here to help and answer any question you might have. We look forward to hearing from you!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="text-white" size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
//               <p className="text-gray-600">
//                 123 Main Street, Suite 100<br />
//                 Haryana, India
//               </p>
//             </div>

//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Mail className="text-white" size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
//               <p className="text-gray-600">
//                 <a href="mailto:info@datateam.com" className="text-blue-600 hover:underline">
//                   info@datateam.com
//                 </a><br />
//                 <a href="mailto:support@datateam.com" className="text-blue-600 hover:underline">
//                   support@datateam.com
//                 </a>
//               </p>
//             </div>

//             <div className="text-center p-6 bg-gray-50 rounded-lg">
//               <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Phone className="text-white" size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
//               <p className="text-gray-600">
//                 <a href="tel:+919999999999" className="hover:text-blue-600">
//                   +91 99999 99999
//                 </a><br />
//                 <a href="tel:+918888888888" className="hover:text-blue-600">
//                   +91 88888 88888
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-px">
      {/* Header Banner (reduced size) */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-12 relative overflow-hidden h-[160px] flex items-center justify-center mb-10">

        <div className="absolute inset-0">
          <img
            src="/contact.webp"
            className="w-full h-full object-cover object-center opacity-10"
            alt="background"
          />
        </div>

        {/* <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-1">Contact Us</h1>
          <p className="text-gray-300 text-sm">Home / Contact Us</p>
        </div> */}

        <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
  <h1 className="text-2xl md:text-3xl font-semibold mb-0">Contact Us</h1>

  <p className="text-white text-sm">
    <Link to="/home" className="hover:underline text-white">Home</Link> / Contact Us
  </p>
</div>

      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Quick Contact */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any questions simply use the following contact details.
            </p>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">ADDRESS:</h3>
                  <p className="text-gray-600 text-xs">
                    204, Money Plant Highstreet,<br />
                    S.G. Highway, Ahmedabad, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">EMAIL:</h3>
                  <a href="mailto:dataxhirejob@gmail.com" className="text-blue-600 text-xs hover:underline">
                    DataXhire/job@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">PHONE:</h3>
                  <a href="tel:+919999999999" className="text-gray-600 text-xs hover:text-blue-600">
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex space-x-2">
              <a className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"><Facebook size={18} /></a>
              <a className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500"><Twitter size={18} /></a>
              <a className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"><Linkedin size={18} /></a>
              <a className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Send Message */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Send Message</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 text-sm"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Money+Plant+Highstreet,+Jagatpur+Road,+Ahmedabad&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '300px', border: 0 }}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
