# Luna Automated Test: Cypress

## Overview
This repository contains all test scripts for  [Luna](https://www.getluna.com) web applications: Luxe, hubspot

## Setup Instructions 

- Install [homebrew](https://brew.sh/index_es)
-  brew install git
-  brew install node
-  brew install yarn

## Adding cypress to yarn
- yarn add cypress --dev

## Running project
- yarn run cypress open

## Generating credentials for gmail-tester
- sign in [Google cloud](https://console.cloud.google.com/apis/credentials) using test-automation-1@getluna.com or test-automation-2@getluna.com 
- Download credentials for gmail-tester
- rename files to "credentials-test-automation-1.json" or "credentials-test-automation-2.json"
- Paste them in the root folder

## Generating token for gmail-tester account
- Confirm path of files and run next command in terminal

### node <node_modules>/gmail-tester-extended/init.js <path-to-credentials.json> <path-to-token.json> <target-email>


<node_modules>/gmail-tester-extended/init.js: path to the  node_modules folder, inside the node_modules folder there should be module 'gmail-tester-extended', and inside there should be the init.js file

<path-to-credentials.json>: this is the path of the credential file (credentials-test-automation-1.json or credentials-test-automation-2.json). 

<path-to-token.json>: this file in generated if the command works. the name used is "token-test-automation-1.json"

<target-email>: this is the email we want to generate token for.

#### Command should run like than

- node_modules/gmail-tester-extended/init.js credentials-test-automation-1.json token-test-automation-2.json test-automation-1@getluna.com

Check more info about here:
- https://github.com/kateyurasova/gmail-tester
- https://github.com/levz0r/gmail-tester