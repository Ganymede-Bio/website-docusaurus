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
        type: 'category',
        label: 'Introduction',
        collapsed: false,
        items: [
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
            type: 'doc',
            id: 'ReferenceArchitectures',
            label: 'Reference Architectures'
          },
        ]
      },
      {
        type: 'category',
        label: 'Flows',
        collapsed: true,
        items: [
          {
            type: 'category',
            label: 'Building Flows',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'QuickstartBuildFlow',
                label: 'Quickstart'
              },
              'FlowEditor',
              'NodeEditor',
              {
                type: 'doc',
                id: 'NotebookTips',
                label: 'Notebook Tips and Tricks'
              },
              'TroubleshootingFlows'
              ],
          },
          {
            type: 'category',
            label: 'Flow Execution',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'FlowView',
                label: 'Running Flows'
              },
              'FlowRuns', 'Notifications']
          },
        ]
      },
      {
        type: 'category',
        label: 'Agents & Connections',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'QuickstartBuildAgent',
            label: 'Quickstart'
          },
          'configuration/AgentNetworkConfig',
          {
            type: 'doc',
            id: 'connectivity/Agent',
            label: 'Configuring Agents'
          },
          {
            type: 'doc',
            id: 'connectivity/AgentMonitoring',
            label: 'Monitoring Agents'
          },
          {
            type: 'doc',
            id: 'connectivity/DebuggingAgents',
            label: 'Troubleshooting Agents'
          },
          {
            type: 'doc',
            id: 'connectivity/AgentLogs',
            label: 'Agent Logging and Reference'
          },
        ]
      },
      {
        type: 'category',
        label: 'Files',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'Files',
            label: 'Browsing Files'
          },
          
          {
            type: 'doc',
            id: 'connectivity/Tags',
            label: 'Tagging Files'
          },
          {
            type: 'doc',
            id: 'TagActivity',
            label: 'Exploring Tag Activity'
          }
        ]
      },
      {
        type: 'category',
        label: 'Tables',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'DataExplorer',
            label: 'Data Explorer'
          }
        ],
      },
      {
        type: 'category',
        label: 'Dashboards',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'QuickstartCreateDashboard',
            label: 'Quickstart'
          },
          {
            type: 'doc',
            id: 'Dashboards',
            label: 'Building Dashboards'
          },
          'DashboardTips'
        ]
      },
      {
        type: 'category',
        label: 'Virtualization',
        collapsed: true,
        items: [{
          type: 'doc',
          id: 'Virtualization',
          label: 'Using Virtualization'
        },
        {
          type: 'doc',
          id: 'TroubleshootingVirtualization',
          label: 'Troubleshooting Virtualization'
        }
        ]
      },
      {
        type: 'category',
        label: 'Environment Administration',
        collapsed: true,
        items: [
          'AdminControls',
          {
            type: 'doc',
            id: 'configuration/SSOConfig',
            label: 'SSO/SAML Configuration'
          },
          {
            type: 'category',
            label: 'Events',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'configuration/S3EventConfig',
                label: 'S3 Event-Driven Flows'
              },
              {
                type: 'doc',
                id: 'configuration/BenchlingEventConfig',
                label: 'Benchling Event-Driven Flows'
              }
            ]
          },
        ]
      },
      {
        type: 'doc',
        id: 'Support',
        label: 'Support'
      }
    ],
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
