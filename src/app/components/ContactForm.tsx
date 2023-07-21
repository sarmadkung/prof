import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-800">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-gray-800">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};