# Security and Secrets Policy

## Never Commit

- API keys
- tokens
- private keys
- service account JSON
- passwords
- paid-tool credentials
- customer data
- private business data
- personal medical/legal/financial data

## Environment Variables

Use:
- `.env.local`
- `.env.example`
- hosting provider secret manager

`.env.example` should include variable names only.

## Agent Rules

The agent may:
- create `.env.example`
- document required variables
- read env variable names if necessary

The agent must not:
- print secret values
- commit secrets
- put secrets in screenshots
- use real credentials without approval

## Deployment

Deployment requires explicit user approval unless the user already requested deployment in the same turn and provided required credentials/context.
