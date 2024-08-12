nodeAnalysis = require('./docs/nodes/Analysis/sidebar.json')
nodeApp = require('./docs/nodes/App/sidebar.json')
nodeFile = require('./docs/nodes/File/sidebar.json')
nodeInstrument = require('./docs/nodes/Instrument/sidebar.json')
nodeTag = require('./docs/nodes/Tag/sidebar.json')
nodeSDKAPI = require('./docs/sdk/markdowns/sidebar_api.json')
nodeSDKAnalytics = require('./docs/sdk/markdowns/sidebar_analytics.json')

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
        label: 'Ganymede Concepts'
      },
      {
        type: 'doc',
        id: 'ReferenceArchitectures',
        label: 'Reference Architectures'
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
            label: 'Agents for Instrument Data Capture and Delivery'
          },
          {
            type: 'doc',
            id: 'connectivity/BrowserFileWatcher',
            label: 'Capture Files with Browser'
          },
          {
            type: 'doc',
            id: 'connectivity/Tags',
            label: 'Tagging Files'
          },
          {
            type: 'doc',
            id: 'connectivity/DebuggingAgents',
            label: 'Troubleshooting Agents'
          },
          {
            type: 'doc',
            id: 'connectivity/AgentLogs',
            label: 'Agent Logs and Reference'
          }
        ]
      },
      {
        type: 'category',
        label: 'Processing Data',
        collapsed: true,
        items: [
          {
            type: 'category',
            label: 'Editing and Running Flows',
            collapsed: false,
            items: ['Home', 'FlowEditor', 'NodeEditor', 'FlowView', 'NotebookTips'],
          },
          {
            type: 'category',
            label: 'Monitoring Flows',
            collapsed: true,
            items: ['FlowRuns', 'Notifications']
          },
          {
            type: 'doc',
            id: 'Virtualization',
            label: 'Virtualization'
          },
          {
            type: 'doc',
            id: 'TroubleshootingDataProcessing',
            label: 'Troubleshooting Flows and Virtualization'
          }
        ]
      },
      {
        type: 'category',
        label: 'Observing Data',
        collapsed: true,
        items: ['Files', 'Dashboards', 'TagActivity', 'DataExplorer', 'AnalysisNotebook', 'SystemMetadata', 'DashboardTips']
      },
      {
        type: 'category',
        label: 'Environment Setup',
        collapsed: false,
        items: ['configuration/SSOConfig', 'configuration/AgentNetworkConfig', 'configuration/S3EventConfig']
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
  SDKSidebar: [
    {
      type: 'doc',
      id: 'sdk/GanymedeSDKOverview',
    },
    {
      type: 'doc',
      id: 'sdk/GanymedeClass',
    },
    {
      type: 'doc',
      id: 'sdk/BenchlingClass',
    },
    {
      type: 'category',
      label: 'Validation and Tags',
      items: [
        {
          type: 'doc',
          id: 'sdk/DataValidation',
        },
        {
          type: 'doc',
          id: 'sdk/markdowns/allotrope_schema',
          label: 'Allotrope'
        },
        {
          type: 'doc',
          id: 'sdk/FileTags',
        }
      ],
      collapsed: false
    },
    {
      type: 'doc',
      id: 'sdk/AI',
      label: 'AI Help and Code Generation'
    },
    {
      type: 'category',
      label: 'SDK',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'sdk/markdowns/AgentModelsAndMethods',
        },
        {
          type: 'doc',
          id: 'sdk/markdowns/EnvironmentDetection',
        },
        nodeSDKAPI,
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
      items: ['releases/202408', 'releases/202407', 'releases/202406', 'releases/202405', 'releases/202404', 'releases/202403', 'releases/202402', 'releases/202401']
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
    {
      type: 'doc',
      id: 'releases/AgentVersionHistory',
    }
  ]
};
