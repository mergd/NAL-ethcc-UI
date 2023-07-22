export const contracts = {
  controller: {
    address: {
      sepolia: '0x25A1DF485cFBb93117f12fc673D87D1cddEb845a',
      zkSyncTestnet: '0xa0C21F3f1359f45890f918CFd340361CcD91627B',
      celoAlfajores: '0x94E9b8A9bf9C7d8e8A3AF85A387b1CbFf2a47884',
      gnosisChiado: '0x94E9b8A9bf9C7d8e8A3AF85A387b1CbFf2a47884',
      polygonZkEvmTestnet: '0xb76633e091B70b41Fbc7c1D865Fa20bC41B242A3',
      //todo: change addresses and update after deploy
    },
    abi: [
      {
        inputs: [
          {
            internalType: 'contract LoanCoordinator',
            name: '_coordinator',
            type: 'address',
          },
          {
            internalType: 'contract ERC20',
            name: '_debt',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'borrower',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'lender',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'collateralToken',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'debtToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'collateralAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'debtAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'interestRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'startingTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'duration',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'terms',
                type: 'uint256',
              },
            ],
            internalType: 'struct Loan',
            name: 'loan',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'lenderReturn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'borrowerReturn',
            type: 'uint256',
          },
        ],
        name: 'auctionSettledHook',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'borrower',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'lender',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'collateralToken',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'debtToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'collateralAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'debtAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'interestRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'startingTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'duration',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'terms',
                type: 'uint256',
              },
            ],
            internalType: 'struct Loan',
            name: '',
            type: 'tuple',
          },
        ],
        name: 'getQuote',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'loan',
            type: 'uint256',
          },
        ],
        name: 'liquidate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'borrower',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'lender',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'collateralToken',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'debtToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'collateralAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'debtAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'interestRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'startingTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'duration',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'terms',
                type: 'uint256',
              },
            ],
            internalType: 'struct Loan',
            name: 'loan',
            type: 'tuple',
          },
        ],
        name: 'loanRepaidHook',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'borrower',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'lender',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'collateralToken',
                type: 'address',
              },
              {
                internalType: 'contract ERC20',
                name: 'debtToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'collateralAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'debtAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'interestRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'startingTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'duration',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'terms',
                type: 'uint256',
              },
            ],
            internalType: 'struct Loan',
            name: 'loan',
            type: 'tuple',
          },
          {
            internalType: 'bytes32',
            name: 'data',
            type: 'bytes32',
          },
        ],
        name: 'verifyLoan',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
}
