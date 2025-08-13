import { SignIn as ClerkSignIn } from '@clerk/clerk-react'

function SignIn() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Client Sign In</h1>
        <ClerkSignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  )
}

export default SignIn
