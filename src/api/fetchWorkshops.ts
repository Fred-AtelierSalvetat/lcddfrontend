import type { Workshop } from '~/state/workshops/model';
import { v4 as uuidv4 } from 'uuid';

import { fakeDatabase } from './workshopsStub/fakedatabase';

type NewWorkshop = Omit<Workshop, 'id'>;

export const fetchWorkshops: () => Workshop[] = () => {
    return fakeDatabase;
};

export const postNewWorkshop: (newWorkshop: NewWorkshop) => Workshop = (newWorkshop) => {
    const toadd = { ...newWorkshop, id: uuidv4() };
    fakeDatabase.push(toadd);
    return toadd;
};
