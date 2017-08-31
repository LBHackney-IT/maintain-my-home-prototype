# Notes about Maintain My Home Prototype

## Install guide

### Clone the repo and info

It's built on the [Express](http://expressjs.com/) framework, and uses these GOV.UK resources:

- [GOV.UK template](https://github.com/alphagov/govuk_template)
- [GOV.UK front end toolkit](https://github.com/alphagov/govuk_frontend_toolkit)
- [GOV.UK elements](https://github.com/alphagov/govuk_elements)

### Requirements

node.js - version 6.x.x

### Install dependencies

```
npm install
```

### Run the kit
```
npm start
```

Go to [localhost:3000](http://localhost:3000) in your browser.

## Prototype branch
name: maintain-my-home-prototype

## Styles

Styles mimicking hackney branding can be found in 'app/assets/sass/application.scss'

Hackney logo is in 'app/assets/images/' and needs to be copied to the '/public/images'

## Hackney main template
Can be found in ''/lib/govuk_template_unbranded.html'

'app/views/layout.html' extends template govuk_template_unbranded.html

## Routes and config

'routes.js' and 'config.js' is where routing between views is made and also 'service type' changed

# GOV.UK Prototype kit · [![Greenkeeper badge](https://badges.greenkeeper.io/alphagov/govuk_prototype_kit.svg)](https://greenkeeper.io/)

Go to the [GOV.UK Prototype Kit site](https://govuk-prototype-kit.herokuapp.com/docs) to download the latest version and read the documentation.

## About the prototype kit

The prototype kit provides a simple way to make interactive prototypes that look like pages on GOV.UK. These prototypes can be used to show ideas to people you work with, and to do user research.

Read the [project principles](https://govuk-prototype-kit.herokuapp.com/docs/principles).

## Security

If you publish your prototypes online, they **must** be protected by a [username and password](https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku). This is to prevent members of the public finding prototypes and thinking they are real services.

You must protect user privacy at all times, even when using prototypes. Prototypes made with the kit look like GOV.UK, but do not have the same security provisions. Always make sure you are handling user data appropriately.

## Installation instructions

- [Installation guide for new users (non technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/introduction)
- [Installation guide for developers (technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/developer-install-instructions)
