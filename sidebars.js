module.exports = {
  webUiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['Introduction', 'FlowEditor', 'FlowRuns'],
      // Features: ['mdx'],
    },
  ],
  functionSidebar: [
    require("./docs/functions/sidebar.json")
  ]
};
