# An example http request

This is a sample of sending event data to the tag server

## HTTP Example

```http
POST https://tag.your-domain.com/mark
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
Content-event: application/json
Cookie: _muid=value

{
    "x-cf-ip": "101.2.167.255",
    "x-cf-loc": "BD",
    "pageUrl": "https://test-wp.markopoloai.com/checkout/",
    "event": "Purchase",
    "email": "john@example.com",
    "muid": "ce2825f6-931d-4011-91bc-70dc7b535e10",
    "shipping_cost": "25",
    "tax": 0,
    "value": 113,
    "currency": "USD",
    "mt_ref_src":"",
    "products": [
        {
            "id": 96,
            "name": "Mark-test-prod",
            "variant": "",
            "quantity": 4,
            "price": 12
        },
        {
            "id": 36,
            "name": "new",
            "variant": "",
            "quantity": 2,
            "price": 20
        }
    ]
}
```

## CURL Example

```curl
curl --location 'https://tag.your-domain.com/mark' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
--header 'Content-event: application/json' \
--header 'Cookie: _muid=value; \
--data-raw '{
    "x-cf-ip": "101.2.167.255",
    "x-cf-loc": "BD",
    "pageUrl": "https://test-wp.markopoloai.com/checkout/",
    "event": "Purchase",
    "email": "john@example.com",
    "muid": "ce2825f6-931d-4011-91bc-70dc7b535e10",
    "shipping_cost": "25",
    "tax": 0,
    "value": 113,
    "currency": "USD",
    "mt_ref_src":"",
    "products": [
        {
            "id": 96,
            "name": "Mark-test-prod",
            "variant": "",
            "quantity": 4,
            "price": 12
        },
        {
            "id": 36,
            "name": "new",
            "variant": "",
            "quantity": 2,
            "price": 20
        }
    ]
}'
```

Note: Please replace `https://tag.your-domain.com` and other placeholder values with your actual data.
