functionAnalysis = require('./docs/functions/Analysis/sidebar.json')
functionApp = require('./docs/functions/App/sidebar.json')
functionFile = require('./docs/functions/File/sidebar.json')
functionInstrument = require('./docs/functions/Instrument/sidebar.json')
functionTag = require('./docs/functions/Tag/sidebar.json')
functionTest = require('./docs/functions/Test/sidebar.json')

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
    {
      type: 'doc',
      id: 'functions/FunctionOverview',
      label: 'Function Overview'
    },
    {
      type: 'category',
      label: 'Function Types',
      collapsed: false,
      items: [functionAnalysis,
        functionApp,
        functionFile,
        functionInstrument,
        functionTag,
        functionTest]
    }
  ],
  releaseSideBar: [
    {
      type: 'doc',
      id: 'releases/ReleaseNotes',
      label: 'Release Notes',
    }
  ]
};
