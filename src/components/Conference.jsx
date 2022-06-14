import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import { useEffect, useState } from "react";
import { Peer } from './'
import styles from './conference.module.css'

function Conference() {
    const peers = useHMSStore(selectPeers);
    const [time, setTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flx flx-column pd-md">
            <div className="flx flx-maj-stretch flx-min-center">
                <p className="txt-lg txt-primary txt-cap mg-btm-s">conference</p>
                <div className="flx">
                    <p className="txt-lg txt-primary">
                        {("0" + Math.floor((time / 3600))).slice(-2)}:
                    </p>
                    <p className="txt-lg txt-primary">
                        {("0" + Math.floor((time / 60))).slice(-2)}:
                    </p>
                    <p className="txt-lg txt-primary">
                        {("0" + (time % 60)).slice(-2)}
                    </p>
                </div>
            </div>
            <div className={`grid grid-maxcols-3 ${styles.gridVideos}`}>
                {peers.map((peer) => (
                    <Peer key={peer.id} peer={peer} />
                ))}
            </div>
        </div>
    );
}

export default Conference