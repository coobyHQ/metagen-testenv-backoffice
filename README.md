# SAML2 METAGEN TEST ENVIRONMENT BACKOFFICE

[![](https://img.shields.io/github/issues/gridworkz/metagen-testenv.svg)](https://github.com/gridworkz/metagen-testenv-backoffice/issues "Issue tracker")

METAGEN Test Environment is aimed at Service Providers who want to test their integration with METAGEN without having real METAGEN identities available. It consists 
of a WSO2-IS Identity Provider to run locally or on their own server where they can freely configure test identities.

The environment consists of two elements:
* the actual identity server, based on [WSO2-IS](https://github.com/wso2/product-is), [(repository github)](https://github.com/gridworkz/metagen-testenv-identityserver);
* a web backoffice based on Node.js which offers a simplified interface for configuring the IS Service Provider and creating identities [(repository github)](https://github.com/gridworkz/metagen-testenv-backoffice).

## Docker

For installation with Docker refer to the [metagen-testenvironment](https://github.com/gridworkz/metagen-testenv-docker) repository

## Installation without Docker

### Prerequisites

* Node.js and npm js

### Configuration

```
$ cd backoffice
$ npm install
$ cd server
$ npm install
$ cd ..
$ cd idp_metadata
$ curl -o xmlsectool-2.0.0-bin.zip https://shibboleth.net/downloads/tools/xmlsectool/2.0.0/xmlsectool-2.0.0-bin.zip
$ unzip xmlsectool-2.0.0-bin.zip
$ rm xmlsectool-2.0.0-bin.zip
$ cd ..
$ npm run build-metadata
$ npm run build
```

### Start

To launch the backoffice interface, proceed as follows:

```
$ cd backoffice
$ npm run start-prod
```

## Service availability

The backoffice works even without an active Identity Server but it will not be possible to load the data.
Configuration tasks will be available on https://metagen.yourdomain.com:8080 (the back-office)

## Backoffice

### Configuring a Service Provider

The first step is to configure your Service Provider in the test environment so that it is recognized by the Identity Provider (WSO2-IS), just as you would 
with the accreditation procedure at METAGEN. After opening the backoffice and filling out the form in all its' parts you can see on the right the preview of the XML / SAML 
metadata that describes the Service Provider. It is advisable to download the XML file before submitting the form as it will also serve in the configuration of your 
Service Provider. After pressing the "Save" button the Service Provider is created in WSO2-IS. Subsequent changes can be made to an existing service provider by sending 
the module again with the entity ID and the name unchanged.

### Creation of identities (users)

For each configured Service Provider you can access the list of users and you can create new ones.
