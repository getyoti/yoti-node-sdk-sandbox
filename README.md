# Yoti NodeJS Sandbox SDK

[![Build Status](https://travis-ci.com/getyoti/yoti-node-sdk-sandbox.svg?branch=master)](https://travis-ci.com/getyoti/yoti-node-sdk-sandbox)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=getyoti%3Anode-sandbox&metric=coverage)](https://sonarcloud.io/dashboard?id=getyoti%3Anode-sandbox)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=getyoti%3Anode-sandbox&metric=bugs)](https://sonarcloud.io/dashboard?id=getyoti%3Anode-sandbox)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=getyoti%3Anode-sandbox&metric=code_smells)](https://sonarcloud.io/dashboard?id=getyoti%3Anode-sandbox)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=getyoti%3Anode-sandbox&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=getyoti%3Anode-sandbox)

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

Please do not open the pem file as this might corrupt the key and you will need to recreate the keys on the Yoti Hub.

### Profile

#### Yoti Client

Point the Yoti client at the sandbox by setting environment variable `YOTI_API_URL` to https://api.yoti.com/sandbox/v1

```javascript
const { Client } = require('yoti');
const fs = require('fs');

const SANDBOX_CLIENT_SDK_ID = 'SANDBOX_CLIENT_SDK_ID';
const PEM = fs.readFileSync('/path/to/your-pem-file.pem', 'utf8');

const yotiClient = new Client(SANDBOX_CLIENT_SDK_ID, PEM);
```

#### Profile Sandbox Client

```javascript
const { SandboxProfileClientBuilder } = require('@getyoti/sdk-sandbox');

const sandboxProfileClient = new SandboxProfileClientBuilder()
  .withClientSdkId(SANDBOX_CLIENT_SDK_ID)
  .withPemString(PEM)
  .build();
```

### Doc Scan

#### Doc Scan Client

Point the Doc Scan client at the sandbox by setting environment variable `YOTI_DOC_SCAN_API_URL` to https://api.yoti.com/sandbox/idverify/v1

```javascript
const { DocScanClient } = require('yoti');
const fs = require('fs');

const SANDBOX_CLIENT_SDK_ID = 'SANDBOX_CLIENT_SDK_ID';
const PEM = fs.readFileSync('/path/to/your-pem-file.pem', 'utf8');

const docScanClient = new DocScanClient(SANDBOX_CLIENT_SDK_ID, PEM);
```

#### Doc Scan Sandbox Client

```javascript
const { SandboxDocScanClientBuilder } = require('@getyoti/sdk-sandbox');

const sandboxClient = new SandboxDocScanClientBuilder()
  .withClientSdkId(SANDBOX_CLIENT_SDK_ID)
  .withPemString(PEM)
  .build();
```

## Examples

- [Profile Sandbox](examples/profile)
- [Doc Scan Sandbox](examples/doc_scan)
