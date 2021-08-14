import { api as generatedApi } from './lcddbackend-api.generated';

export const api = generatedApi; //generatedApi.enhanceEndpoints();

// export const api = generatedApi.enhanceEndpoints({
//     endpoints: {
//       getMaterials: {
//         transformResponse: response => normalize(response),
//       },
//     },
//   })
