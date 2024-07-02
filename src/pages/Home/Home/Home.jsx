import { Helmet } from "react-helmet-async";
import { Accordion } from "../Accordion";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ";
import HowItWorks from "../HowItWorks";
import LatestSurvey from "../LatestSurvey";
import MostVotedSurvey from "../MostVotedSurvey";

import PaymentCard from "../PaymentCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Survey App | Home</title>
            </Helmet>
            <Banner></Banner>
            <LatestSurvey></LatestSurvey>
            <HowItWorks></HowItWorks>
            <MostVotedSurvey></MostVotedSurvey>
            <PaymentCard></PaymentCard>
            <FAQ></FAQ>
           
        </div>
    );
};

export default Home;