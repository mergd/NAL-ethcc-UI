import React, { useState } from 'react'
import {
  Image,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  useColorModeValue,
  Button,
  Input,
  Badge,
  Icon,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'

export function OutstandingLoans() {
  const loans = [
    { id: 1, loanTime: '2022-01-01', collateral: '100 MKR', debt: '50 NAL', status: 'Ongoing' },
    { id: 2, loanTime: '2022-01-02', collateral: '200 sDAI', debt: '100 NAL', status: 'Ongoing' },
    { id: 3, loanTime: '2022-01-03', collateral: '300 RDT', debt: '150 NAL', status: 'Ongoing' },
    { id: 4, loanTime: '2022-01-04', collateral: '400 GA', debt: '200 NAL', status: 'Liquidated' },
  ]

  return (
    <Card>
      <CardHeader>
        <Text as="b" fontSize="3xl">
          {' '}
          Outstanding Loans{' '}
        </Text>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Loan Time</Th>
                <Th>Collateral</Th>
                <Th>Debt</Th>
              </Tr>
            </Thead>
            <Tbody>
              {loans.map((loan) => (
                <Tr key={loan.id}>
                  <Td>{loan.status === 'Liquidated' ? <Badge colorScheme="red">Liquidated</Badge> : loan.loanTime}</Td>
                  <Td>{loan.collateral}</Td>
                  <Td>{loan.debt}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  )
}
