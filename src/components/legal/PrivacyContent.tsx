const PrivacyContent = () => (
  <div className="space-y-6">
    <p className="text-sm text-muted-foreground italic">Last updated: 9 March 2026</p>
    <p><strong>Olga Perova</strong>, trading as Ontrí Advisory<br />KVK: <strong>97101907</strong> | hello@ontri-advisory.com</p>

    <h3 className="text-lg font-semibold">1. Who We Are</h3>
    <p>This Website is operated by <strong>Olga Perova</strong>, trading as Ontrí Advisory (KVK: <strong>97101907</strong>), based in Heiloo, the Netherlands. For questions about this Policy, contact us at hello@ontri-advisory.com.</p>

    <h3 className="text-lg font-semibold">2. Data We Collect</h3>
    <p><strong>Automatically via Google Analytics (anonymised):</strong> IP address, browser type, pages visited, time on site, referring URL, and visit timestamps. IP anonymisation is enabled.</p>
    <p><strong>Via email:</strong> If you contact us directly, we process your name and email address solely to respond to your enquiry.</p>
    <p>We do not operate a contact form or newsletter subscription.</p>

    <h3 className="text-lg font-semibold">3. Legal Basis</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b"><th className="text-left py-2 pr-4">Data</th><th className="text-left py-2">Legal basis</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-4">Analytics data</td><td className="py-2">Consent (Art. 6(1)(a) GDPR)</td></tr>
          <tr className="border-b"><td className="py-2 pr-4">Email correspondence</td><td className="py-2">Legitimate interests (Art. 6(1)(f) GDPR)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-lg font-semibold">4. Retention</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>Analytics data:</strong> 14 months, after which it is automatically deleted in Google Analytics.</li>
      <li><strong>Email correspondence:</strong> Up to 2 years, unless a longer period is required by law.</li>
    </ul>

    <h3 className="text-lg font-semibold">5. Third Parties</h3>
    <p>Analytics data is processed by <strong>Google LLC</strong> under Standard Contractual Clauses. We do not sell or share your personal data with third parties for their own commercial purposes. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google's Privacy Policy</a> for details.</p>

    <h3 className="text-lg font-semibold">6. Your Rights</h3>
    <p>Under GDPR, you have the right to access, rectify, erase, restrict, or port your data, and to object to processing or withdraw consent at any time. To exercise any right, email hello@ontri-advisory.com. We will respond within one month.</p>
    <p>You may also lodge a complaint with the Dutch Data Protection Authority:<br /><strong>Autoriteit Persoonsgegevens</strong>, autoriteitpersoonsgegevens.nl, +31 70 888 85 00</p>

    <h3 className="text-lg font-semibold">7. Cookies</h3>
    <p>For details on how we use cookies, see our Cookie Policy.</p>

    <h3 className="text-lg font-semibold">8. Changes</h3>
    <p>We may update this Policy periodically. The revised version will be posted on this page with an updated date. By continuing to use the Website after changes are posted, you acknowledge that you have been informed about the processing of personal data as described in the updated Policy.</p>

    <p className="text-sm italic text-muted-foreground">Olga Perova, trading as Ontrí Advisory, Heiloo, the Netherlands</p>
  </div>
);

export default PrivacyContent;
