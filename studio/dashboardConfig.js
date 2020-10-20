export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8e9d4595490ed46537bd20',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4uo5gnio',
                  apiId: 'ebdb9ac5-5851-4a00-a73f-08b177faa707'
                },
                {
                  buildHookId: '5f8e9d454ce31ad5314600b7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ithwai8w',
                  apiId: '48906a0c-2789-429b-ba1e-6c6446fead14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ksande91/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ithwai8w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
