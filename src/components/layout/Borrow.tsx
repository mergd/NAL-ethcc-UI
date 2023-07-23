import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export function MintAndBorrowCard() {
  const [mintAmount, setMintAmount] = useState('')
  const [borrowAmount, setBorrowAmount] = useState('')

  const handleMint = () => {
    // Handle minting wBTC collateral
  }

  const handleBorrow = () => {
    // Handle borrowing tokens
  }

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={useColorModeValue('md', 'dark-lg')}>
      <Box p="6">
        <Box className="flex" alignItems="baseline">
          <Heading size="md" fontWeight="semibold" color={useColorModeValue('gray.800', 'white')}>
            Deposit and Borrow
          </Heading>
        </Box>

        <Box mt="4">
          <FormControl id="mintAmount">
            <FormLabel>Deposit wBTC collateral</FormLabel>
            <Input type="number" value={mintAmount} onChange={(e) => setMintAmount(e.target.value)} />
          </FormControl>

          <FormControl id="borrowAmount" mt="4">
            <FormLabel>Borrow tokens</FormLabel>
            <Input type="number" value={borrowAmount} onChange={(e) => setBorrowAmount(e.target.value)} />
          </FormControl>

          <Stack mt="6" direction={['column', 'row']} spacing="4">
            <Button colorScheme="blue" onClick={handleMint}>
              Mint
            </Button>
            <Button colorScheme="green" onClick={handleBorrow}>
              Borrow
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
