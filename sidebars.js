functionDocs = require("./docs/functions/sidebar.json")
functionDocs.collapsed = false
module.exports = {
  webUiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['Introduction', 'FlowEditor', 'FlowRuns', 'Files', 'FlowView', 'Notifications'],
      // Features: ['mdx'],
    },
  ],
  functionSidebar: [
    'functions/FunctionOverview',
    functionDocs
  ]
};
