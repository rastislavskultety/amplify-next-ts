import { AmplifyProvider } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css" // default theme
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default MyApp
