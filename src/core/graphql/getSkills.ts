import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@app/core/services/graphqlClient';

type Skill = {
  id: string
  href: string
  src: string
  category: string
}

interface Props {
  skills: Skill[];
}

export const getSkills = () => {
  return useQuery('skills', async () => {
    const { skills } = await graphqlClient.request<Props>(
      gql`
        {
          skills(first: 25) {
            id
            href
            src
            category
          }
        }
      `,
    );

    return skills;
  }, {
    staleTime: 1000 * 60 * 60 * 23, // 23 hours
    refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
  });
};

