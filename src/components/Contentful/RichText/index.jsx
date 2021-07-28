import React from 'react'
import PropTypes from 'prop-types'
/**
 * BLOCK definitions: https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/blocks.ts
 * MARKS definitions: https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/marks.ts
 */
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
/** https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/ */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Strong, Paragraph, Title } from '../../Typography'

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Strong>{text}</Strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (node, children) => <Title level={1}>{children}</Title>,
    [BLOCKS.HEADING_2]: (node, children) => <Title level={2}>{children}</Title>,
    [BLOCKS.HEADING_3]: (node, children) => <Title level={3}>{children}</Title>,
    [BLOCKS.HEADING_4]: (node, children) => <Title level={4}>{children}</Title>,
  },
}

const RichText = ({ children }) => {
  return documentToReactComponents(children, options)
}

RichText.propTypes = { children: PropTypes.any.isRequired }

export default RichText
