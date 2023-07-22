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
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'loanId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'startingPrice',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'startingTime',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'endingPrice',
            type: 'uint256',
          },
        ],
        name: 'AuctionCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'loanId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'AuctionReclaimed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'auction',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'bidder',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
        ],
        name: 'AuctionSettled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'borrower',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'lender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'contract ERC20',
            name: 'collateralToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'contract ERC20',
            name: 'debtToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'debtAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'interestRate',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'startingTime',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'terms',
            type: 'uint256',
          },
        ],
        name: 'LoanCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'borrower',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'lender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'LoanRepaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'termId',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'liquidationBonus',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'dutchAuctionMultiplier',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'settlementMultiplier',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct Terms',
            name: 'term',
            type: 'tuple',
          },
        ],
        name: 'TermsSet',
        type: 'event',
      },
      {
        inputs: [],
        name: 'SCALAR',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'auctions',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'loanId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startingPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startingTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endingPrice',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_auctionId',
            type: 'uint256',
          },
        ],
        name: 'bid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'borrowerLoans',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_lender',
            type: 'address',
          },
          {
            internalType: 'contract ERC20',
            name: '_collateral',
            type: 'address',
          },
          {
            internalType: 'contract ERC20',
            name: '_debt',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_debtAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_interestRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_duration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_terms',
            type: 'uint256',
          },
        ],
        name: 'createLoan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_lender',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_borrower',
            type: 'address',
          },
          {
            internalType: 'contract ERC20',
            name: '_collateral',
            type: 'address',
          },
          {
            internalType: 'contract ERC20',
            name: '_debt',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_debtAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_interestRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_duration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_terms',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: '_data',
            type: 'bytes32',
          },
        ],
        name: 'createLoan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'durations',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_borrower',
            type: 'address',
          },
        ],
        name: 'getBorrowerLoans',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_auctionId',
            type: 'uint256',
          },
        ],
        name: 'getCurrentPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_lender',
            type: 'address',
          },
        ],
        name: 'getLenderLoans',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_loanId',
            type: 'uint256',
          },
        ],
        name: 'getLoan',
        outputs: [
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
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'lenderLoans',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_loanId',
            type: 'uint256',
          },
        ],
        name: 'liquidateLoan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'loanCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'loanIdToAuction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'loanTerms',
        outputs: [
          {
            internalType: 'uint256',
            name: 'liquidationBonus',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dutchAuctionMultiplier',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'settlementMultiplier',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'loans',
        outputs: [
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
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_auctionId',
            type: 'uint256',
          },
        ],
        name: 'reclaim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_loanId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'onBehalfof',
            type: 'address',
          },
        ],
        name: 'repayLoan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_loanId',
            type: 'uint256',
          },
        ],
        name: 'repayLoan',
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
                name: 'liquidationBonus',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'dutchAuctionMultiplier',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'settlementMultiplier',
                type: 'uint256',
              },
            ],
            internalType: 'struct Terms',
            name: '_terms',
            type: 'tuple',
          },
        ],
        name: 'setTerms',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
}
