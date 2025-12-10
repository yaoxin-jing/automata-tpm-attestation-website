import React from 'react';
import { ArrowDown, Layers, Box, ShieldCheck, FileKey, FileCode } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="relative w-full p-8 border border-charcoal-700 bg-charcoal-800/30 rounded-2xl">
      <h3 className="text-sm font-semibold tracking-wider text-fresh-400 uppercase mb-8 text-center">Smart Contract Hierarchy</h3>
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Level 1: Main Contract */}
        <div className="relative z-10 w-full max-w-lg p-6 rounded-xl border border-fresh-400/30 bg-charcoal-800 shadow-[0_0_30px_-10px_rgba(74,222,128,0.1)] hover:border-fresh-400/60 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-fresh-400/10 text-fresh-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="font-semibold text-white">TpmAttestation.sol</div>
              <div className="text-sm text-slate-400">Main Entry Point & Verification Logic</div>
            </div>
          </div>
        </div>

        <ArrowDown className="text-charcoal-600 animate-bounce" />

        {/* Level 2: Inheritance */}
        <div className="w-full max-w-lg p-4 rounded-lg border border-charcoal-600 bg-charcoal-800/50">
          <div className="flex items-center gap-3">
            <Layers size={18} className="text-slate-400" />
            <div className="font-medium text-slate-200">CertChainRegistry.sol</div>
          </div>
          <div className="mt-2 text-xs text-slate-500 pl-8">Handles CA registration and certificate chain validation</div>
        </div>

        <div className="w-[1px] h-8 bg-charcoal-600"></div>

        {/* Level 3: Libraries grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          
          <div className="p-4 rounded-lg border border-charcoal-700 bg-charcoal-800/50 hover:bg-charcoal-700/50 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-fresh-400/80">
              <FileKey size={16} />
              <span className="font-medium text-sm">Crypto.sol</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              RSA (PKCS#1) & ECDSA (P256) signature verification.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-charcoal-700 bg-charcoal-800/50 hover:bg-charcoal-700/50 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-fresh-400/80">
              <FileCode size={16} />
              <span className="font-medium text-sm">LibX509.sol</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              X.509 Certificate parsing and structure validation.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-charcoal-700 bg-charcoal-800/50 hover:bg-charcoal-700/50 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-fresh-400/80">
              <Box size={16} />
              <span className="font-medium text-sm">Asn1Decode.sol</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Low-level ASN.1 DER parsing for byte structures.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
