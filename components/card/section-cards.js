import Link from "next/link";
import clsx from "classnames";

import Card from "./card";

import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
  console.log({ videos });
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, idx) => (
          <Link href={`/video/${video.id}`} key={video.id}>
            <a>
              <Card
                id={idx}
                imgUrl={video.imgUrl}
                size={size}
                shouldScale={shouldScale}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
