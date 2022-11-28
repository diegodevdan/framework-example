import '../styles/globals.css'
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";

function MyApp({ Component, pageProps }) {
  return(
      <MantineProvider>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
      )
}

export default MyApp
