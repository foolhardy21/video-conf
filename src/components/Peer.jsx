import { useVideo } from "@100mslive/react-sdk";
import styles from './peer.module.css'

function Peer({ peer }) {
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
    });
    return (
        <div>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={`${styles.cardVideo} brd-md`}
            />
            <p className="txt-primary txt-md txt-cap txt-500">{peer.name} {peer.isLocal ? "(You)" : ""}</p>
        </div>
    );
}

export default Peer