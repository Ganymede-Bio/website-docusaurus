import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    ,
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
        {
          type: "doc",
          id: "api/modify-file-tags",
          label: "modifyFileTags",
          className: "api-method put",
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
        {
          type: "doc",
          id: "api/get-flow-inputs",
          label: "getFlowInputs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/trigger-flow",
          label: "triggerFlow",
          className: "api-method post",
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
        {
          type: "doc",
          id: "api/stream-data",
          label: "streamData",
          className: "api-method post",
        },
      ],
    },

    {
      type: "category",
      label: "Commits",
      items: [
        {
          type: "doc",
          id: "api/get-repository-commits",
          label: "getRepositoryCommits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/post-repository-commits",
          label: "postRepositoryCommits",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Instrument Runs",
      items: [
        {
          type: "doc",
          id: "api/create-instrument-run",
          label: "createInstrumentRun",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/find-instrument-runs",
          label: "getInstrumentRunsByFilters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-instrument-run",
          label: "getInstrumentRun",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-instrument-run",
          label: "updateInstrumentRun",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-instrument-run",
          label: "deleteInstrumentRun",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-instrument-runs-by-external-id",
          label: "getInstrumentRunsByExternalId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-instrument-runs-by-flow-run-id",
          label: "getInstrumentRunsByFlowRunId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-instrument-runs-by-instrument-id",
          label: "getInstrumentRunsByInstrumentId",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Unit Operation Runs",
      items: [
        {
          type: "doc",
          id: "api/create-unit-operation-run",
          label: "createUnitOperationRun",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/find-unit-operation-runs",
          label: "getUnitOperationRunsByFilters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-unit-operation-run",
          label: "getUnitOperationRun",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-unit-operation-run",
          label: "updateUnitOperationRun",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-unit-operation-run",
          label: "deleteUnitOperationRun",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-unit-operation-runs-by-external-id",
          label: "getUnitOperationRunsByExternalId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-unit-operation-runs-by-flow-run-id",
          label: "getUnitOperationRunsByFlowRunId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-unit-operation-runs-by-unit-operation-id",
          label: "getUnitOperationRunsByUnitOperationId",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Process Runs",
      items: [
        {
          type: "doc",
          id: "api/create-process-run",
          label: "createProcessRun",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/find-process-runs",
          label: "getProcessRunsByFilters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-process-run",
          label: "getProcessRun",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-process-run",
          label: "updateProcessRun",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-process-run",
          label: "deleteProcessRun",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-process-runs-by-external-id",
          label: "getProcessRunsByExternalId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-process-runs-by-flow-run-id",
          label: "getProcessRunsByFlowRunId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-process-runs-by-process-id",
          label: "getProcessRunsByProcessId",
          className: "api-method get",
        },
      ],
    },
        {
      type: "category",
      label: "Instruments",
      items: [
        {
          type: "doc",
          id: "api/get-instruments",
          label: "getInstruments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-instrument",
          label: "getInstrument",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ModularAnalysis",
      items: [
        {
          type: "doc",
          id: "api/get-modular-analysis-sessions",
          label: "getModularAnalysisSessions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "AppConfigs",
      items: [
        {
          type: "doc",
          id: "api/get-app-config",
          label: "getAppConfig",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-app-config",
          label: "createAppConfig",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-app-config",
          label: "deleteAppConfig",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/update-app-config",
          label: "updateAppConfig",
          className: "api-method patch",
        },        
      ],
    },

  ],
};

export default sidebar.apisidebar;
