import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { OPEN_ROLES } from '../../data/mockData';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#f7f5ef] border border-[#dfe3dc] rounded-[24px] shadow-2xl p-6 sm:p-8 text-[#17211b] max-h-[90vh] overflow-y-auto"
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
            <span>CAREERS AT ANYBLE</span>
          </div>
          <h2 className="text-[26px] font-black tracking-tight text-[#17211b] font-display">
            Build the local internet with us
          </h2>
          <p className="text-[13px] text-[#68736c] mt-1.5 leading-relaxed">
            We are a thoughtful, product-obsessed team making neighborhoods more vibrant, connected, and sustainable.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-[#e9efdf] border border-[#c7d8be] rounded-[20px] text-center space-y-4">
            <div className="w-12 h-12 bg-[#164b35] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#cce86b]" />
            </div>
            <h3 className="text-xl font-black text-[#17211b] font-display">
              Application received!
            </h3>
            <p className="text-sm text-[#17211b] leading-relaxed">
              Thank you, {applicantName}. Our founding team reviews every application personally within 48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedRole(null);
                onClose();
              }}
              className="btn btn-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {!selectedRole ? (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#68736c] uppercase tracking-wider">
                  Open Opportunities (Bengaluru & Remote)
                </p>
                <div className="space-y-2.5">
                  {OPEN_ROLES.map((role) => (
                    <div
                      key={role.id}
                      onClick={() => setSelectedRole(role.title)}
                      className="p-4 bg-white rounded-[16px] border border-[#dfe3dc] hover:border-[#164b35] transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-black text-[#17211b] group-hover:text-[#164b35] transition-colors">
                            {role.title}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e9efdf] text-[#164b35]">
                            {role.type}
                          </span>
                        </div>
                        <p className="text-xs text-[#68736c] leading-snug">
                          {role.summary}
                        </p>
                        <p className="text-[11px] text-[#68736c] font-medium flex items-center gap-1 pt-1">
                          <MapPin className="w-3 h-3 text-[#164b35]" />
                          <span>{role.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-[#164b35] flex items-center gap-1 shrink-0 ml-4">
                        Apply →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 bg-[#e9efdf] rounded-[14px] border border-[#c7d8be] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#164b35] font-black uppercase">Applying for:</span>
                    <p className="text-sm font-black text-[#17211b]">{selectedRole}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="text-xs text-[#164b35] hover:underline font-bold"
                  >
                    Change role
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17211b] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Aditi Verma"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
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
                    placeholder="aditi@example.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17211b] mb-1">
                    LinkedIn / GitHub / Portfolio Link
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/username or portfolio"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="btn btn-light !py-2.5"
                  >
                    Back to Roles
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark !py-2.5"
                  >
                    <span>Submit Application →</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
