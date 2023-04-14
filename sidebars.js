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
      id: 'Welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'Quickstart',
      label: 'Quickstart',
    },
    {
      type: 'category',
      label: 'Processing Data',
      collapsed: false,
      items: [{
        type: 'category',
        label: 'Running Flows',
        collapsed: true,
        items: ['Home', 'FlowView']
      },
      {
        type: 'category',
        label: 'Editing Flows',
        collapsed: true,
        items: ['FlowEditor', 'NodeEditor', 'FlowMetadata', 'NodeEditorFunctions'],
      },
      {
        type: 'category',
        label: 'Monitoring Flows',
        collapsed: true,
        items: ['FlowRuns', 'Notifications']
      },
      ]
    },
    {
      type: 'category',
      label: 'Observing Data',
      collapsed: false,
      items: ['AnalysisNotebook', 'DataExplorer', 'Files', 'Dashboards']
    },
    {
      type: 'doc',
      id: 'AdminControls',
      label: 'Environment Administration'
    },
  ],
  nodeSidebar: [
    {
      type: 'doc',
      id: 'nodes/NodeOverview',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Node Category',
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
      type: 'category',
      label: '2023',
      collapsed: false,
      items: ['releases/202304', 'releases/202303', 'releases/202302', 'releases/202301']
    },
    {
      type: 'category',
      label: '2022',
      collapsed: false,
      items: ['releases/202212', 'releases/202211', 'releases/202210', 'releases/202209']
    },
  ]
};
