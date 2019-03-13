const { InnerBlocks } = wp.editor
import { columns } from './styled'

const TEMPLATE = [
  ['core/heading'],
  ['core/paragraph'],
]

const ALLOWED_BLOCKS = [
  'core/paragraph'
]

const TEMPLATE_LOCK = "ALL"

const edit = (props) => {
  const {
    className,
    attributes,
  } = props

  return (
    <div className={className}>
      <div className={columns.container}>
        <div className={columns.one}>
          <h1>Bold Headline, Bruh.</h1>
        </div>
        <div className={columns.one}>
          <InnerBlocks
            template={ TEMPLATE }
            allowedBlocks={ ALLOWED_BLOCKS }
            templateLock={ TEMPLATE_LOCK }
          />
        </div>
      </div>
    </div>
  )
}

export default edit