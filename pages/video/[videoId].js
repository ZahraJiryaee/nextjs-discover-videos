import { useRouter } from "next/router";

import Modal from "react-modal";

import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h1>Video {router.query.videoId}</h1>
      </Modal>
    </div>
  );
};

export default Video;
