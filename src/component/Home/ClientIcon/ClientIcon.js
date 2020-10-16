import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const ClientIcon = () => {
    const ClientIconStyle = {
        height: 50,
        margin: '5% 7% 8% 0'
    }
    return (
        <section className="container mr-auto">
            <img style={ClientIconStyle} src={slack} alt="" />
            <img style={ClientIconStyle} src={google} alt="" />
            <img style={ClientIconStyle} src={uber} alt="" />
            <img style={ClientIconStyle} src={netflix} alt="" />
            <img style={ClientIconStyle} src={airbnb} alt="" />
        </section>
    );
};

export default ClientIcon;