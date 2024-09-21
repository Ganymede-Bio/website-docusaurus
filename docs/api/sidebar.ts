import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Agents",
      items: [
        {
          type: "doc",
          id: "api/get-agent",
          label: "getAgent",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/download-agent",
          label: "downloadAgent",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-agents",
          label: "getAgents",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Connections",
      items: [
        {
          type: "doc",
          id: "api/get-connection",
          label: "getConnection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-connections",
          label: "getConnections",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Files",
      items: [
        {
          type: "doc",
          id: "api/get-file",
          label: "getFile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-files",
          label: "getFiles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/download-file",
          label: "downloadFile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upload-file",
          label: "uploadFile",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Flows",
      items: [
        {
          type: "doc",
          id: "api/get-flow",
          label: "getFlow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-flows",
          label: "getFlows",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "FlowRuns",
      items: [
        {
          type: "doc",
          id: "api/get-flow-run",
          label: "getFlowRun",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-flow-runs",
          label: "getFlowRuns",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tables",
      items: [
        {
          type: "doc",
          id: "api/get-table",
          label: "getTable",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-tables",
          label: "getTables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/post-query",
          label: "postQuery",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "api/schemas/agentstate",
          label: "AgentState",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/tag",
          label: "Tag",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/agent",
          label: "Agent",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/connectionstate",
          label: "ConnectionState",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/connection",
          label: "Connection",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/file",
          label: "File",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/fileuploadbody",
          label: "FileUploadBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/flow",
          label: "Flow",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/flowrunstate",
          label: "FlowRunState",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/flowrun",
          label: "FlowRun",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/schemafield",
          label: "SchemaField",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/table",
          label: "Table",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/postquerybody",
          label: "PostQueryBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/tablerow",
          label: "TableRow",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
