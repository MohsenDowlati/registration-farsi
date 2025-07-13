import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { wrapper } from '@/store/store';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
