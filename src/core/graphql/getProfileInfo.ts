import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@app/core/services/graphqlClient';

export type ProfileInfo = {
  id: string
  name: string
  role: string
  profileImage: {
    id: string
    url: string
  }
}

type Props = {
  informations: ProfileInfo[]
}

export const getProfileInfo = () => {
  return useQuery('profileInfo', async () => {
    const { informations } = await graphqlClient.request<Props>(
      gql`
        {
          informations {
            id
            name
            role
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

