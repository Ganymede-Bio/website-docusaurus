Represents an OAuth access token.

Implements TokenCredential Class, which is a protocol for classes to provide OAuth tokens
More detail can be found here: https://learn.microsoft.com/en-us/python/api/azure-core/azure.core.credentials.tokencredential?view=azure-python

#### idtoken\_from\_metadata\_server

```python
def idtoken_from_metadata_server(url: str)
```

Use the Google Cloud metadata server in the Cloud Run (or AppEngine or Kubernetes etc.,)
environment to create an identity token and add it to the HTTP request as part of an
Authorization header.

**Arguments**:

- `url` - The url or target audience to obtain the ID token for.
- `Examples` - http://www.abc.com

