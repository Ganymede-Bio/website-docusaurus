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
            id: 'app/intro/Welcome',
            label: 'Welcome',
          },
          {
            type: 'doc',
            id: 'app/intro/Concepts',
            label: 'Concepts'
          },
          {
            type: 'doc',
            id: 'app/intro/ReferenceArchitectures',
            label: 'Reference Architectures'
          },
          {
            type: 'category',
            label: 'Quickstart',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'app/flows/QuickstartBuildFlow',
                label: 'Build a Flow'
              },
              {
                type: 'doc',
                id: 'app/agents/QuickstartBuildAgent',
                label: 'Build an Agent'
              },
              {
                type: 'doc',
                id: 'app/visualization/QuickstartCreateDashboard',
                label: 'Create a Dashboard'
              }
            ]
          }
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
              'app/flows/FlowEditor',
              'app/flows/NodeEditor',
              {
                type: 'doc',
                id: 'app/flows/NotebookTips',
                label: 'Notebook Tips and Tricks'
              },
              'app/flows/TroubleshootingFlows'
              ],
          },
          {
            type: 'category',
            label: 'Nodes',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'nodes/NodeOverview',
              },
              {
                type: 'category',
                label: 'Node Types',
                collapsed: false,
                items: [
                  nodeAnalysis,
                  nodeApp,
                  nodeFile,
                  nodeInstrument,
                  nodeTag]
              }
            ]
          },
          {
            type: 'category',
            label: 'Flow Execution',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'app/flows/FlowView',
                label: 'Running Flows'
              },
              'app/flows/FlowRuns', 'app/flows/Notifications']
          },
          {
            type: 'doc',
            label: 'Ganymede Metadata Tables',
            id: 'app/flows/SystemMetadata'
          }
        ]
      },
      {
        type: 'category',
        label: 'Agents & Connections',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'app/agents/Agent',
            label: 'Agent Overview & Configuration'
          },
          {
            type: 'doc',
            id: 'app/agents/AgentMonitoring',
            label: 'Connections Configuration & Maintenance'
          },
          {
            type: 'doc', 
            id: 'app/agents/AgentInstall',
            label: 'Installing Agent Connections'
          },
          {
            type: 'category',
            label: 'Reference & Troubleshooting',
            collapsed: false,
            items: [
              'app/configuration/AgentSystemRequirements',
              {
                type: 'doc',
                id: 'app/agents/DebuggingAgents',
                label: 'Troubleshooting Agents & FAQ'
              },
              {
                type: 'doc',
                id: 'app/agents/AgentTemplates',
                label: 'Example Agent Templates'
              },
              {
                type: 'doc',
                id: 'app/agents/AgentLogs',
                label: 'Agent Logging and Reference'
              },
              {
                type: 'ref',
                id: 'releases/AgentVersionHistory',
                label: 'Agent Change Log'
              },
            ]
          }
        ]
      },
      {
        type: 'doc',
        id: 'app/instruments/Instruments',
        label: 'Instruments',
      },
      {
        type: 'category',
        label: 'Files',
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'app/files/FileBrowser',
            label: 'Browsing Files'
          },
          
          {
            type: 'doc',
            id: 'app/files/Tags',
            label: 'Tagging Files'
          },
          {
            type: 'doc',
            id: 'app/files/TagActivity',
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
            id: 'app/tables/DataExplorer',
            label: 'Data Explorer'
          }
        ],
      },
      {
        type: 'category',
        label: 'Dashboards and Visualization',
        collapsed: true,
        items: [
          {
            type: 'category',
            label: 'Dashboards',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'app/visualization/Dashboards',
                label: 'Building Dashboards'
              },
              'app/visualization/DashboardTips']
          },
          'app/visualization/AnalysisNotebook'
        ]
      },
      {
        type: 'category',
        label: 'Virtualization',
        collapsed: true,
        items: [{
          type: 'doc',
          id: 'app/virt/Virtualization',
          label: 'Using Virtualization'
        },
        {
          type: 'doc',
          id: 'app/virt/TroubleshootingVirtualization',
          label: 'Troubleshooting Virtualization'
        }
        ]
      },
      {
        type: 'category',
        label: 'Environment Administration',
        collapsed: true,
        items: [
          'app/admin/AdminControls',
          {
            type: 'category',
            label: 'Authentication',
            items: [
              {
                type: 'doc',
                id: 'app/configuration/SharedComputerAutoLogout',
                label: 'Shared Computer Auto Logout'
              },
              {
                type: 'doc',
                id: 'app/configuration/SSOConfig',
                label: 'SSO/SAML Configuration'
              }              
            ]
          },
          {
            type: 'category',
            label: 'Events',
            collapsed: false,
            items: [
              {
                type: 'doc',
                id: 'app/configuration/S3EventConfig',
                label: 'S3 Event-Driven Flows'
              },
              {
                type: 'doc',
                id: 'app/configuration/BenchlingEventConfig',
                label: 'Benchling Event-Driven Flows'
              },
              {
                type: 'doc',
                id: 'app/configuration/GenericWebhookConfig',
                label: 'Webhook Event-Driven Flows'
              }
            ]
          },
          {
            type: 'doc',
            id: 'app/configuration/AuditLog',
            label: 'Audit Log'
          }
        ]
      },
      {
        type: 'doc',
        id: 'app/Support',
        label: 'Support'
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
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'sdk/markdowns/AgentSDK',
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
      items: ['releases/202411', 'releases/202410', 'releases/202409', 'releases/202408', 'releases/202407', 'releases/202406', 'releases/202405', 'releases/202404', 'releases/202403', 'releases/202402', 'releases/202401']
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
      label: 'Agent Change Log'
    }
  ],
  ganymedeapi: [
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        description: `Welcome to the Ganymede application programming interface (API) reference.
        This guide describes various REST API operations for the Ganymede Platform,
        related request and response structures, and error codes. Additional information related
        to available resources can be found in the Systems Reference Table (https://docs.ganymede.bio/app/flows/SystemMetadata). 
        This table includes information about each resources\' unique identifier and where to find them in the Ganymede Platform.`,
        slug: "/api",
      },
      items: require("./docs/api/sidebar.ts"),
    },
  ],
};
