import type { Layout } from '~/lib/types'

import { styles } from './styles'

const TopicLayout: Layout = ({ children }) => (
  <div className={styles.layout()}>{children}</div>
)

export default TopicLayout
