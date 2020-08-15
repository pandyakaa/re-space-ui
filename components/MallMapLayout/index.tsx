import React, { SFC } from 'react';

import { MallMapLayoutStyle, MallMapGrid, MapCell, MallCell } from './style';
import Container from '@components/Container';
import { Image } from '@components/Image';
import ActiveTenants from '@components/ActiveTenants';
import InteractiveMap from '@components/InteractiveMap';

const MallMapLayout: SFC = () => {
    return (
        <MallMapLayoutStyle>
            <Container>
                <MallMapGrid>
                    <MapCell>
                        <InteractiveMap
                            url="https://gist.githubusercontent.com/wirasuta/37c7ff8f1284a45a2686f3a1b43e0d64/raw/2b53c55a6920517e2620c2f788ad57f2c2fef5a1/sample.svg"
                            onLocationClick={console.log}
                        />
                    </MapCell>
                    <MallCell>
                        <Image w="100%" h="auto" img="/images/mall-placeholder.jpg" />
                        <h1>Kota Kasablanka</h1>
                        <span>Jl. Casablanca Raya Kav. 88, Menteng Dalam, Jakarta Selatan</span>
                    </MallCell>
                    <ActiveTenants />
                </MallMapGrid>
            </Container>
        </MallMapLayoutStyle>
    );
};

export default MallMapLayout;