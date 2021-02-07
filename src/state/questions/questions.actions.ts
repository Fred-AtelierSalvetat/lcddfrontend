import { Book } from './questions.model';

export type QuestionsActions = QuestionsRequested | QuestionsReceived | QuestionsRequestedFailed;

////////////////

export const questionsRequested = () => {
    return { type: 'QUESTIONS_REQUESTED' as const };
};

export type QuestionsRequested = ReturnType<typeof questionsRequested>;

////////////////

export const QuestionsReceived = (books: Book[]) => ({
    type: 'QUESTIONS_RECEIVED' as const,
    books,
});

export type QuestionsReceived = ReturnType<typeof QuestionsReceived>;

////////////////

export const questionsRequestedFailed = (error: Error) => ({
    type: 'QUESTIONS_REQUSTED_FAILED' as const,
    error,
});

export type QuestionsRequestedFailed = ReturnType<typeof questionsRequestedFailed>;
