import React from 'react';

export default function Pagination({
  currentPage = 1,
  totalItems = 0,
  pageSize = 20,
  onPageChange
}) {
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        start = 2;
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
        end = totalPages - 1;
      }

      pages.push(1);
      if (start > 2) {
        pages.push('...');
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageClick = (page) => {
    if (page === '...' || page === currentPage || page < 1 || page > totalPages) return;
    onPageChange(page);
    const targetElement = document.getElementById('colleges-listing-container') || document.querySelector('.col-md-9');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Page Info */}
      <div className="text-xs sm:text-sm text-slate-600 font-medium">
        Showing <strong className="text-slate-900 font-bold">{startIndex} - {endIndex}</strong> of <strong className="text-[#0966c2] font-bold">{totalItems}</strong> colleges (Page {currentPage} of {totalPages})
      </div>

      {/* Pagination Controls */}
      <nav className="flex items-center gap-1 sm:gap-1.5" aria-label="Colleges Pagination">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
            currentPage === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
              : 'bg-white text-slate-700 hover:bg-[#0966c2] hover:text-white border border-slate-200 shadow-xs hover:shadow-sm'
          }`}
        >
          ‹ Prev
        </button>

        {/* Numbered Page Buttons */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((p, idx) => {
            if (p === '...') {
              return (
                <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-400 font-bold text-xs select-none">
                  ...
                </span>
              );
            }
            const isActive = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => handlePageClick(p)}
                className={`min-w-8 sm:min-w-9 h-8 sm:h-9 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-[#0966c2] text-white shadow-xs scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
            currentPage === totalPages
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
              : 'bg-white text-slate-700 hover:bg-[#0966c2] hover:text-white border border-slate-200 shadow-xs hover:shadow-sm'
          }`}
        >
          Next ›
        </button>
      </nav>
    </div>
  );
}
