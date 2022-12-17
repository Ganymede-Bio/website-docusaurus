functionDocs = require("./docs/functions/sidebar.json")
functionDocs.collapsed = false

module.exports = {
  webUiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Overview'],
    },
    {
      type: 'category',
      label: 'Application',
      collapsed: false,
      items: ['Home', 'FlowEditor', 'FlowRuns', 'Files', 'FlowView', 'Notifications', 'AdminControls']
    }
  ],
  functionSidebar: [
    'functions/FunctionOverview',
    functionDocs
  ],
  releaseSideBar: [
    {
      type: 'category',
      label: 'Release Notes',
      collapsed: false,
      items: ['releases/ReleaseNotes']
    }
  ]
};
