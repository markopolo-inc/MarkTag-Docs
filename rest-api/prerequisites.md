# Prerequisites

## Base URL

```http{1}
POST https://{tag.your-domain.com}/mark
Content-Type: application/json
Cookie: _fbp=fbpValue; _fbc=fbcValue; _ttp: ttpValue
```

## Cookies Used on This Website

This table provides information about the cookies used on this website.

| Cookie Name | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `_fbp`      | When the Meta Pixel is installed on a website, and the Pixel uses first-party cookies, the Pixel automatically saves a unique identifier to an \_fbp cookie for the website domain if one does not already exist. See [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/) for more information.                                                                                             | No       |
| `_fbc`      | When a user clicks on an ad on Facebook, the link sometimes includes a fbclid query parameter. When the user lands on the target website, if the website has a Meta Pixel that uses first-party cookies, the Pixel automatically saves the fbclid query parameter to an \_fbc cookie for that website domain. See [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/) for more information. | No       |
| `_ttp_`     | To measure and improve the performance of your advertising campaigns and to personalize the user's experience (including ads) on TikTok. See [here](https://ads.tiktok.com/help/article/using-cookies-with-tiktok-pixel?lang=en) for more information.                                                                                                                                                                                     | No       |

## Request Body

```js

{
    "x-cf-ip": IP,  //user ip address
    "x-cf-loc": Location, //user country code
    "pageUrl": PageURL, // page URL from where event triggered
    "event": Event, // event event
    "muid": MUID, //unique identifier of each user
    "mt_ref_src":"", //optional
    //add other body depending on event type
}
```

::: info
Additional body data needs to be sent depending on the event type
:::

## Event Data Fields

This table summarizes the fields included in the event data payload:

| Field Name                             | Description                                  | Required |
| -------------------------------------- | -------------------------------------------- | -------- |
| `x-cf-ip`                              | User IP address                              | Yes      |
| `x-cf-loc`                             | User location (country code)                 | Yes      |
| `pageUrl`                              | Page URL where the event was triggered       | Yes      |
| `event`                                | Specific event that occurred                 | Yes      |
| `muid`                                 | Unique identifier for each user              | Yes      |
| `mt_ref_src`                           | Optional referrer source                     | No       |
| **Additional Fields (Event Specific)** | Additional fields specific to the event type | Varies   |

**Note:** The "Additional Fields" section will vary depending on the specific event type. Please refer to the documentation for your specific event types to determine the additional fields required or available mentioned below.
