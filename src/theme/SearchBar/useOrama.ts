// @ts-nocheck
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { usePluginData } from "@docusaurus/useGlobalData";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { create, insertMultiple } from "@orama/orama";
import { pluginAnalytics } from "@orama/plugin-analytics";
import { presets } from "@orama/searchbox";
import "@orama/searchbox/dist/index.css";
import { OramaClient } from "@oramacloud/client";
import { ungzip } from "pako";
import { useEffect, useState } from "react";

export const useOrama = () => {
  const [searchBoxConfig, setSearchBoxConfig] = useState(null);
  const { colorMode } = useColorMode();
  const { searchData, endpoint, analytics }: PluginData = usePluginData(
    "@orama/plugin-docusaurus-v3"
  ) as PluginData;

  const baseURL = useBaseUrl("orama-search-index-current.json.gz");
  const isBrowser = useIsBrowser();
  useEffect(() => {
    async function loadOrama() {
      if (endpoint) {
        setSearchBoxConfig({
          oramaInstance: new OramaClient({
            endpoint: endpoint.url,
            api_key: endpoint.key,
          }),
        });
      } else {
        let buffer;

        if (searchData?.current) {
          buffer = searchData.current.data;
        } else {
          const searchResponse = await fetch(baseURL);

          if (searchResponse.status === 0) {
            throw new Error(`Network error: ${await searchResponse.text()}`);
          } else if (searchResponse.status !== 200) {
            throw new Error(
              `HTTP error ${
                searchResponse.status
              }: ${await searchResponse.text()}`
            );
          }

          buffer = await searchResponse.arrayBuffer();
        }

        const deflated = ungzip(buffer, { to: "string" });
        const parsedDeflated = JSON.parse(deflated);

        const db = await create({
          schema: { ...presets.docs.schema, version: "enum" },
          plugins: [
            ...(analytics
              ? [
                  pluginAnalytics({
                    apiKey: analytics.apiKey,
                    indexId: analytics.indexId,
                    enabled: analytics.enabled,
                  }),
                ]
              : []),
          ],
        });

        await insertMultiple(db, Object.values(parsedDeflated.docs.docs));

        setSearchBoxConfig({
          oramaInstance: db,
        });
      }
    }

    if (!isBrowser) {
      return;
    }

    loadOrama().catch((error) => {
      console.error("Cannot load search index.", error);
    });
  }, [isBrowser]);

  return { searchBoxConfig, colorMode };
};
