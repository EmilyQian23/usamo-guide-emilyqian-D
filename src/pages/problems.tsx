import { graphql, PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Chapter } from '../../content/ordering';

import {
  HitsPerPage,
  InstantSearch,
  Pagination,
  PoweredBy,
} from 'react-instantsearch';

import SECTIONS from '../../content/ordering';
import BlindModeToggle from '../components/BlindModeToggle';
import Layout from '../components/layout';
import ProblemHits from '../components/ProblemsPage/ProblemHits';
import SearchBox from '../components/ProblemsPage/SearchBox';
import Selection, {
  SelectionProps,
} from '../components/ProblemsPage/Selection';
import TagsRefinementList from '../components/ProblemsPage/TagsRefinementList';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { useUserProgressOnProblems } from '../context/UserDataContext/properties/userProgress';
import { searchClient } from '../utils/algoliaSearchClient';

const indexName = `${process.env.GATSBY_ALGOLIA_INDEX_NAME ?? 'dev'}_problems`;

type DataProps = {
  allProblemInfo: {
    nodes: {
      uniqueId: string;
    }[];
  };
};

export default function ProblemsPage(props: PageProps<DataProps>) {
  const {
    allProblemInfo: { nodes: problems },
  } = props.data;
  const problemIds = problems.map(problem => problem.uniqueId);
  const userProgress = useUserProgressOnProblems();
  const [shuffle, sendShuffle] = useState(0);
  const [random, sendRandom] = useState(0);
  const selectionMetadata: SelectionProps[] = [
    {
      attribute: 'difficulty',
      limit: 500,
      placeholder: 'Difficulty',
      searchable: false,
      isMulti: true,
    },
    {
      attribute: 'problemModules.title',
      limit: 500,
      placeholder: 'Modules',
      searchable: true,
      isMulti: true,
    },
    {
      attribute: 'source',
      limit: 500,
      placeholder: 'Source',
      searchable: true,
      isMulti: true,
    },
    {
      attribute: 'isStarred',
      limit: 500,
      placeholder: 'Starred',
      searchable: false,
      transformLabel: label => (label == 'true' ? 'Yes' : 'No'),
      isMulti: false,
    },
    {
      attribute: 'problemModules.id',
      limit: 500,
      placeholder: 'Section',
      searchable: false,
      isMulti: true,
      items: (
        [
          ['Foundations', SECTIONS.foundations],
          ['Intermediate', SECTIONS.intermediate],
          ['Advanced', SECTIONS.advanced],
          ['USAMO Prep', SECTIONS.usamo],
        ] as unknown as [string, Chapter[]][]
      ).map(([section, chapters]) => ({
        label: section,
        value: chapters.map(chapter => chapter.items).flat(),
      })),
    },
    {
      attribute: 'objectID',
      limit: 500,
      placeholder: 'Status',
      searchable: false,
      isMulti: true,
      items: [
        'Not Attempted',
        'Solving',
        'Reviewing',
        'Skipped',
        'Ignored',
        'Solved',
      ].map(label => ({
        label,
        value: problemIds.filter(
          id => (userProgress[id] ?? 'Not Attempted') == label
        ),
      })),
    },
  ];
  return (
    <Layout>
      <SEO title="All Problems" image={null} pathname={props.path} />

      <div className="problems-page ui-page min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-[#140f2f] dark:to-[#050514] transition-colors duration-500">
        <TopNavigationBar />

        <InstantSearch
          searchClient={searchClient}
          indexName={indexName}
          future={{ preserveSharedStateOnUnmount: true }}
        >
          <div className="grid grid-cols-12 gap-x-6 px-6 pb-6 lg:px-9">
            <aside className="col-span-12 pt-6 sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="mb-4">
                <BlindModeToggle />
              </div>
              <TagsRefinementList />
            </aside>
            <main className="col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10 xl:col-span-10">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-200 via-white to-orange-100 p-8 shadow-xl transition-all duration-500 dark:from-[#1f1c36] dark:via-[#120d2e] dark:to-[#070713] dark:shadow-[0_12px_40px_rgba(8,8,20,0.8)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_40%)]" />
                <div className="relative mx-auto mb-6 max-w-3xl">
                  <h1 className="dark:text-dark-high-emphasis mb-6 text-center text-3xl font-bold text-orange-900 sm:text-5xl dark:text-white">
                    Problems
                  </h1>
                  <div className="mx-auto max-w-md rounded-xl bg-white/60 p-3 dark:bg-slate-900/50">
                    <SearchBox />
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-1 flex justify-center">
                <PoweredBy />
              </div>
              <div className="px-1 py-0.5">
                <div className="mb-5 rounded-2xl bg-white/80 p-4 shadow-lg dark:bg-slate-900/70">
                  <div className="grid grid-cols-1 items-center gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-6">
                  {selectionMetadata.map(props => (
                    <div
                      className="tw-forms-disable-all-descendants col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-2"
                      key={props.attribute}
                    >
                      <Selection {...props} />
                    </div>
                  ))}
                </div>
                <div className="mb-5 border-t border-slate-200 pt-4 dark:border-slate-700">
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => sendShuffle(shuffle + 1)}
                      className="inline-flex items-center rounded-full border border-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-200 hover:from-orange-400 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:border-orange-300 dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500"
                      title={'Shuffle problems'}
                    >
                    <svg
                      className={'mr-2 h-5 w-5 text-gray-200'}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Shuffle
                  </button>
                  <button
                    onClick={() => sendRandom(random + 1)}
                    className="inline-flex items-center rounded-full border border-blue-500 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-200 hover:border-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
                    title={'Go to a random unsolved problem'}
                  >
                    <svg
                      className={'mr-2 h-5 w-5 text-gray-200'}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8" cy="8" r="1" />
                      <circle cx="16" cy="8" r="1" />
                      <circle cx="8" cy="16" r="1" />
                      <circle cx="16" cy="16" r="1" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                    Random
                  </button>
                </div>
                </div>
              </div>
              <ProblemHits shuffle={shuffle} random={random} />
              <div className="mt-3 flex flex-wrap justify-center">
                  <Pagination showLast={true} className="pr-4" />
                  <HitsPerPage
                    items={[
                      { label: '24 hits per page', value: 24, default: true },
                      { label: '32 hits per page', value: 32 },
                      { label: '48 hits per page', value: 48 },
                    ]}
                    className="mt-1 lg:mt-0"
                  />
                </div>
              </div>
            </main>
          </div>
        </InstantSearch>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allProblemInfo {
      nodes {
        uniqueId
      }
    }
  }
`;
