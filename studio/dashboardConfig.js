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
                  buildHookId: '6045e9f873cb3962104e86b8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o4zx9uta',
                  apiId: '4c868789-e27f-4d13-8c61-2db6cc5a955b'
                },
                {
                  buildHookId: '6045e9f893462c3ae967f778',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xbfbnhtv',
                  apiId: 'ba02943e-5998-4091-8bfe-47301e5d7754'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qlehenaff-hexagone/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xbfbnhtv.netlify.app', category: 'apps'}
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
