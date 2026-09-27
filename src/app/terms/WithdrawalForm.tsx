// EU model withdrawal form (Directive 2011/83/EU, Annex I(B)), filled in with our details.
export default function WithdrawalForm() {
  return (
    <>
      <h2 id="withdrawal-form" className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Annex: Model Withdrawal Form</h2>
      <p className="mt-6">
        (Complete and return this form only if you wish to withdraw from the contract.)
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-2">
        <li>To: TK MEDIA S.à r.l.-S, 13, In Bedigen, L-9283 Diekirch, Luxembourg, email: <a href="mailto:support@expensemate.app" className="text-primary hover:text-primary/80">support@expensemate.app</a></li>
        <li>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service: ExpenseMate Premium</li>
        <li>Ordered on</li>
        <li>Name of consumer(s)</li>
        <li>Address of consumer(s)</li>
        <li>Signature of consumer(s) (only if this form is notified on paper)</li>
        <li>Date</li>
      </ul>
      <p className="mt-4">(*) Delete as appropriate.</p>
    </>
  );
}
