import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';

storiesOf("Component | Banners/Major", module)
    .addParameters({
        info: {
            text: `
            ### WHEN TO USE
            instructions
            
            **Location**: 1st element below navigation
            `
        }
    })
    .add("With Only Title", () => (
        <MajorBanner
            title="Banner Title"
            photo="People Outdoors/shutterstock_116403520.jpg" />
    ))
    .add("With all Text Options", () => {
        const title = text('Title', 'Banner Title');
        return (
        <MajorBanner 
            photo="People Outdoors/shutterstock_116403520.jpg"
            title={title}
            subtitle="Banner Subtitle"
            body="Banner Body"
        />
    )});

storiesOf("Component | Banners/Minor", module)
    .add("No Pictures", () => (
        <MinorBanner
            title="Banner Title"
            subtitle="Banner Subtitle"
            body="Banner Body"
        />
    ), {
        info: {
            inline: false
        }
    })
    .add("With Pictures", () => (
        <MinorBanner
            title="Banner Title"
            subtitle="Banner Subtitle"
            body="Banner Body"
            leftPhoto="Products/boots/shutterstock_66842440.jpg"
            rightPhoto="Products/boots/shutterstock_1121278055.jpg"
        />
    ));