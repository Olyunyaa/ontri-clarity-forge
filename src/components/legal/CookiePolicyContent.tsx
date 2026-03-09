const CookiePolicyContent = () => (
  <div className="space-y-6">
    <p className="text-sm text-muted-foreground italic">Last updated: 9 March 2026</p>
    <p><strong>Olga Perova</strong>, trading as Ontrí Advisory<br />KVK: <strong>97101907</strong> | hello@ontri-advisory.com</p>

    <h3 className="text-lg font-semibold">1. What Are Cookies</h3>
    <p>Cookies are small text files placed on your device when you visit a website. They help websites function and provide usage information to site owners.</p>

    <h3 className="text-lg font-semibold">2. Cookies We Use</h3>
    <p>This Website currently uses only analytics cookies. We do not use strictly necessary cookies at this time. Should this change, this Policy will be updated accordingly.</p>

    <h4 className="text-base font-semibold">Analytics (consent required)</h4>
    <p>We use <strong>Google Analytics</strong> to understand how visitors use our Website. IP anonymisation is enabled. These cookies are only placed after you give consent.</p>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b"><th className="text-left py-2 pr-4">Cookie</th><th className="text-left py-2 pr-4">Provider</th><th className="text-left py-2 pr-4">Purpose</th><th className="text-left py-2">Duration</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-4">_ga</td><td className="py-2 pr-4">Google Analytics</td><td className="py-2 pr-4">Distinguishes unique users</td><td className="py-2">2 years</td></tr>
          <tr className="border-b"><td className="py-2 pr-4">_ga_*</td><td className="py-2 pr-4">Google Analytics</td><td className="py-2 pr-4">Session state</td><td className="py-2">2 years</td></tr>
          <tr className="border-b"><td className="py-2 pr-4">_gid</td><td className="py-2 pr-4">Google Analytics</td><td className="py-2 pr-4">Distinguishes users</td><td className="py-2">24 hours</td></tr>
          <tr className="border-b"><td className="py-2 pr-4">_gat</td><td className="py-2 pr-4">Google Analytics</td><td className="py-2 pr-4">Throttles request rate</td><td className="py-2">1 minute</td></tr>
        </tbody>
      </table>
    </div>

    <p>See <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="underline">Google's Cookie Policy</a> for further details.</p>

    <h3 className="text-lg font-semibold">3. Your Choices</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>Cookie banner:</strong> On your first visit, you can accept or decline analytics cookies.</li>
      <li><strong>Withdraw consent:</strong> Click <strong>Cookie Settings</strong> in the footer at any time.</li>
      <li><strong>Browser settings:</strong> You can delete or block cookies via your browser. Note that this may affect Website functionality.</li>
      <li><strong>Google opt-out:</strong> Use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline">Google Analytics Opt-out Add-on</a>.</li>
    </ul>

    <h3 className="text-lg font-semibold">4. Changes</h3>
    <p>We may update this Policy from time to time. The revised version will be posted on this page with an updated date.</p>

    <h3 className="text-lg font-semibold">5. Contact</h3>
    <p>Questions? Email us at hello@ontri-advisory.com.</p>

    <p className="text-sm italic text-muted-foreground">Olga Perova, trading as Ontrí Advisory — Heiloo, the Netherlands</p>
  </div>
);

export default CookiePolicyContent;
