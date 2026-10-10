import React, { useState } from 'react';
import { X, CheckCircle2, Mail, MessageSquare, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#f7f5ef] border border-[#dfe3dc] rounded-[24px] shadow-2xl p-6 sm:p-8 text-[#17211b]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#68736c] hover:text-[#17211b] hover:bg-[#e9efdf] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="eyebrow !mb-2.5">
            <span className="dot"></span>
            <span>ANYBLE TEAM · DIRECT SUPPORT</span>
          </div>
          <h2 className="text-[26px] font-black tracking-tight text-[#17211b] font-display">
            Get in touch with us
          </h2>
          <p className="text-[13px] text-[#68736c] mt-1.5 leading-relaxed">
            Questions, feedback, safety reports, or local partnership inquiries. We reply within one business day.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-[#e9efdf] border border-[#c7d8be] rounded-[20px] text-center space-y-4">
            <div className="w-12 h-12 bg-[#164b35] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#cce86b]" />
            </div>
            <h3 className="text-xl font-black text-[#17211b] font-display">
              Message received!
            </h3>
            <p className="text-sm text-[#17211b] leading-relaxed">
              Thanks for writing to us, {name}. A member of our community team will email you back at <span className="font-extrabold">{email}</span> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-dark"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#17211b] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Rohan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17211b] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="rohan@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17211b] mb-1">
                Inquiry Topic
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
              >
                <option value="General Question">General Question about Anyble</option>
                <option value="Trust & Safety Report">Trust & Safety / Report a Listing</option>
                <option value="Local Merchant Support">Local Merchant / Business Inquiry</option>
                <option value="Neighborhood Expansion">Bring Anyble to my Colony</option>
                <option value="Press & Media">Press & Media</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17211b] mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35] resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-light !py-2.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-dark !py-2.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
