import { useState } from 'react';
import { submitToWeb3Forms } from '../lib/web3forms';

/**
 * Wires a <form>'s onSubmit to Web3Forms and tracks submission status.
 * `source` identifies which page/form the lead came from (e.g. "Child Care Page — Appointment Form").
 */
export function useWeb3Form(source) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToWeb3Forms(e.target, source);
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setErrorMessage(result.message || '');
        setStatus('error');
      }
    } catch (err) {
      console.error('[web3forms] network/unexpected error:', err);
      setErrorMessage(err?.message || '');
      setStatus('error');
    }
  };

  return { handleSubmit, status, errorMessage };
}
