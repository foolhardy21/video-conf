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
    <>
      {
        isConnected ? <><Conference /><Footer /></> : <JoinForm />
      }
    </>
  );
}

export default App;
