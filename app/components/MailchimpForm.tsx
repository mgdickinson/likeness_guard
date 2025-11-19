'use client';

export default function MailchimpForm() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Request Access</h3>
          <p className="text-[#a8a8a8]">Limited spots available. Applications reviewed within 48 hours.</p>
        </div>

        <form
          action="https://gmail.us7.list-manage.com/subscribe/post?u=5f7bf11325f37f19829960e65&amp;id=df07fc30d6&amp;f_id=00d381e2f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate space-y-4"
          target="_blank"
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

          {/* Response messages */}
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
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

      {/* Mailchimp validation script */}
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';
              fnames[5]='MMERGE5';ftypes[5]='dropdown';
              fnames[6]='MMERGE6';ftypes[6]='dropdown';
              fnames[1]='FNAME';ftypes[1]='text';
              fnames[2]='LNAME';ftypes[2]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `
        }}
      />
    </div>
  );
}
