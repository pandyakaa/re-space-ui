import React, { SFC } from 'react';
import { GetServerSideProps } from 'next';
import { ModalProvider } from 'styled-react-modal';

import PageLayout from '@components/PageLayout';
import TopSearch from '@components/TopSearch';
import MallMapLayout from '@components/MallMapLayout';
import MallType from '@interfaces/mall';
import Space from '@interfaces/space';

interface MallProps {
    mall: MallType;
}

const Mall: SFC<MallProps> = (props: MallProps) => {
    const { mall } = props;

    return (
        <ModalProvider>
            <PageLayout>
                <TopSearch />
                <MallMapLayout mall={mall} />
            </PageLayout>
        </ModalProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { res, params } = ctx;
    const id = params.id;
    const url = `${process.env.API_URL}/malls/${id}`;
    const spacesUrl = `${process.env.API_URL}/spaces?mallId=${id}`;

    try {
        const res = await fetch(url);
        const data = (await res.json()) as MallType;

        const resSpaces = await fetch(spacesUrl);
        const spacesData = (await resSpaces.json()) as Space[];

        data.spaces = spacesData;

        return {
            props: {
                mall: data
            }
        };
    } catch (e) {
        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();
        return { props: {} };
    }
};

export default Mall;
