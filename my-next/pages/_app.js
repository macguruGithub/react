import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component pageProps={pageProps} />
    </Provider>
  )

}

export default MyApp
