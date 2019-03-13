const { createElement } = wp.element
const { registerBlockType } = wp.blocks

import edit from './edit'
import save from './save'

registerBlockType('simple/two-column', {
  title: "Two Column",
  description: "A simple demonstration block",
  icon: "schedule",
  category: "common",
  attributes: {},
  edit,
  save,
  supports: {
    inserter: false,
  },
})
