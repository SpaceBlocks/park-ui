import type { Meta } from 'storybook-solidjs'
import { Code } from '~/components/ui/code'

const meta: Meta = {
  title: 'Components/Code',
}

export default meta

export const Base = () => <Code>@park-ui/panda-preset</Code>