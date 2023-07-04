import type { RuneClient } from "rune-games-sdk/multiplayer"

export interface GameState {
  count: number
  count2 : number
}

type GameActions = {
  increment: (params: { amount: number, count: number }) => void
}

declare global {
  const Rune: RuneClient<GameState, GameActions>
}

export function getCount(game: GameState) {
  return [
    game.count,
    game.count2
  ]
}

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (): GameState => {
    return {
      count: 0,
      count2: 0
    }
  },
  actions: {
    increment: ({ amount, count }, { game }) => {
      game.count2 += amount
      game.count += count
    },
  },
  events: {
    playerJoined: () => {
      // Handle player joined
    },
    playerLeft() {
      // Handle player left
    },
  },
})
