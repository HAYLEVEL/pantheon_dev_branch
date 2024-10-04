# Bitbucket Runners Setup on Droplet

## Overview

This document provides the steps to configure Bitbucket runners

---

## Requirements

- Droplet with any suported OS 
- Docker installed on the Droplet.
- Bitbucket repository with CI/CD enabled.

---

## Steps

### 1. Provision a Droplet
1. Create a new Droplet if you don't have an existing one with at least:
   - **2 GB RAM**
   - **2 vCPUs**
   - **Ubuntu 22.04**

### 2. Install Docker
1. Log in into the Droplet and install Docker and docker-compose:
   - **Use link on official documentation - https://docs.docker.com/engine/install/**

### 3. Create a docker-compose stack with correct credentials.
1. Create a docker-compose stack. Example you can find in same dir with this README.
2. Go to {your_repo}/admin/pipelines/runners and click button Add runner.
3. Replace credentials which you can see in your docker-compose stack.
4. Repeat steps 2 and 3 as many times as you want to get runners.
5. Save the stack and up it.
6. If you did everything correctly, you will see the active status on the page with runners


