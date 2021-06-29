import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useParams } from 'react-router-dom';

import { fetchWorkshops, setWorkshopSearchFilter } from '~/state/workshops/actions';
import { getVisibleWorkshops, workshopSearchFilterSelector } from '~/state/reducers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from '~/Components/shared/form/Select';
import SearchBox from '~/Components/shared/SearchBox/SearchBox';
import WorkshopCard from './WorkshopCard';
import { statusOrder } from '~/state/workshops/constants/status';

import './Workshops.scss';

const Workshops: FC = () => {
    // const { sortBy = 'status' } = useParams() as {
    //     sortBy?: string;
    // };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWorkshops);
    }, []);

    const sortFct = {
        title: (a, b) => a.title.localeCompare(b.title),
        status: (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status),
    };

    const orderByOptions = [
        { label: 'titre', value: 'title' },
        { label: 'statuts', value: 'status' },
    ];
    const orderBy = orderByOptions[1]; //TODO Get it from url query params
    const [orderedWorkshop, setOrderedWorkshop] = useState<Workshop[]>([]);

    const visibleWorkshops = useSelector(getVisibleWorkshops);
    useEffect(() => {
        setOrderedWorkshop(visibleWorkshops.sort(sortFct[orderBy.value]));
    }, [visibleWorkshops]);
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
                        options={orderByOptions}
                        defaultValue={orderBy}
                        onChange={(option) => setOrderedWorkshop([...orderedWorkshop.sort(sortFct[option.value])])}
                    ></Select>
                </Col>
            </Row>
            <Row className="workshopList">
                {orderedWorkshop &&
                    orderedWorkshop.map((workshop) => (
                        <Col key={workshop.id} className="workshopCard" xs={12} md={6} lg={3}>
                            <WorkshopCard workshop={workshop} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Workshops;
