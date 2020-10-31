async function GetAPICall(url) {
  let request = await fetch(url, {
    headers: {
      Authentication: 'secret',
    },
  })
  //Getting headers
  console.info(`Response headers ${request.headers.get('Content-Type')}`)
  for (let [key, value] of request.headers) {
    //console.log(`Key ${key} ==> Value ${value}`)
  }
  if (request.status === 200) {
    console.log(`Request status is ==> ${request.status}`)
    /**
     * Various response types:
     * response.text()
     * response.json()
     * response.blob()
     * response.arrayBuffer()
     * response.formData()
     */
    let response = await request.json()
    console.log(response.users)
  } else {
    console.error('Connection is not made')
  }
}

async function PostAPICall(url) {
  let post = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  let request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(post),
  })

  let response = await request.json()
  console.log(response)
}

GetAPICall('temp.json')
//PostAPICall('https://jsonplaceholder.typicode.com/posts')
