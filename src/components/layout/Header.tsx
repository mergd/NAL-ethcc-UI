import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading } from '@chakra-ui/react'
import { SITE_NAME } from 'utils/config'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Web3Button } from '@web3modal/react'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="header" className="navbar" bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>
      <Spacer />
      <Flex alignItems="center" gap={10}>
        <LinkComponent href="/app">
          <Heading as="h2" size="sm">
            App
          </Heading>
        </LinkComponent>
        <LinkComponent href="/docs">
          <Heading as="h2" size="sm">
            Docs
          </Heading>
        </LinkComponent>
        <LinkComponent href="/vote">
          <Heading as="h2" size="sm">
            Vote
          </Heading>
        </LinkComponent>
      </Flex>
      <Spacer />

      <Flex alignItems="center" gap={4}>
        <Web3Button icon="hide" label="Connect" />
        <ThemeSwitcher />
      </Flex>
    </Flex>
  )
}
