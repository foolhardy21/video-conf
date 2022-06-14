import { useAVToggle, useHMSActions } from "@100mslive/react-sdk";
import styles from './footer.module.css'

function Footer() {
    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
    } = useAVToggle();
    const hmsActions = useHMSActions();

    function handleLeaveClick() {
        hmsActions.leave()
    }

    return (
        <div className={`pos-fixed ${styles.footer} flx flx-center bg-secondary pd-md`}>
            <button className="btn-txt flx flx-center pd-xs mg-right-s" onClick={toggleAudio}>
                <span className="material-icons icon-secondary">
                    {isLocalAudioEnabled ? "mic" : "mic_off"}
                </span>
            </button>
            <button className="btn-txt flx flx-center pd-xs" onClick={toggleVideo}>
                <span className="material-icons icon-secondary">
                    {isLocalVideoEnabled ? "videocam" : "videocam_off"}
                </span>
            </button>
            <button onClick={handleLeaveClick} className={`btn-outlined b-solid  txt-md txt-lcase txt-err mg-left-xxlg pd-xs ${styles.btnLeave}`}>
                leave
            </button>
        </div>
    );
}

export default Footer