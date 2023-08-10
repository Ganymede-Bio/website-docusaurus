nodeAnalysis = require('./docs/nodes/Analysis/sidebar.json')
nodeApp = require('./docs/nodes/App/sidebar.json')
nodeFile = require('./docs/nodes/File/sidebar.json')
nodeInstrument = require('./docs/nodes/Instrument/sidebar.json')
nodeTag = require('./docs/nodes/Tag/sidebar.json')
nodeSDK = require('./docs/sdk/sdk_markdowns/sidebar.json')

module.exports = {
  webUiSidebar:
    [
      {
        type: 'doc',
        id: 'Welcome',
        label: 'Welcome',
      },
      {
        type: 'doc',
        id: 'Concepts',
        label: 'Concepts'
      },
      {
        type: 'category',
        label: 'Quickstart Guides',
        collapsed: false,
        items: [
          {
            type: 'doc',
            id: 'QuickstartBuildFlow',
            label: 'QuickstartBuildFlow'
          },
          {
            type: 'doc',
            id: 'QuickstartCreateDashboard',
            label: 'QuickstartCreateDashboard'
          }
        ]
      },
      {
        type: 'category',
        label: 'Acquiring Data',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'connectivity/Overview',
            label: 'Ways to Capture Data'
          },
          {
            type: 'doc',
            id: 'connectivity/Agent',
            label: 'Capture Files with Agents'
          },
          {
            type: 'doc',
            id: 'connectivity/FileWatcher',
            label: 'Capture Files with Browser'
          }
        ]
      },
      {
        type: 'category',
        label: 'Processing Data',
        collapsed: true,
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
          items: ['FlowEditor', 'NodeEditor'],
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
        collapsed: true,
        items: ['Files', 'Dashboards', 'AnalysisNotebook', 'DataExplorer']
      },
      {
        type: 'doc',
        id: 'NotebookTips',
        label: 'Notebook Tips'
      },
      {
        type: 'doc',
        id: 'AdminControls',
        label: 'Environment Administration'
      },
    ]
  ,
  nodeSidebar: [
    {
      type: 'doc',
      id: 'nodes/NodeOverview',
    },
    {
      type: 'category',
      label: 'Node Category',
      collapsed: false,
      items: [
        nodeAnalysis,
        nodeApp,
        nodeFile,
        nodeInstrument,
        nodeTag]
    }
  ],
  SDKSidebar: [
    {
      type: 'doc',
      id: 'sdk/GanymedeSDKOverview',
    },
    {
      type: 'doc',
      id: 'FlowMetadata',
      label: 'Flow Context & Metadata'
    },
    {
      type: 'doc',
      id: 'sdk/ModuleIO',
    },
    {
      type: 'doc',
      id: 'sdk/ModuleEditor',
    },
    nodeSDK,
    {
      type: 'doc',
      id: 'sdk/GPT',
      label: 'GPT'
    }
  ],
  releaseSideBar: [
    {
      type: 'category',
      label: '2023',
      collapsed: false,
      items: ['releases/202308', 'releases/202307', 'releases/202306', 'releases/202305', 'releases/202304', 'releases/202303', 'releases/202302', 'releases/202301']
    },
    {
      type: 'category',
      label: '2022',
      collapsed: false,
      items: ['releases/202212', 'releases/202211', 'releases/202210', 'releases/202209']
    },
  ]
};
