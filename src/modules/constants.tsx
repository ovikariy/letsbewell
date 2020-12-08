import AboutSection from "../sections/about";
import DataPrivacySection from "../sections/dataPrivacy";
import FeaturesSection from "../sections/features";
import HeaderSection from "../sections/header";
import { Section } from './types';

export const sections: Section[] = [
    {
        id: 'home',
        menuText: 'Home',
        component: <HeaderSection id='home' />
    },
    {
        id: 'features',
        menuText: 'Features',
        component: <FeaturesSection id='features' />
    },
    {
        id: 'data-privacy',
        menuText: 'Data Privacy',
        component: <DataPrivacySection id='data-privacy' />
    },
    {
        id: 'about',
        menuText: 'About',
        component: <AboutSection id='about' />
    }
]