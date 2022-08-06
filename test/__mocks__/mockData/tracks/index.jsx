import engTracks from './eng.json'
import lsaTracks from './lsa.json'

export default {
  eng: { ...engTracks },
  lsa: { ...lsaTracks },
  all: {
    ...engTracks,
    ...lsaTracks
  },
}