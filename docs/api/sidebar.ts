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
          className: "api-method get"},
        {
          type: "doc",
          id: "api/download-agent",
          label: "downloadAgent",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-agents",
          label: "getAgents",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Connections",
      items: [
        {
          type: "doc",
          id: "api/get-connection",
          label: "getConnection",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-connections",
          label: "getConnections",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Files",
      items: [
        {
          type: "doc",
          id: "api/get-file",
          label: "getFile",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-files",
          label: "getFiles",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/download-file",
          label: "downloadFile",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/upload-file",
          label: "uploadFile",
          className: "api-method post"},
        {
          type: "doc",
          id: "api/modify-file-tags",
          label: "modifyFileTags",
          className: "api-method put"}]},
    {
      type: "category",
      label: "Flows",
      items: [
        {
          type: "doc",
          id: "api/get-flow",
          label: "getFlow",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-flows",
          label: "getFlows",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-flow-inputs",
          label: "getFlowInputs",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/trigger-flow",
          label: "triggerFlow",
          className: "api-method post"}]},
    {
      type: "category",
      label: "FlowRuns",
      items: [
        {
          type: "doc",
          id: "api/get-flow-run",
          label: "getFlowRun",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-flow-runs",
          label: "getFlowRuns",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Tables",
      items: [
        {
          type: "doc",
          id: "api/get-table",
          label: "getTable",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-tables",
          label: "getTables",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/post-query",
          label: "postQuery",
          className: "api-method post"},
        {
          type: "doc",
          id: "api/stream-data",
          label: "streamData",
          className: "api-method post"}]},
    {
      type: "category",
      label: "Secrets",
      items: [
        {
          type: "doc",
          id: "api/get-secret",
          label: "getSecret",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Commits",
      items: [
        {
          type: "doc",
          id: "api/get-repository-commits",
          label: "getRepositoryCommits",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/post-repository-commits",
          label: "postRepositoryCommits",
          className: "api-method put"}]},
    {
      type: "category",
      label: "Instrument Runs",
      items: [
        {
          type: "doc",
          id: "api/create-instrument-run",
          label: "createInstrumentRun",
          className: "api-method post"},
        {
          type: "doc",
          id: "api/get-instrument-run",
          label: "getInstrumentRun",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/update-instrument-run",
          label: "updateInstrumentRun",
          className: "api-method patch"},
        {
          type: "doc",
          id: "api/delete-instrument-run",
          label: "deleteInstrumentRun",
          className: "api-method delete"},
        {
          type: "doc",
          id: "api/get-instrument-runs-by-external-id",
          label: "getInstrumentRunsByExternalId",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-instrument-runs-by-flow-run-id",
          label: "getInstrumentRunsByFlowRunId",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Unit Operation Runs",
      items: [
        {
          type: "doc",
          id: "api/create-unit-operation-run",
          label: "createUnitOperationRun",
          className: "api-method post"},
        {
          type: "doc",
          id: "api/get-unit-operation-run",
          label: "getUnitOperationRun",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/update-unit-operation-run",
          label: "updateUnitOperationRun",
          className: "api-method patch"},
        {
          type: "doc",
          id: "api/delete-unit-operation-run",
          label: "deleteUnitOperationRun",
          className: "api-method delete"},
        {
          type: "doc",
          id: "api/get-unit-operation-runs-by-external-id",
          label: "getUnitOperationRunsByExternalId",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-unit-operation-runs-by-flow-run-id",
          label: "getUnitOperationRunsByFlowRunId",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Process Runs",
      items: [
        {
          type: "doc",
          id: "api/create-process-run",
          label: "createProcessRun",
          className: "api-method post"},
        {
          type: "doc",
          id: "api/get-process-run",
          label: "getProcessRun",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/update-process-run",
          label: "updateProcessRun",
          className: "api-method patch"},
        {
          type: "doc",
          id: "api/delete-process-run",
          label: "deleteProcessRun",
          className: "api-method delete"},
        {
          type: "doc",
          id: "api/get-process-runs-by-external-id",
          label: "getProcessRunsByExternalId",
          className: "api-method get"},
        {
          type: "doc",
          id: "api/get-process-runs-by-flow-run-id",
          label: "getProcessRunsByFlowRunId",
          className: "api-method get"}]},
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "api/schemas/agentstate",
          label: "AgentState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/tag",
          label: "Tag",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/agentversion",
          label: "AgentVersion",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/agent",
          label: "Agent",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectionstate",
          label: "ConnectionState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connection",
          label: "Connection",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/file",
          label: "File",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/fileuploadbody",
          label: "FileUploadBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/filetagupdatebody",
          label: "FileTagUpdateBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flow",
          label: "Flow",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flowinputschema",
          label: "FlowInputSchema",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flowinput",
          label: "FlowInput",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/triggerflowbody",
          label: "TriggerFlowBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flowrunstate",
          label: "FlowRunState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flowrun",
          label: "FlowRun",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/schemafield",
          label: "SchemaField",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/table",
          label: "Table",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/postquerybody",
          label: "PostQueryBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/tablerow",
          label: "TableRow",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/streambody",
          label: "StreamBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/hoststate",
          label: "HostState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/eventconfiguration",
          label: "EventConfiguration",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/supportedhostoperatingsystems",
          label: "SupportedHostOperatingSystems",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/supportedhostmachinearchitectures",
          label: "SupportedHostMachineArchitectures",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/hostinferreddata",
          label: "HostInferredData",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/hostversionmetadata",
          label: "HostVersionMetadata",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectortriggeroptions",
          label: "ConnectorTriggerOptions",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectionfilewatcher",
          label: "ConnectionFileWatcher",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectioncron",
          label: "ConnectionCron",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectioncloudwatcher",
          label: "ConnectionCloudWatcher",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectionconfigoneshot",
          label: "ConnectionConfigOneShot",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cloudprovider",
          label: "CloudProvider",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/bucketowner",
          label: "BucketOwner",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/ingestbucket",
          label: "IngestBucket",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectortriggertemplate",
          label: "ConnectorTriggerTemplate",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/configurableconnectorstypes",
          label: "ConfigurableConnectorsTypes",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/legacyfwflowconnectionconfig",
          label: "LegacyFWFlowConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/legacyfwuploadconnectionconfig",
          label: "LegacyFWUploadConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/fwflowconnectionconfig",
          label: "FWFlowConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/fwuploadconnectionconfig",
          label: "FWUploadConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/legacycwsavefileconnectionconfig",
          label: "LegacyCWSaveFileConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cronflowconnectionconfig",
          label: "CronFlowConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cronuploadconnectionconfig",
          label: "CronUploadConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cwsavefileconnectionconfig",
          label: "CWSaveFileConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/oneshotflowconnectionconfig",
          label: "OneShotFlowConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/oneshotuploadconnectionconfig",
          label: "OneShotUploadConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/appstartupconnectionconfig",
          label: "AppStartupConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/appcleanupconnectionconfig",
          label: "AppCleanupConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/appcleanupflowconnectionconfig",
          label: "AppCleanupFlowConnectionConfig",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectiontemplate",
          label: "ConnectionTemplate",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/filetagtype",
          label: "FileTagType",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/unappliedfiletag",
          label: "UnappliedFileTag",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectorstate",
          label: "ConnectorState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/generatedasset",
          label: "GeneratedAsset",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/assetlist",
          label: "AssetList",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/buildeventclass",
          label: "BuildEventClass",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectorhistoryentry",
          label: "ConnectorHistoryEntry",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cronparam",
          label: "CronParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/globparam",
          label: "GlobParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/filewatcherparam",
          label: "FileWatcherParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/inputparamtypeenum",
          label: "InputParamTypeEnum",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/inputparam",
          label: "InputParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/triggerflowparam",
          label: "TriggerFlowParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/cloudwatcherparam",
          label: "CloudWatcherParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/oneshotparam",
          label: "OneShotParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/eventfilewatcherparam",
          label: "EventFileWatcherParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/placeholderparam",
          label: "PlaceholderParam",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/actionoptions",
          label: "ActionOptions",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/triggeroptions",
          label: "TriggerOptions",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/agentstatev-4",
          label: "AgentStateV4",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/supportedconnectionoperatingsystems",
          label: "SupportedConnectionOperatingSystems",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/supportedconnectionmachinearchitectures",
          label: "SupportedConnectionMachineArchitectures",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/inferreddata",
          label: "InferredData",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/secret",
          label: "Secret",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/accesstype",
          label: "AccessType",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/applicationsession",
          label: "ApplicationSession",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/user",
          label: "User",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/historyentryv-4",
          label: "HistoryEntryV4",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/hoststatus",
          label: "HostStatus",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/hoststatusentity",
          label: "HostStatusEntity",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/ownertype",
          label: "ownerType",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/datasetkind",
          label: "datasetKind",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/bqtablecolumn",
          label: "BqTableColumn",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/bqtable",
          label: "BqTable",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/legacyagentmetadata",
          label: "LegacyAgentMetadata",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectorconnectionstate",
          label: "ConnectorConnectionState",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/connectorconnectionstatus",
          label: "ConnectorConnectionStatus",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/postrepositorycommitsbody",
          label: "postRepositoryCommitsBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/flowrunidentifier",
          label: "FlowRunIdentifier",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/initiatordto",
          label: "InitiatorDTO",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/createinstrumentrunbody",
          label: "CreateInstrumentRunBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/instrumentrundto",
          label: "InstrumentRunDTO",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/updateinstrumentrunbody",
          label: "UpdateInstrumentRunBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/createunitoperationrunbody",
          label: "CreateUnitOperationRunBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/unitoperationrundto",
          label: "UnitOperationRunDTO",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/updateunitoperationrunbody",
          label: "UpdateUnitOperationRunBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/createprocessrunbody",
          label: "CreateProcessRunBody",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/processrundto",
          label: "ProcessRunDTO",
          className: "schema"},
        {
          type: "doc",
          id: "api/schemas/updateprocessrunbody",
          label: "UpdateProcessRunBody",
          className: "schema"}]}]};

export default sidebar.apisidebar;
