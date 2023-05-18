import React from 'react'

export default function Pagination({
    totalProducts,
    productsPerPage,
    setCurrentPage,
    currentPage,
}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className="flex flex-row items-center justify-center">
            {pages.map((page, index) => {
                return (
                    <button>
                        {page}
                    </button>
                );
            })}
        </div>
    )
}
