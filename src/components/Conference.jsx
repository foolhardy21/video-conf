import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import { Peer } from './'
import styles from './conference.module.css'

function Conference() {
    const peers = useHMSStore(selectPeers);

    return (
        <div className="flx flx-column flx-center pd-md">
            <p className="txt-lg txt-primary txt-cap mg-btm-s">conference</p>
            <div className={`grid grid-maxcols-3 ${styles.gridVideos}`}>
                {peers.map((peer) => (
                    <Peer key={peer.id} peer={peer} />
                ))}
            </div>
        </div>
    );
}

export default Conference