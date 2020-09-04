import React, { useContext } from 'react';
import classnames from 'classnames';
import { RESULTS_LIMIT } from '@actions';
import { fetchStudentList } from '@api';
import { Context } from '@store';


const NavLink = ({text, symbol, disabled}) => {
  if (disabled) {
    return (
      <a className="page-link" href="#" aria-label={text} tabIndex="-1" aria-disabled="true">
        <span aria-hidden="true">{symbol}</span>
      </a>
    );
  }
  return (
    <a className="page-link" href="#" aria-label={text}>
      <span aria-hidden="true">{symbol}</span>
    </a>
  );
}

const Pagination = () => {
  const [state, dispatch] = useContext(Context);
  const {
    pages,
    resultsCount,
  } = state;

console.log(pages, resultsCount);

  // we show pagination only if there are more results than the limiter allows
  if (resultsCount === 0 || resultsCount < RESULTS_LIMIT) return null;

  // current page number is equal to pages.length
  const currentPage = pages.length;

  // total pages is equal to ROUND UP(resultsCount / RESULTS_LIMIT)
  const totalPages = Math.ceil(resultsCount / RESULTS_LIMIT);

  // if current page is 1 previous button is disabled
  const previousBtnDisabled = currentPage === 1;
  
  // if current page is the total number of pages, next button is disabled
  const nextBtnDisabled = currentPage === totalPages;

  // firstPageName is 1 if the current page is less than equal to 2.
  const firstPageName = currentPage <= 2 ? 1 : currentPage - 1;

  // secondPageName is just one greater than firstPageNamei
  const secondPageName = firstPageName + 1;

  // thirdPageName is just one greater than secondPageName
  const thirdPageName = secondPageName + 1;
  
  const firstLinkClass = classnames('page-item', {
    active: currentPage === 1,
  });

  const secondLinkClass = classnames('page-item', {
    active: currentPage === secondPageName,
  });

  const thirdLinkClass = classnames('page-item', {
    disabled: thirdPageName > totalPages,
  });

  const previousBtnClass = classnames('page-item', {
    disabled: previousBtnDisabled,
  });

  const nextBtnClass = classnames('page-item', {
    disabled: nextBtnDisabled,
  });

  return (
    <nav aria-label="page navigation">
      <ul className="pagination">
        <li className={previousBtnClass}>
          <NavLink text="Previous" symbol="&laquo;" disabled={previousBtnDisabled} />
        </li>
        <li className={firstLinkClass}><a className="page-link" href="#">{firstPageName}</a></li>
        <li className={secondLinkClass}><a className="page-link" href="#">{secondPageName}</a></li>
        <li className={thirdLinkClass}><a className="page-link" href="#">{thirdPageName}</a></li>
        <li className={nextBtnClass}>
          <NavLink text="Previous" symbol="&raquo;" disabled={nextBtnDisabled} />
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
