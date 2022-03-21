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
        content1="For data provider, generate revenue from your data"
        content2="For data consumer, obtain desired data"
        illustration={HeroIllustration}
        />
    </Layout>
    )

}

export default LandingPage;