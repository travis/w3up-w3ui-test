import '../styles/globals.css'
import { KeyringProvider } from '@w3ui/react-keyring'
import { UploaderProvider } from '@w3ui/react-uploader'
import { UploadsListProvider } from '@w3ui/react-uploads-list'

function MyApp({ Component, pageProps }) {
  return (
    <KeyringProvider>
      <UploaderProvider>
        <UploadsListProvider>
          <Component {...pageProps} />
        </UploadsListProvider>
      </UploaderProvider>
    </KeyringProvider>
  )
}

export default MyApp
