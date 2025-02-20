import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// BECO_PER_BLOCK details
// 40 BECO is minted per block
// 18 BECO per block is sent to Burn pool (A farm just for burning cake)
// 10 BECO per block goes to BECO syrup pool
// 12 BECO per block goes to Yield farms and lottery
// BECO_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// BECO/Block in components/CakeStats.tsx = 22 (40 - Amount sent to burn pool)

export const BECO_PER_BLOCK = new BigNumber(100)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://becoswap.com'
export const BASE_EXCHANGE_URL = 'https://exchange.becoswap.com'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
