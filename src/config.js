export const DefaultChainInfo = {
    counterpartyChainId: 'redshift-3',
    chainName:'Gridiron',
    prefix:'did:fury:iaa1',
    ledgerAppName:'Gridiron',
    currency: {
        coinDenom: 'FURY',
        coinMinimalDenom: 'ufury',
        coinDecimals: 6,
        coinGeckoId: 'fury',
    },
    deprecatedCoinType: 750,
    coinType: 118,
    uTokenValue:1000000,
};

export const AccountInfo = {
    maxAccountIndex: 2147483647,
    maxAccountNumber: 2147483647,
};

export const PstakeInfo = {
    coinDenom: 'FURY',
    coinMinimalDenom: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
    baseDenom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
    coinDecimals: 6,
};

export const GasInfo ={
    gas: 250000,
    minGas: 80000,
    maxGas : 2000000,
};

export const FeeInfo ={
    lowFee: 0,
    averageFee: 0.025,
    highFee: 0.04,
    defaultFee: "5000",
    vestingAccountFee: "0",
};

export const IBCConfiguration = {
    timeoutTimestamp: 1000,
    ibcRevisionHeightIncrement: 1000,
    ibcRemoteHeightIncrement: 150,
    ibcDefaultPort: "transfer",
};

export const TestIBCChainInfos = [
    {
        counterpartyChainId: '',
        chainName: "Gridiron",
        sourceChannelId: "channel-30",
        portID: "transfer",
        prefix:'did:fury:iaa1',
    }
];


export const IBCChainInfos = [
    {
        counterpartyChainId: 'osmosis-1',
        chainName:'Osmosis',
        sourceChannelId: 'channel-6',
        portID:'transfer',
        coinMinimalDenom: 'uatom',
        prefix:'osmo'
    },
    {
        counterpartyChainId: 'cosmoshub-4',
        chainName:'Cosmos',
        sourceChannelId: 'channel-24',
        portID:'transfer',
        coinMinimalDenom: 'uatom',
        prefix:'cosmos'
    },
    {
        counterpartyChainId: 'juno-1',
        chainName:'Juno',
        sourceChannelId: 'channel-37',
        portID:'transfer',
        coinMinimalDenom: 'ujuno',
        prefix:'juno'
    },
    {
        counterpartyChainId: 'gravity-bridge-3',
        chainName:'Gravity',
        sourceChannelId: 'channel-38',
        portID:'transfer',
        coinMinimalDenom: 'ugraviton',
        prefix:'gravity'
    },
];

export const ExternalChains = [
    {
        rpc: 'https://testnet.gridiron.zone:26657/',
//        rest: 'https://rest.core.fury.fan/',
        chainId: 'redshift-3',
        chainName: 'Gridiron',
        portID: 'transfer',
        currency: {
            coinDenom: 'FURY',
            coinMinimalDenom: 'ufury',
            coinDecimals: 6,
            coinGeckoId: 'fury',
        },
        coinType: 118,
    },
    {
        rpc: 'https://rpc.osmosis-1.audit.one/',
        rest: 'https://rest.osmosis-1.audit.one/',
        chainId: 'osmosis-1',
        chainName: 'Osmosis',
        portID: 'transfer',
        currency: {
            coinDenom: 'OSMO',
            coinMinimalDenom: 'uosmo',
            coinDecimals: 6,
            coinGeckoId: 'osmosis',
        },
        coinType: 118,
    },
    {
        rpc: 'https://rpc.cosmos.audit.one/',
        rest: 'https://rest.cosmos.audit.one/',
        chainId: 'cosmoshub-4',
        chainName: 'Cosmos',
        currency: {
            coinDenom: 'COSMOS',
            coinMinimalDenom: 'uatom',
            coinDecimals: 6,
            coinGeckoId: 'cosmos',
        },
        coinType: 118,
        ledgerAppName: 'Cosmos'
    },
    {
        rpc: 'https://rpc.gravity.audit.one',
        rest: 'https://rest.gravity.audit.one',
        chainId: 'gravity-bridge-3',
        chainName: 'Gravity',
        currency: {
            coinDenom: 'GRAV',
            coinMinimalDenom: 'ugraviton',
            coinDecimals: 6,
            coinGeckoId: '',
        },
        coinType: 118,
    },
    {
        rpc: 'https://rpc-juno.itastakers.com/',
        rest: 'https://lcd-juno.itastakers.com/',
        chainId: 'juno-1',
        chainName: 'Juno',
        currency: {
            coinDenom: 'Juno',
            coinMinimalDenom: 'ujuno',
            coinDecimals: 6,
            coinGeckoId: '',
        },
        coinType: 118,
    },
];

export const TestNetFoundationNodes = [
    "did:fury:ivaloper1xepyv8lf99pa4x0w2ptr3vx3rr7wfs6msh2m76"
];

export const MainNetFoundationNodes = [
    "did:fury:ivaloper19ehhcj0fqw22vwqgll9g70njsv7eq9068pprfu",
    "did:fury:ivaloper1hndk2s0dx9p0pxd9pxwmls3eywpdu5ha76kpqs",
    "did:fury:ivaloper1ve9ls5wnczj72mxldewze8u46sarlatmgmp3nd",
    "did:fury:ivaloper1emrvay43wy7f4ylwen3yxhm9qxddy8zc9zdk5y",
    "did:fury:ivaloper13dv6h3wtmhmt0jprhaw9pv343qanttkty4685v"
];



