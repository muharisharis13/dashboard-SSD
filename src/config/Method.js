export const MethodPost = ({ token, data }) => {
  return {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
}

export const MethodGet = ({ token }) => {
  return {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  }
}