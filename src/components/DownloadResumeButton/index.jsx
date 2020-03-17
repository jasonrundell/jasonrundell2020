import React from 'react'

// CSS
import styles from './DownloadResumeButton.module.scss'

const DownloadResumeButton = () => {
  return (
    <div style={{ width: '100%', textAlign: 'right' }}>
      <a href="/jason-rundell-web-developer-resume.pdf" className={styles.root}>
        <span className={styles.text}>Download résumé</span>
        <svg
          className={styles.arrowIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="#e9be62"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <circle
              className={styles.arrowIconCircle}
              cx="16"
              cy="16"
              r="14.12"
            ></circle>
            <path
              className={styles.arrowIconArrow}
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  )
}

export default DownloadResumeButton
