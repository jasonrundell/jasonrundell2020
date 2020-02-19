import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import SkipToMain from '../SkipToMain'

import 'antd/dist/antd.css'
import '../../styles/antd-overrides.scss'

import styles from './Layout.module.scss'

const { Content, Footer } = Layout

const _Layout = ({ children }) => {
  return (
    <>
      <SkipToMain />
      <Content id="main" className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        Jason Rundell © {new Date().getFullYear()}. All rights reserved.
      </Footer>
    </>
  )
}

_Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default _Layout
