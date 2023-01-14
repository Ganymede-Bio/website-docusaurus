import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export default function DocSearch() {
  return (
    <DocSearch
      appId={process.env.ALGOLIA_APPLICATION_ID}
      indexName={process.env.ALGOLIA_API_KEY}
      apiKey={process.env.ALGOLIA_INDEX_NAME}
    />
  );
}
