import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@app/core/services/graphqlClient';

type Experience = {
  id: string
  object: Object
}

interface Props {
  experiences: Experience[];
}

export const getExperiences = () => {
  return useQuery('experiences', async () => {
    const { experiences } = await graphqlClient.request<Props>(
      gql`
        {
          experiences {
            id
            object
          }
        }
      `,
    );

    return experiences;
  }, {
    staleTime: 1000 * 60 * 60 * 23, // 23 hours
    refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
  });
};

