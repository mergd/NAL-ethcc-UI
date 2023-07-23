import React, { useState } from 'react'
import { Box, Button, Flex, Card, Table, Thead, Tbody, Tr, Th, Td, Badge } from '@chakra-ui/react'

export default function VotingPage() {
  const [votes, setVotes] = useState([
    { id: 1, collateral: 'wBTC', status: 'active', debtCeiling: '100M', utilization: '50%', apy: '5%', bribes: '10 ETH', voteCount: 100, badDebt: 0 },
    { id: 2, collateral: 'ETH', status: 'active', debtCeiling: '200M', utilization: '75%', apy: '7%', bribes: '5 ETH', voteCount: 50, badDebt: 0 },
    {
      id: 3,
      collateral: 'APE',
      status: 'inactive',
      debtCeiling: '50M',
      utilization: '25%',
      apy: '3%',
      bribes: '2 ETH',
      voteCount: 20,
      badDebt: 1378,
    },
  ])

  const handleVote = (id: number) => {
    // Handle voting for a proposal
  }

  return (
    <Box p="6">
      <Card>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Collateral</Th>
              <Th>Status</Th>
              <Th>Debt Ceiling / Utilization</Th>
              <Th>APY</Th>
              <Th>Bribes</Th>
              <Th>Votes</Th>
              <Th>Vote</Th>
            </Tr>
          </Thead>
          <Tbody>
            {votes.map((vote) => (
              <Tr key={vote.id}>
                <Td>{vote.collateral}</Td>
                <Td>
                  {vote.status === 'active' ? (
                    <Badge colorScheme="green">Active</Badge>
                  ) : (
                    <Box>
                      <Badge colorScheme="red">Bad Debt</Badge>
                      <p>{vote.badDebt} N </p>{' '}
                    </Box>
                  )}
                </Td>
                <Td>
                  {vote.debtCeiling} / {vote.utilization}
                </Td>
                <Td>{vote.apy}</Td>
                <Td>{vote.bribes}</Td>
                <Td>{vote.voteCount}</Td>
                <Td>
                  <Button colorScheme="blue" onClick={() => handleVote(vote.id)}>
                    Vote
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  )
}
