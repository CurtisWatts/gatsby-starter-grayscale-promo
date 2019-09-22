import React, { FunctionComponent } from 'react';
import { Container, BackgroundImage, ImageOverlay, Arrow, Data } from './style';
import { Query } from './query';

export const Header: FunctionComponent<{}> = () => {
    return (
        <Query>
            {data => (
                <Container>
                    <BackgroundImage
                        sizes={data.backgroundImage.childImageSharp.sizes}
                    />
                    <Data>111</Data>
                    <ImageOverlay />
                    <Arrow />
                </Container>
            )}
        </Query>
    );
};
