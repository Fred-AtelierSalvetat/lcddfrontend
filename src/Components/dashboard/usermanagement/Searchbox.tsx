import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { searchFilterSelector } from '../../../state/reducers';
import * as usersAction from '../../../state/users/actions';

const SearchBox: FC<{}> = () => {
    const [searchbox, setSearchbox] = useState(useSelector(searchFilterSelector));
    const dispatch = useDispatch();

    const changeSearchBox = (e) => {
        setSearchbox(e.target.value);
        dispatch(usersAction.setUsersSearchFilter(e.target.value));
    };

    return (
        <div className="searchbox">
            <input
                type="text"
                id="header-search"
                aria-label="Rechercher un utilisateur"
                placeholder="Rechercher un utilisateur"
                name="researched_user"
                value={searchbox}
                onChange={changeSearchBox}
            />

            <SearchIcon />
        </div>
    );
};

export default SearchBox;
