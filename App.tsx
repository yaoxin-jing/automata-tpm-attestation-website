import React from 'react';
import { HeroGlobe } from './components/HeroGlobe';
import { Glyph } from './components/Glyph';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { AttestationFlow } from './components/AttestationFlow';
import { Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-300 font-sans selection:bg-fresh-400/20 selection:text-fresh-400">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-charcoal-900/80 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-fresh-400 animate-pulse-slow"></div>
            <span className="font-semibold text-white tracking-tight text-lg">Automata <span className="text-slate-500 font-light">TPM</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#details" className="hover:text-white transition-colors">Technical Details</a>
          </div>
          <a 
            href="https://github.com/automata-network/automata-tpm-attestation" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-xs font-medium hover:border-fresh-400/50 hover:text-white transition-all"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="relative px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fresh-900/20 border border-fresh-400/20 text-fresh-400 text-xs font-semibold uppercase tracking-widest">
              <span>On-Chain Verification</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight">
              Trust Hardware <br />
              on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-400 to-emerald-600">Blockchain</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-fresh-400/30 pl-6">
              Cryptographically validate hardware-backed security proofs directly in Solidity. 
              Enable <Glyph type="nodes" label="nodes" /> to prove they are running the expected software stack without centralized intermediaries.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/automata-network/automata-tpm-attestation#readme"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-white text-charcoal-900 font-semibold hover:bg-slate-200 transition-colors"
              >
                Read Documentation
              </a>
              <a
                href="https://github.com/automata-network/automata-tpm-attestation#deployed-contracts"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-charcoal-600 hover:border-fresh-400/50 hover:text-white transition-colors"
              >
                View Deployed Contracts
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <HeroGlobe />
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="px-6 py-24 bg-charcoal-800/30 border-y border-charcoal-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-fresh-400"></span>
              The Trust Gap
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-200">Without TPM Attestation</h3>
                <p className="text-slate-400 leading-relaxed">
                  In a typical decentralized oracle network, you must blindly trust that each node is honest. 
                  A malicious operator could modify the <Glyph type="code" label="software" /> to report manipulated data, 
                  and there's no way to detect this on-chain.
                </p>
                <div className="p-4 rounded border border-red-500/20 bg-red-500/5 text-red-200/70 text-sm">
                  Risk: "Black Box" Execution
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-fresh-400">With TPM Attestation</h3>
                <p className="text-slate-400 leading-relaxed">
                  Your smart contract verifies a TPM quote. The TPM hardware chip cryptographically proves exactly what 
                  <Glyph type="compute" label="compute" /> environment is running. If the software hash doesn't match the "golden" measurement, 
                  the transaction is rejected.
                </p>
                <div className="p-4 rounded border border-fresh-400/20 bg-fresh-400/5 text-fresh-200/70 text-sm">
                  Benefit: Proof of Execution
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
             <span className="text-fresh-400 text-xs font-bold tracking-widest uppercase mb-2">Workflow</span>
             <h2 className="text-3xl font-light text-white">How Verification Works</h2>
          </div>
          <AttestationFlow />
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="px-6 py-24 bg-charcoal-800/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">Modular Architecture</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The library handles the complete verification pipeline: validating certificate chains against 
                trusted Certificate Authorities, verifying TPM quote signatures, and checking <Glyph type="hardware" label="PCR" /> measurements.
              </p>
              <ul className="space-y-4 text-slate-400 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fresh-400" />
                  <span><strong className="text-slate-200">LibX509</strong>: Parses and validates the complex certificate structures required for hardware attestation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fresh-400" />
                  <span><strong className="text-slate-200">Crypto</strong>: Supports RSA (PKCS#1) and ECDSA (P256) verification, utilizing precompiles where available for gas efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fresh-400" />
                  <span><strong className="text-slate-200">CertChainRegistry</strong>: Maintains the list of trusted CAs, ensuring only valid hardware vendors are accepted.</span>
                </li>
              </ul>
            </div>
            <ArchitectureDiagram />
          </div>
        </section>

        {/* Technical Details Grid */}
        <section id="details" className="px-6 py-24 max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 border-b border-charcoal-700 pb-4">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Spec 1 */}
            <div className="bg-charcoal-800/40 p-6 rounded-xl border border-charcoal-700">
               <h3 className="text-lg font-medium text-white mb-3">Cryptographic Support</h3>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Supports RSA verification using PKCS#1 SHA256 (min 2048-bit modulus). 
                 For ECDSA P256, it integrates with RIP-7212 precompiles or daimo-eth verifier contracts.
               </p>
            </div>

            {/* Spec 2 */}
            <div className="bg-charcoal-800/40 p-6 rounded-xl border border-charcoal-700">
               <h3 className="text-lg font-medium text-white mb-3">Gas Optimization</h3>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Includes certificate caching to avoid re-verification, leaf key caching by hash, 
                 PCR selection compression via bitmaps, and optimized calldata usage.
               </p>
            </div>

            {/* Spec 3 */}
            <div className="bg-charcoal-800/40 p-6 rounded-xl border border-charcoal-700">
               <h3 className="text-lg font-medium text-white mb-3">Development</h3>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Built with Foundry. Run <code className="text-fresh-400 bg-charcoal-900 px-1 py-0.5 rounded text-xs">forge test</code> to 
                 validate against real TPM quote data from Google Cloud Confidential Space CVMs.
               </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-charcoal-800 bg-charcoal-900 text-slate-500 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Automata Network. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
               <a href="#" className="hover:text-fresh-400 transition-colors">Documentation</a>
               <a href="#" className="hover:text-fresh-400 transition-colors">Explorer</a>
               <a href="#" className="hover:text-fresh-400 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
