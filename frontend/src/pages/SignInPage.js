import React from 'react'
import NavigationBar from '../components/Home/NavigationBar'
import Footer from '../components/Home/Footer'
import SignInSnipet from '../components/SignIn/SignInSnipet'

function SignIn() {
  return (
    <div>
      <NavigationBar />
      <SignInSnipet />
      <Footer />
    </div>
  )
}

export default SignIn