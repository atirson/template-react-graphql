import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@app/core/services/graphqlClient';

export const getProfileInfo = () => {
  return useQuery('profileInfo', async () => {
    const { informations } = await graphqlClient.request<any>(
      gql`
        {
          informations {
            createdAt
            description
            id
            name
            publishedAt
            role
            updatedAt
            profileImage {
              id
              url
            }
          }
        }
      `,
    );

    return informations;
  }, {
    staleTime: 1000 * 60 * 60 * 23, // 23 hours
    refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
  });
};

