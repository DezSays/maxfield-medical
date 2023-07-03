import { Footer, Header, Main } from "./sectioning";
import { useViewport } from './hooks/useViewport';

const App = (): JSX.Element => {
  const { screenSize, width } = useViewport();
  const isMobileView = width && width < 992;
  (window as any).MDMC = {isMobileView, screenSize};
  return (
    <>
      <Header isMobileView={isMobileView} />
      <Main />
      <Footer />
    </>
  );
};

export default App;

