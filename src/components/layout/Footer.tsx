import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { LinkComponent } from './LinkComponent'
import { SITE_DESCRIPTION, SOCIAL_GITHUB, SOCIAL_TWITTER } from 'utils/config'
import push from 'assets/icons/push.png'
import Image from 'next/image'
interface Props {
  className?: string
}

export function Footer(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="footer" className={className} flexDirection="column" justifyContent="center" alignItems="center" my={8}>
      <Text>{SITE_DESCRIPTION}</Text>

      <Flex color="gray.500" gap={2} alignItems="center" mt={2}>
        <LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`}>
          <FaGithub />
        </LinkComponent>
        <LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`}>
          <FaTwitter />
        </LinkComponent>
        <LinkComponent
          href={`https://staging.push.org/channels?channel=0x854022C72768AC5605A9cE742D057681f5358ab4
`}>
          <Image src={push.src} alt="push" width={20} height={20} />
        </LinkComponent>
      </Flex>
    </Flex>
  )
}
