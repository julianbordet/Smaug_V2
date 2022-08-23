import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";

function Items({ currentItems }) {
    return (
        <>
            {currentItems.map((transaction) => (
                <tr>
                    <th>{transaction.date}</th>
                    <th>{transaction.transactionTitle}</th>
                    <th>{transaction.transactionDetail}</th>
                    <th>{transaction.createdBy}</th>
                </tr>
            ))}
        </>
    );
}

const PaginatedBugTransactions = ({ itemsPerPage, bugSelected }) => {

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(null);

    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(bugSelected.bugTransactions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(bugSelected.bugTransactions.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);



    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bugSelected.bugTransactions.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    return (
        <>
            {currentItems &&

                <React.Fragment>

                    <Items currentItems={currentItems} />
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />

                </React.Fragment>

            }

        </>
    );
}

export default PaginatedBugTransactions;