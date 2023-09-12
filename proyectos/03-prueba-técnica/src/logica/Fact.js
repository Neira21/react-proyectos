const API_KEY = 'https://catfact.ninja/fact'

export const Fact = async () => {
  // ✖️ NO SE PUEDE LLAMAR AL USESTATE
  const res = await fetch(API_KEY)
  const data = await res.json()
  const { fact } = data
  return fact
}
