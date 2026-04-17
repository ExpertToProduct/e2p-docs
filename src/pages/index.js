import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Transforme ton expertise en produit IA
        </p>
        <p className={styles.heroTagline}>
          Documentation officielle des produits Expert To Product
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/01-prise-en-main/01-introduction">
            Découvrir AI-Finance DAF →
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductCard({title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--6', styles.productCardCol)}>
      <div className={styles.productCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className={styles.productCardLink}>
          {linkLabel} →
        </Link>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nos produits</h2>
        <div className="row">
          <ProductCard
            title="AI-Finance DAF"
            description="Solution de pilotage financier pour Directeurs Administratifs et Financiers de groupes familiaux. Consolidation multi-entités, analyse des flux intragroupe, suivi des ratios de vigilance, assistant IA spécialisé finance d'entreprise."
            link="/01-prise-en-main/01-introduction"
            linkLabel="Documentation AI-Finance DAF"
          />
          <ProductCard
            title="Bientôt disponible"
            description="D'autres produits Expert To Product sont en cours de développement. Restez informé en suivant @ExpertToProduct sur X."
            link="https://x.com/ExpertToProduct"
            linkLabel="Suivre sur X"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation ${siteConfig.title}`}
      description="Documentation officielle des produits Expert To Product">
      <HomepageHeader />
      <main>
        <ProductsSection />
      </main>
    </Layout>
  );
}
