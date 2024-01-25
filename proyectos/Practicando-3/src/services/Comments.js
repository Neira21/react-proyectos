//import axios from 'axios'

export async function get() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    return data
    
  } catch (err) {
    return console.log(err)
  }
}

export async function post(comment) {
  return (
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
      const data = res.json()
      return data
    })
    .catch((err) => console.log(err))
    )
}