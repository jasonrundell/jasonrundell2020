import React from 'react'

// CSS
import {
  root,
  text,
  arrowIcon,
  arrowIconCircle,
  arrowIconArrow,
} from './DownloadResumeButton.module.scss'

import resumePdf from '../../assets/jason-rundell-web-developer-resume.pdf'

const DownloadResumeButton = () => {
  return (
    <div style={{ width: '100%', textAlign: 'right' }}>
      <a href={resumePdf} className={root}>
        <span className={text}>Download résumé</span>
        <svg
          className={arrowIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="#e9be62"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <circle
              className={arrowIconCircle}
              cx="16"
              cy="16"
              r="14.12"
            ></circle>
            <path
              className={arrowIconArrow}
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  )
}

export default DownloadResumeButton
