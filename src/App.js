import { useEffect } from "react";
import { useHMSStore, selectIsConnectedToRoom, useHMSActions } from "@100mslive/react-sdk";
import { Conference, Footer, JoinForm } from './components'

function App() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  return (
    <div className="flx flx-column">
      <p className="txt-xlg txt-primary txt-ucase txt-500 pd-md">joinin</p>
      {
        isConnected ?
          <>
            <Conference />
            <Footer />
          </> :
          <div className="flx flx-center">
            <JoinForm />
          </div>

      }
    </div>
  );
}

export default App;
