# Mars-Rover-API
An API that generates random Mars Rover quotes in the form of JSON

## API Endpoint
The API endpoint for generating a Mars Rover quote is:

```
/mars-api
```

# Example Usage
You can use any programming language or HTTP client library to make requests to the Mars Rover API. Here are a few examples using popular programming languages:


### Python

```python
import requests

url = 'https://killereq-pl.github.io/Mars-Rover-API/mars-api'
response = requests.get(url)
data = response.json()

random_string = data['string']
print(random_string)
```

### JavaScript (Node.js)
```javascript
const fetch = require('node-fetch');

const url = 'https://killereq-pl.github.io/Mars-Rover-API/mars-api';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const randomString = data.string;
    console.log(randomString);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### cURL
```curl
curl https://killereq-pl.github.io/Mars-Rover-API/mars-api
```
