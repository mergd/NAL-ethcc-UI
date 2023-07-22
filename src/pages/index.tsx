import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'
import { Box, Flex, Heading, Text, Button, Image, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import NALLogo from 'assets/icons/NAL.png'
import flower from 'assets/flower.jpg'
export default function Home() {
  return (
    <>
      {/* <Head /> */}

      <main>
        <Box>
          <Flex align="center" justify="space-between" p={4}>
            <Image src={NALLogo.src} alt="NAL Logo" boxSize="50px" />
            <Stack direction="row" spacing={4}>
              <Link href="/lend">
                <Button colorScheme="blue" size="md">
                  Vote
                </Button>
              </Link>
              <Link href="/borrow">
                <Button colorScheme="blue" size="md">
                  Borrow
                </Button>
              </Link>
            </Stack>
          </Flex>
          <Box
            minH="xl"
            backgroundImage={`url(${flower.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box maxW="7xl" mx="auto" px={{ base: '6', lg: '8' }}>
              <Box textAlign={{ base: 'center', md: 'left' }}>
                <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
                  Lend and borrow with NAL protocol
                </Heading>
                <Box bg="blackAlpha.200" p={1}>
                  <Text fontSize="lg" fontWeight="medium" color="white">
                    NAL protocol is a decentralized lending platform that allows you to lend and borrow cryptocurrencies without intermediaries.
                  </Text>
                </Box>
                <Box mt="8" display="flex" justifyContent={{ base: 'center', md: 'left' }}>
                  <Link href="/lend">
                    <Button colorScheme="blue" size="lg" rounded="full" px={6} py={4} bg="blue.600" _hover={{ bg: 'blue.700' }}>
                      Lend now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="7xl" mx="auto" px={{ base: '6', lg: '8' }} py={16}>
            <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
              <Box flex="1" pr={{ base: '0', lg: '16' }} mb={{ base: '12', lg: '0' }}>
                <Heading mb="4" size="xl" fontWeight="extrabold" letterSpacing="tight">
                  Why use NAL protocol?
                </Heading>
                <Text fontSize="lg" fontWeight="medium">
                  NAL protocol offers several advantages over traditional lending platforms:
                </Text>
                <Box mt="4">
                  <Text fontSize="lg" fontWeight="medium">
                    - Secure: built on P2P rails, the contracts have high security.
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    - Collateralized: Loans are collateralized by borrower collateral and NGMI tokens.
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    - Efficient: If collateral isn't utilized, there's no debt against it.
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    - Easy to use: simple and intuitive interface
                  </Text>
                </Box>
              </Box>
              <Box flex="1" pl={{ base: '0', lg: '16' }}>
                <Image src={NALLogo.src} alt="NAL Logo" boxSize="200px" mx="auto" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </main>
    </>
  )
}
