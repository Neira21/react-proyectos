const API_URL = 'https://rickandmortyapi.com/api/character/'

export async function getCharacter ({ status, link }) {
  if (link) {
    const response = await fetch(`${link}`)
    const { results, info } = await response.json()
    return { results, info }
  }
  const response = await fetch(`${API_URL}?status=${status}`)
  const { results, info } = await response.json()
  return { results, info }
}
