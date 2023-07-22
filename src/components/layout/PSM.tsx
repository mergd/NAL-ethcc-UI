import React, { useState } from 'react'
import { Image, Text, Box, Card, CardBody, Flex, useColorModeValue, Button, Input, Icon } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { FiArrowDown } from 'react-icons/fi'

import NALIcon from 'assets/icons/NAL.png'
import DAI from 'assets/icons/DAI.png'
export function PSM() {
  const [daiAmount, setDaiAmount] = useState<number | undefined>(undefined)

  const handleDaiAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value)
    if (!isNaN(amount)) {
      setDaiAmount(amount)
    } else {
      setDaiAmount(0)
    }
  }
  return (
    <div>
      <Card maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <CardBody>
          <Text as="b" fontSize="3xl">
            {' '}
            PSM
          </Text>
          <Text fontSize="xl"> Mint NAL with DAI</Text>
          <Flex direction="column" align="center" justify="center">
            <Box position="relative">
              <Image src={DAI.src} alt="DAI Token" boxSize="30px" position="absolute" top="50%" right="10%" transform="translateY(-50%)" />
              <Input
                placeholder="0.00"
                size="lg"
                my={4}
                textAlign="left"
                pl="20px"
                onChange={handleDaiAmountChange}
                type="number"
                min="0"
                step="0.01"
                w="full"
              />
            </Box>
            <Icon as={FiArrowDown} boxSize="30px" color="gray.500" />
          </Flex>

          <Flex direction="column" align="center" justify="center">
            <Box position="relative">
              <Image src={NALIcon.src} alt="NAL Token" boxSize="30px" position="absolute" top="50%" right="10%" transform="translateY(-50%)" />
              <Input placeholder="0.00" size="lg" my={4} textAlign="left" pl="20px" w="full" value={daiAmount} />
            </Box>
          </Flex>
          <Button colorScheme="blue" size="lg" mt={4}>
            Mint Token
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
