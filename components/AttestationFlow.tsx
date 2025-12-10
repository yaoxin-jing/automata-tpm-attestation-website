import React from 'react';
import { Play, FileSignature, CheckCircle2, Lock } from 'lucide-react';

const steps = [
  {
    title: "Measurement",
    icon: Lock,
    desc: "Oracle node's TPM measures boot process and software into Platform Configuration Registers (PCRs)."
  },
  {
    title: "Quote Generation",
    icon: FileSignature,
    desc: "TPM generates a signed quote containing PCR digests and a signature using its Attestation Key."
  },
  {
    title: "Submission",
    icon: Play,
    desc: "The oracle node submits the data payload along with the TPM quote to the smart contract."
  },
  {
    title: "Verification",
    icon: CheckCircle2,
    desc: "Contract verifies the signature, validates the certificate chain, and checks PCR values against the golden standard."
  }
];

export const AttestationFlow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((step, idx) => (
        <div key={idx} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-transparent rounded-xl -z-10" />
          <div className="h-full p-6 border border-charcoal-700 rounded-xl hover:border-fresh-400/40 transition-all duration-500 hover:shadow-[0_0_20px_-10px_rgba(74,222,128,0.2)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-light text-charcoal-700 group-hover:text-fresh-900 transition-colors">
                0{idx + 1}
              </span>
              <div className="p-2 rounded-full bg-charcoal-700/50 text-fresh-400">
                <step.icon size={20} />
              </div>
            </div>
            <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {step.desc}
            </p>
          </div>
          {idx !== steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-charcoal-600 z-20" />
          )}
        </div>
      ))}
    </div>
  );
};
