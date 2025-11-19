'use client';

export default function MailchimpForm() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-3">Join the Waitlist</h3>
          <p className="text-slate-400">Be the first to protect your digital identity</p>
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
            <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              id="mce-EMAIL"
              required
              placeholder="you@example.com"
            />
          </div>

          {/* Who are you? */}
          <div>
            <label htmlFor="mce-MMERGE5" className="block text-sm font-medium text-slate-300 mb-2">
              Who are you? <span className="text-cyan-400">*</span>
            </label>
            <select
              name="MMERGE5"
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              id="mce-MMERGE5"
              required
            >
              <option value="">Select one...</option>
              <option value="Creator / Influencer">Creator / Influencer</option>
              <option value="Parent">Parent</option>
              <option value="Professional">Professional</option>
              <option value="Student">Student</option>
              <option value="Just curious">Just curious</option>
            </select>
          </div>

          {/* What problem worries you most? */}
          <div>
            <label htmlFor="mce-MMERGE6" className="block text-sm font-medium text-slate-300 mb-2">
              What problem worries you most?
            </label>
            <select
              name="MMERGE6"
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              id="mce-MMERGE6"
            >
              <option value="">Select one...</option>
              <option value="Deepfakes">Deepfakes</option>
              <option value="Impersonation">Impersonation</option>
              <option value="Voice scams">Voice scams</option>
              <option value="Fake social media accounts">Fake social media accounts</option>
              <option value="AI-generated porn">AI-generated porn</option>
              <option value="Reputation damage">Reputation damage</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="mce-FNAME" className="block text-sm font-medium text-slate-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="FNAME"
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              id="mce-FNAME"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="mce-LNAME" className="block text-sm font-medium text-slate-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
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
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.02] mt-6"
          >
            Get Early Access
          </button>

          <p className="text-xs text-slate-500 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
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
