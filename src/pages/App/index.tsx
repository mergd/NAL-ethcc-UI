import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'
import { PSM } from 'components/layout/PSM'
export default function App() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent as="h2">Next.js + Ethereum starter kit</HeadingComponent>
        <Text>Quickly ship Web3 Apps ⚡</Text>
        <Text py={4}>
          <LinkComponent href="examples">View examples</LinkComponent> to bootstrap development.
        </Text>
        <PSM />
      </main>
    </>
  )
}
