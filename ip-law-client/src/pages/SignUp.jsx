import { SignUp as ClerkSignUp } from '@clerk/clerk-react'

function SignUp() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Client Sign Up</h1>
        <ClerkSignUp 
          path="/sign-up" 
          routing="path" 
          signInUrl="/sign-in"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  )
}

export default SignUp
