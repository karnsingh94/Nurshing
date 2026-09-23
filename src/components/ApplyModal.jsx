import { useState, useEffect, useRef } from 'react';
import EnquiryForm from './EnquiryForm.jsx';

const SUBMITTED_STORAGE_KEY = "admission_enquiry_submitted_v2";
const INITIAL_POPUP_DELAY_MS = 3000; // 3 seconds on website visit
const RECURRING_POPUP_INTERVAL_MS = 60 * 1000; // 1 minute interval after close

export default function ApplyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [collegeName, setCollegeName] = useState('');
  const popupTimerRef = useRef(null);
  const hasTriggeredInitialPopupRef = useRef(false);

  // Expose helper to easily reset popup status in browser console if testing
  useEffect(() => {
    window.resetEnquiryPopup = () => {
      try {
        localStorage.removeItem(SUBMITTED_STORAGE_KEY);
        localStorage.removeItem('enquiry_form_submitted');
        console.log('Enquiry popup status reset. Refreshing page...');
        window.location.reload();
      } catch (e) {}
    };
  }, []);

  // Initial visit popup (after 3s) + recurring every 1 minute after close until form is submitted
  useEffect(() => {
    const isAlreadySubmitted = () => {
      try {
        return localStorage.getItem(SUBMITTED_STORAGE_KEY) === 'true';
      } catch (e) {
        return false;
      }
    };

    if (isAlreadySubmitted()) return;

    const triggerPopup = () => {
      if (isAlreadySubmitted()) return;
      setCollegeName('Admission Advisory Desk');
      setIsOpen(true);
    };

    if (!isOpen) {
      if (!hasTriggeredInitialPopupRef.current) {
        hasTriggeredInitialPopupRef.current = true;
        popupTimerRef.current = setTimeout(triggerPopup, INITIAL_POPUP_DELAY_MS);
      } else {
        popupTimerRef.current = setTimeout(triggerPopup, RECURRING_POPUP_INTERVAL_MS);
      }
    }

    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOpenModal = (event) => {
      const detail = event.detail || {};
      const targetCollege = detail.collegeName || '';
      setCollegeName(targetCollege);
      setIsOpen(true);
    };

    window.addEventListener('open-apply-modal', handleOpenModal);

    // Global delegate click handler for any lead CTA / Apply Now button
    const handleGlobalClick = (e) => {
      const target = e.target.closest('.leadFilterData, .download__brochure, .primaryBtn, [data-lead_cta], .apply-now-btn, a[href*="login"], .writeReview');
      if (target) {
        const text = (target.textContent || target.getAttribute('data-title') || '').toLowerCase();
        if (
          target.classList.contains('leadFilterData') ||
          target.classList.contains('download__brochure') ||
          target.getAttribute('data-lead_cta') ||
          target.classList.contains('apply-now-btn') ||
          text.includes('apply') ||
          text.includes('download') ||
          text.includes('sign-up')
        ) {
          e.preventDefault();
          e.stopPropagation();
          const card = target.closest('.college__card__new, .displayCard, .collegeCard, .dataCard');
          const extractedCollege = target.getAttribute('data-description') ||
            card?.querySelector('.college__name a, .widgetCardHeading, h2, h3')?.textContent?.trim() || '';

          window.dispatchEvent(new CustomEvent('open-apply-modal', {
            detail: { collegeName: extractedCollege }
          }));
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('open-apply-modal', handleOpenModal);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-[560px] bg-white rounded-[28px] shadow-2xl p-6 sm:p-8 transform transition-all overflow-hidden border border-blue-100/80 max-h-[92vh] overflow-y-auto modal-no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors p-2 rounded-full cursor-pointer z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <EnquiryForm
          collegeName={collegeName}
          isModal={true}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}
