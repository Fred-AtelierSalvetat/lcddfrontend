import type { Workshop } from '~/state/workshops/model';
import { v4 as uuidv4 } from 'uuid';

import * as status from '~/state/workshops/constants/status';
import topics from '~/Components/shared/thematiques';
import { intervenants } from '~/Components/dashboard/shared/WkspFormBody';
import { refLegifrance } from '~/Components/dashboard/shared/WkspFormBody';

export let fakeDatabase: Workshop[] = [
    {
        id: '0',
        status: status.INCOMING,
        thumbnail: '',
        video: 'videourl',
        title: 'Le droit et le dev',
        startingdate: new Date(),
        speakers: [intervenants[0].value],
        topics: [topics[0].title, topics[1].title],
        refsLegifrance: [refLegifrance[0].value],
        description: 'Enfin un premier atelier sur le droit et le dev!',
        keywords: ['Droit', 'Dev'],
        files: [],
        links: [],
    },
    {
        id: '1',
        status: status.LIVE,
        thumbnail: '',
        video: 'videourl',
        title: "Le droit aujourd'hui, maintenant tout de suite, live quoi!",
        startingdate: new Date(),
        speakers: [intervenants[1].value],
        topics: [topics[2].title, topics[3].title, topics[4].title],
        refsLegifrance: [refLegifrance[1].value],
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        keywords: [],
        files: [],
        links: [],
    },
    {
        id: '2',
        status: status.PUBLISHED,
        thumbnail: 'https://test-for-front-video-thumbnails-ex.s3.eu-west-3.amazonaws.com/justice-balance.jpg',
        video: 'videourl',
        title: 'Le droit hier, un atelier publié...',
        startingdate: new Date(),
        speakers: [intervenants[0].value, intervenants[1].value],
        topics: [topics[5].title, topics[6].title, topics[7].title],
        refsLegifrance: [refLegifrance[2].value],
        description: 'Heeuu',
        keywords: ['test'],
        files: [],
        links: [],
    },
    {
        id: '3',
        status: status.ARCHIVED,
        thumbnail: 'https://test-for-front-video-thumbnails-ex.s3.eu-west-3.amazonaws.com/archive.jpg',
        video: 'videourl',
        title: 'Le droit et le dev',
        startingdate: new Date(),
        speakers: [],
        topics: [topics[8].title, topics[9].title],
        refsLegifrance: [],
        description: 'Enfin un premier atelier sur le droit et le dev!',
        keywords: ['> /dev/null 2>&1'],
        files: [],
        links: [],
    },
    {
        id: '4',
        status: status.UNPUBLISHED,
        thumbnail: 'https://test-for-front-video-thumbnails-ex.s3.eu-west-3.amazonaws.com/marteau.jpg',
        video: 'videourl',
        title: 'Justice: le marteau ça compte?',
        startingdate: new Date(),
        speakers: [],
        topics: [],
        refsLegifrance: [],
        description: 'Bien choisir son marteau',
        keywords: ['Justice', 'Marteau'],
        files: [],
        links: [],
    },
];

type NewWorkshop = Omit<Workshop, 'id'>;

export const fetchWorkshops: () => Workshop[] = () => fakeDatabase;

export const postNewWorkshop: (newWorkshop: NewWorkshop) => Workshop = (newWorkshop) => {
    const toadd = { ...newWorkshop, id: uuidv4() };
    fakeDatabase.push(toadd);
    return toadd;
};
export const deleteWorkshop: (id: Workshop.id) => void = (id) => {
    fakeDatabase = fakeDatabase.filter((workshop) => workshop.id !== id);
};

export const updateWorkshop: (update: Workshop) => void = (update) => {
    fakeDatabase = fakeDatabase.map((workshop) => (workshop.id === update.id ? { ...workshop, ...update } : workshop));
};
