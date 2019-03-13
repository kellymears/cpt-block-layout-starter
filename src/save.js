const { InnerBlocks } = wp.editor
import { columns } from './styled'

const save = ({ attributes }) => {
  return (
    <div className={columns.container}>
      <div className={columns.one}>
        <h1>Bold Headline, Bruh.</h1>
      </div>
      <div className={columns.one}>
        <InnerBlocks.Content />
      </div>
    </div>
  )
}

export default save
