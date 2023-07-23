import { Text, Box, Grid, GridItem, Card } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'
import { PSM } from 'components/layout/PSM'
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useNetwork, erc20ABI } from 'wagmi'

import { MintAndBorrowCard } from 'components/layout/Borrow'
import { OutstandingLoans } from 'components/layout/OutstandingLoans'
export default function App() {
  const { isConnected } = useAccount()
  const dapp = (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <Box style={{ gridArea: '1 / 4 / 3 / 5' }}>
        <MintAndBorrowCard />
      </Box>
      <Box style={{ gridArea: '1 / 2 / 2 / 4' }}>
        <PSM />
      </Box>
      <Box style={{ gridArea: '1 / 1 / 3 / 2' }}>
        <OutstandingLoans />
      </Box>
    </Grid>
  )
  const notConnected = (
    <Card>
      <Text fontSize="2xl">Connect your wallet to view your portfolio</Text>
    </Card>
  )
  return (
    <>
      <Head />

      <main>
        {isConnected && dapp}
        {!isConnected && notConnected}
      </main>
    </>
  )
}
