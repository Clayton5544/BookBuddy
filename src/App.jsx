import Form from'./Form'
import React, {useEffect, useState} from 'react'

const App = () => {

  useEffect(() => {
    const getToken = async() => {
      const responce = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: JSON.stringify({
          firstname: 'Clayton',
          lastname: 'Callison',
          email: 'claytoncallison12@yahoo.com',
          password: 'clayton123'

        })
      
      })
    }
  })
  

  return (

    <>
      <Form />
      
    </>
  )
}
App();

export default App
