nodeAnalysis = require('./docs/nodes/Analysis/sidebar.json')
nodeApp = require('./docs/nodes/App/sidebar.json')
nodeFile = require('./docs/nodes/File/sidebar.json')
nodeInstrument = require('./docs/nodes/Instrument/sidebar.json')
nodeTag = require('./docs/nodes/Tag/sidebar.json')
nodeTest = require('./docs/nodes/Test/sidebar.json')

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
        type: 'category',
        label: 'Editing Flows',
        collapsed: false,
        items: ['FlowEditor', 'Nodes'],
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
  nodeSidebar: [
    {
      type: 'doc',
      id: 'nodes/NodeOverview',
      label: 'Node Overview'
    },
    {
      type: 'category',
      label: 'Node Types',
      collapsed: false,
      items: [nodeAnalysis,
        nodeApp,
        nodeFile,
        nodeInstrument,
        nodeTag,
        nodeTest]
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
