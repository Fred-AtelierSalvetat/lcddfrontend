import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from 'react-bootstrap';
import Avatar from './../../assets/shared/avatar.jpg';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { AppState } from '../../state/reducers';

type Params = {
    id: string;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 180px;
    background: #f3edd3;
`;

const BioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 100px;
`;

// eslint-disable-next-line @typescript-eslint/ban-types
const Profile: React.FC<{}> = () => {
    const params = useParams() as Params;

    const { name, rool, description } = useSelector((state: AppState) => state.speakers.speakers[Number(params.id)]);

    return (
        <>
            <Wrapper className={classnames('', { 'flex-direction-column': true })}>
                <Image
                    src={Avatar}
                    roundedCircle
                    className="border border-dark m-5"
                    width="200"
                    style={{ minHeight: '200px' }}
                />
                <div className="mt-5 d-flex flex-column align-items-start">
                    <h4>{name}</h4>
                    <p>{rool}</p>
                    <p>{description}</p>
                </div>
            </Wrapper>

            <BioWrapper>
                <h6 className="text-left">Bio</h6>
                <p className="text-justify">
                    {'  '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget rhoncus orci. Cras
                    convallis orci at nisl imperdiet tincidunt. Nullam eget cursus lorem. Nulla sagittis, dolor id
                    viverra suscipit, nulla diam hendrerit ex, at ullamcorper orci massa sed ligula. In non nibh at
                    tortor rhoncus mattis laoreet vel turpis.{' '}
                </p>
            </BioWrapper>
        </>
    );
};

export default Profile;
