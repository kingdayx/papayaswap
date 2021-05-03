import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PapayaSwap',
  description: 'A fork of papayaswap made for a my best friend Disney',
  image: 'https://pancakeswap.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'PapayaSwap Easter Battle',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
