functionDocs = require("./docs/functions/sidebar.json")
functionDocs.collapsed = false

module.exports = {
  webUiSidebar: [
    {
      type: 'doc',
      id: 'About',
      label: 'Welcome',

    },
    {
      type: 'category',
      label: 'Using Ganymede',
      collapsed: false,
      items: [{
        type: 'category',
        label: 'Running Flows',
        collapsed: false,
        items: ['Home', 'FlowView']
      },
      {
        type: 'doc',
        id: 'FlowEditor',
        label: 'Editing Flows',
      },
      {
        type: 'category',
        label: 'Monitoring Flows',
        collapsed: false,
        items: ['FlowRuns', 'Notifications']
      },
      {
        type: 'category',
        label: 'Observing Data',
        collapsed: false,
        items: ['AnalysisNotebook', 'DataExplorer', 'Files']
      },
      ]
    },
    {
      type: 'doc',
      id: 'AdminControls',
      label: 'Managing Access'
    },
  ],
  functionSidebar: [
    'functions/FunctionOverview',
    functionDocs
  ],
  releaseSideBar: [
    {
      type: 'doc',
      id: 'releases/ReleaseNotes',
      label: 'Release Notes',
    }
  ]
};
