import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchWorkshops, setWorkshopSearchFilter, setOrderBy } from '~/state/workshops/actions';
import { getWorkshops, workshopSearchFilterSelector, getOrderBy } from '~/state/reducers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from '~/Components/shared/form/Select';
import SearchBox from '~/Components/shared/SearchBox/SearchBox';
import WorkshopCard from './WorkshopCard';
import { sortFct } from '~/state/workshops/selectors';

import './Workshops.scss';

const Workshops: FC = () => {
    const UrlQueryParam = new URLSearchParams(useLocation().search);
    console.log('orderBy =', UrlQueryParam.get('orderBy'));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWorkshops);
    }, []);

    const orderBy = useSelector(getOrderBy); //TODO Get it /set it to/from url query params

    const workshops = useSelector(getWorkshops);
    const searchBoxValue = useSelector(workshopSearchFilterSelector);

    return (
        <Container fluid id="workshopsPage">
            <Row className="headerRow">
                <Col className="searchDiv" xs={12} md={6} lg={9}>
                    <p>Chercher un atelier</p>
                    <SearchBox
                        placeholder="Par titre ou par mot-clé"
                        value={searchBoxValue}
                        setValue={(value) => dispatch(setWorkshopSearchFilter(value))}
                    />
                </Col>
                <Col className="sortDiv" xs={12} md={6} lg={3}>
                    <p>Trier par</p>
                    <Select
                        isSearchable={true}
                        options={Object.keys(sortFct).map((key) => ({ label: key, value: key }))}
                        value={{ label: orderBy, value: orderBy }}
                        onChange={(option) => dispatch(setOrderBy(option.value))}
                    ></Select>
                </Col>
            </Row>
            <Row className="workshopList">
                {workshops &&
                    workshops.map((workshop) => (
                        <Col key={workshop.id} className="workshopCard" xs={12} md={6} lg={3}>
                            <WorkshopCard workshop={workshop} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Workshops;
