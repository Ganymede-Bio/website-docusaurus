nodeAnalysis = require('./docs/nodes/Analysis/sidebar.json')
nodeApp = require('./docs/nodes/App/sidebar.json')
nodeFile = require('./docs/nodes/File/sidebar.json')
nodeInstrument = require('./docs/nodes/Instrument/sidebar.json')
nodeTag = require('./docs/nodes/Tag/sidebar.json')
nodeSDKApi = require('./docs/api/markdowns/sidebar_apps.json')
nodeSDKAnalytics = require('./docs/api/markdowns/sidebar_analytics.json')

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
            id: 'QuickstartBuildAgent',
            label: 'QuickstartBuildAgent'
          },
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
          },
          {
            type: 'doc',
            id: 'connectivity/Tags',
            label: 'Tagging Files'
          }
          ,
          {
            type: 'doc',
            id: 'connectivity/DebuggingAgents',
            label: 'Agent FAQ and Debugging'
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
          collapsed: false,
          items: ['Home', 'FlowView']
        },
        {
          type: 'category',
          label: 'Editing Flows',
          collapsed: false,
          items: ['FlowEditor', 'NodeEditor', 'SystemMetadata', 'DebuggingFlows'],
        },
        {
          type: 'category',
          label: 'Monitoring Flows',
          collapsed: false,
          items: ['FlowRuns', 'Notifications']
        },
        {
          type: 'doc',
          id: 'Virtualization',
          label: 'Virtualization'
        }]
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
      {
        type: 'doc',
        id: 'Support',
        label: 'Support'
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
  APISidebar: [
    {
      type: 'doc',
      id: 'api/GanymedeSDKOverview',
    },
    {
      type: 'doc',
      id: 'api/GanymedeClass',
    },
    {
      type: 'doc',
      id: 'api/BenchlingClass',
    },
    {
      type: 'category',
      label: 'Validation and Tags',
      items: [
        {
          type: 'doc',
          id: 'api/DataValidation',
        },
        {
          type: 'doc',
          id: 'api/markdowns/allotrope_schema',
          label: 'Allotrope'
        },
        {
          type: 'doc',
          id: 'api/FileTags',
        }
      ],
      collapsed: false
    },
    {
      type: 'doc',
      id: 'api/GPT',
      label: 'GPT'
    },
    {
        type: 'category',
        label: 'SDK',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'api/markdowns/AgentDataModels',
          },
          {
            type: 'doc',
            id: 'api/markdowns/EnvironmentDetection',
          },
            nodeSDKApi,
            nodeSDKAnalytics
        ],
        collapsed: false
    }
  ],
  releaseSideBar: [
    {
      type: 'category',
      label: '2024',
      collapsed: false,
      items: ['releases/202405', 'releases/202404', 'releases/202403', 'releases/202402', 'releases/202401']
    },
    {
      type: 'category',
      label: '2023',
      collapsed: true,
      items: ['releases/202312', 'releases/202311', 'releases/202310', 'releases/202309', 'releases/202308', 'releases/202307', 'releases/202306', 'releases/202305', 'releases/202304', 'releases/202303', 'releases/202302', 'releases/202301']
    },
    {
      type: 'category',
      label: '2022',
      collapsed: true,
      items: ['releases/202212', 'releases/202211', 'releases/202210', 'releases/202209']
    },
  ]
};
