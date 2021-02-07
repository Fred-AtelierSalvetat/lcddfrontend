import { WorkshopProps } from '../../Components/shared/Workshop';

export type IProfile = {
    id: string;
    name: string;
    rool: string;
    description?: string;
    bio: string;
    workshop: WorkshopProps[];
};

export type Profiles = IProfile[];
