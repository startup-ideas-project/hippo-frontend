import React from "react";



import { Layout } from './layout'
import { Hero } from './hero'
import { HeroIllustration } from './hero-illustration'
import './styles.css'

const LandingPage = () => {
    return (
    <Layout>
        <Hero
        title="Access external data"
        subTitle="The Easy Way"
        content1="1. For data provider, generate revenue from your data"
        content2="2. For data consumer, you see data quality before purchase"
        content3="3. Leave an email, you could be the first one to experience"
        illustration={HeroIllustration}
        />
    </Layout>
    )

}

export default LandingPage;