import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: any;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Nest Js 工作坊',
    Svg: require('@site/static/img/nest.png').default,
    description: (
      <>
       小雞鎮是一個 Nest JS 的工作坊，不定期上架 Nest 的技術文章
      </>
    ),
    url: "/docs/category/-nest-觀念"
  },
  {
    title: '造鎮計畫',
    Svg: require('@site/static/img/town.png').default,
    description: (
      <>
       每一個模組即為一家店，期許未來可以過大小鎮的版圖
      </>
    ),
    url: "/docs/intro"
  },
  {
    title: '小鎮新聞',
    Svg: require('@site/static/img/news.png').default,
    description: (
      <>
        每當小鎮有重大消息時，就會透過新聞發布
      </>
    ),
    url: "/blog"
  },
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={url}>
        <img src={Svg} alt="" />
      </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
