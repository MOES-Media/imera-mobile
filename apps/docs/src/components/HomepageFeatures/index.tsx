import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Build & Deploy",
    img: require("@site/static/img/constructocat2.jpg").default,
    link: "/docs/category/data-structures",
    description: (
      <>
        Get to know the build and deploy processes for everything related with
        Imera Mobile.
      </>
    ),
  },
  {
    title: "Data Structures",
    img: require("@site/static/img/socialite.jpg").default,
    link: "/docs/category/data-structures",
    description: (
      <>
        Get an insight in how the different data structures look and work
        together.
      </>
    ),
  },
  {
    title: "Collaboration",
    img: require("@site/static/img/collabocats.jpg").default,
    link: "/docs/category/data-structures",
    description: (
      <>
        Get to know the different coding conventions, how to setup your
        development environment and the rest of the team.
      </>
    ),
  },
];

function Feature({ title, img, link, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <a href={link} className={styles.featureLink}>
        <div className="text--center">
          <img className={styles.featureSvg} src={img} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
