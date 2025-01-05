import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Chrome } from "lucide-react"

interface GoogleAuthButtonProps {
  mode: "login" | "register"
  className?: string
}

export function GoogleAuthButton({ mode, className }: GoogleAuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true)
      const googleClientId = process.env.GOOGLE_CLIENT_ID
      const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/google/callback`)
      const scope = encodeURIComponent('email profile')
      
      // Construct OAuth URL
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&prompt=select_account`
      
      // Redirect to Google OAuth
      window.location.href = authUrl
    } catch (error) {
      console.error('Google auth error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleGoogleAuth}
      disabled={isLoading}
      className={`w-full ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Please wait
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <Chrome className="h-5 w-5" />
          {mode === "login" ? "Sign in with Google" : "Sign up with Google"}
        </div>
      )}
    </Button>
  )
}
