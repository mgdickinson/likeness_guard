'use client';

import { useState, FormEvent } from 'react';

export default function MailchimpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit to Mailchimp using a hidden iframe to avoid redirect
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden-iframe';
      document.body.appendChild(iframe);

      form.target = 'hidden-iframe';
      form.submit();

      // Show success after a short delay
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        document.body.removeChild(iframe);
      }, 1000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-12 shadow-xl text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#ceff66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#ceff66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Application Received!</h3>
            <p className="text-[#e7e7e7] text-lg mb-2">
              Thank you for your interest in LikenessGuard.
            </p>
            <p className="text-[#a8a8a8]">
              We'll review your application and be in touch within 48 hours.
            </p>
          </div>
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Request Access</h3>
          <p className="text-[#a8a8a8]">Limited spots available. Applications reviewed within 48 hours.</p>
        </div>

        <form
          action="https://gmail.us7.list-manage.com/subscribe/post?u=5f7bf11325f37f19829960e65&id=df07fc30d6&f_id=00d381e2f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          onSubmit={handleSubmit}
          className="validate space-y-4"
        >
          {/* Email */}
          <div>
            <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-[#e7e7e7] mb-2">
              Email Address <span className="text-[#ceff66]">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#ceff66]/50 focus:ring-2 focus:ring-[#ceff66]/20 transition-all"
              id="mce-EMAIL"
              required
              placeholder="you@example.com"
            />
          </div>

          {/* Who are you? */}
          <div>
            <label htmlFor="mce-MMERGE5" className="block text-sm font-medium text-[#e7e7e7] mb-2">
              Who are you? <span className="text-[#ceff66]">*</span>
            </label>
            <select
              name="MMERGE5"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ceff66]/50 focus:ring-2 focus:ring-[#ceff66]/20 transition-all"
              id="mce-MMERGE5"
              required
            >
              <option value="" className="bg-[#0f0c09]">Select one...</option>
              <option value="Creator / Influencer" className="bg-[#0f0c09]">Creator / Influencer</option>
              <option value="Parent" className="bg-[#0f0c09]">Parent</option>
              <option value="Professional" className="bg-[#0f0c09]">Professional</option>
              <option value="Student" className="bg-[#0f0c09]">Student</option>
              <option value="Just curious" className="bg-[#0f0c09]">Just curious</option>
            </select>
          </div>

          {/* What problem worries you most? */}
          <div>
            <label htmlFor="mce-MMERGE6" className="block text-sm font-medium text-[#e7e7e7] mb-2">
              What problem worries you most?
            </label>
            <select
              name="MMERGE6"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ceff66]/50 focus:ring-2 focus:ring-[#ceff66]/20 transition-all"
              id="mce-MMERGE6"
            >
              <option value="" className="bg-[#0f0c09]">Select one...</option>
              <option value="Deepfakes" className="bg-[#0f0c09]">Deepfakes</option>
              <option value="Impersonation" className="bg-[#0f0c09]">Impersonation</option>
              <option value="Voice scams" className="bg-[#0f0c09]">Voice scams</option>
              <option value="Fake social media accounts" className="bg-[#0f0c09]">Fake social media accounts</option>
              <option value="AI-generated porn" className="bg-[#0f0c09]">AI-generated porn</option>
              <option value="Reputation damage" className="bg-[#0f0c09]">Reputation damage</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="mce-FNAME" className="block text-sm font-medium text-[#e7e7e7] mb-2">
              First Name
            </label>
            <input
              type="text"
              name="FNAME"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#ceff66]/50 focus:ring-2 focus:ring-[#ceff66]/20 transition-all"
              id="mce-FNAME"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="mce-LNAME" className="block text-sm font-medium text-[#e7e7e7] mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#ceff66]/50 focus:ring-2 focus:ring-[#ceff66]/20 transition-all"
              id="mce-LNAME"
              placeholder="Doe"
            />
          </div>

          {/* Bot prevention */}
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_5f7bf11325f37f19829960e65_df07fc30d6" tabIndex={-1} />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="w-full px-8 py-4 bg-[#ceff66] hover:bg-[#b8e856] text-[#0f0c09] rounded-lg font-bold text-lg transition-colors duration-200 mt-6"
          >
            Submit Application
          </button>

          <p className="text-xs text-[#666] text-center mt-4">
            Your information is confidential and never shared.
          </p>
        </form>
      </div>
    </div>
  );
}
