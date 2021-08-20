export type Speaker = {
  id: number;
  name: string;
  rool: string;
  description?: string;
};

export type Speakers = Speaker[];

export type SpeakersState = {
  speakers: Speakers;
};

export const initialSpeakersState: SpeakersState = {
  speakers: [],
};
