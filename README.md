# Yoti NodeJS Sandbox SDK

Welcome to the Yoti NodeJS Sandbox. This repo contains the tools you need to test your NodeJS back-end integration.

## Requirements

### Node version
Please refer to [Travis](https://travis-ci.com/getyoti/yoti-node-sdk-sandbox) to see all compatible Node versions.

## Installing the Sandbox

To import the Yoti SDK inside your project, you can use your favourite dependency management system.
If you are using NPM, you can use the following command to set the Yoti Sandbox SDK as a dependency:

```shell
npm install @getyoti/sdk-sandbox
```

## Configuration

* `SANDBOX_CLIENT_SDK_ID` is the SDK identifier generated by Yoti Hub in the Key tab when you create your app.

* `/path/to/your-pem-file.pem` is the path to the application pem file. It can be downloaded only once from the Keys tab in your Yoti Hub.

Please do not open the pem file as this might corrupt the key and you will need to create a new application.

## Profile Token Creation

```javascript
const fs = require('fs');

const {
  SandboxProfileClientBuilder,
  SandboxAgeVerificationBuilder,
  TokenRequestBuilder,
} = require('@getyoti/sdk-sandbox');

const yoti = require('yoti');

const SANDBOX_CLIENT_SDK_ID = 'SANDBOX_CLIENT_SDK_ID';
const PEM = fs.readFileSync('/path/to/your-pem-file.pem');

const sandboxProfileClient = new SandboxProfileClientBuilder()
  .withClientSdkId(SANDBOX_CLIENT_SDK_ID)
  .withPemString(PEM)
  .build();

const ageVerification = new SandboxAgeVerificationBuilder()
  .withDateOfBirthString('1980-01-01')
  .withAgeOver(18)
  .build();

const tokenRequest = new TokenRequestBuilder()
  .withRememberMeId('some remember me ID')
  .withGivenNames('some given names')
  .withFamilyName('some family name')
  .withFullName('some full name')
  .withDateOfBirthString('1980-01-01')
  .withAgeVerification(ageVerification)
  .withGender('some gender')
  .withPhoneNumber('some phone number')
  .withNationality('some nationality')
  .withStructuredPostalAddress(JSON.stringify({
    building_number: 1,
    address_line1: 'some address',
  }))
  .withBase64Selfie('some base64 encoded selfie')
  .withEmailAddress('some@email')
  .withDocumentDetails('PASSPORT USA 1234abc')
  .build();

sandboxProfileClient.setupSharingProfile(tokenRequest)
  .then((response) => {
    const token = response.getToken();

    // Use token to get activity details.
    const yotiClient = new yoti.Client(SANDBOX_CLIENT_SDK_ID, PEM);
    yotiClient.getActivityDetails(token)
      .then((activityDetails) => {
        // Handle response here.
      });
  })
  .catch((err) => {
    // Handle unhappy path.
  });
```
