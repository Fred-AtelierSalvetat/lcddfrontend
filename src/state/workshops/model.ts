import type { WorkshopStatusType } from './constants/status.ts';

export type Speaker = string; //TODO

export type Topic = string; //TODO

export type RefLegiFrance = string; //TODO

export type File = {
    name: string;
    path: string;
};

export type Link = {
    title: string;
    url: string;
};

export type Status = {
    value: WorkshopStatusType;
    label: string;
};

export type KeyWord = string;

export type SearchFilter = string;

export type Workshop = {
    id: string;
    status: Status;
    thumbnail: string; //TODO
    video: string; //TODO
    title: string;
    startingdate: date;
    endingdate: date;
    speakers: Speaker[];
    topics: Topic[];
    refsLegifrance: RefLegiFrance[];
    description: string;
    keywords: KeyWord[];
    files: File[];
    links: Link[];
};

export type WorkshopsState = {
    workshops: Workshop[];
    searchFilter: SearchFilter;
};
