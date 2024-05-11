---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-03-03T00:00:00Z
title: Deploying Pocketbase on Ubuntu
description: How to deploy a production Pocketbase server on Ubuntu using Nginx.
excerpt: How to deploy a production Pocketbase server using Nginx on Ubuntu.
category: now
image: "/images/pocketbase.png"
tags:
  - Pocketbase
  - Linux
  - Ubuntu
  - Server
  - Linux
  - Nginx
---

# Introduction

PocketBase is a lightweight, open-source NoSQL database that is designed to run on devices with limited resources, such as a Raspberry Pi. In this tutorial, we will show you how to set up a PocketBase server on a Raspberry Pi using Ubuntu and Nginx, and then we will create a systemd service called "pocketbase" to run PocketBase persistently.
Prerequisites

Before you begin, you will need the following:

- A Raspberry Pi with Ubuntu installed (we recommend version 20.04 or higher)
- A terminal or SSH connection to the Raspberry Pi
- A basic understanding of the Linux command line
  <br>
  <br>

## Step 1: Install Nginx

The first step in setting up PocketBase on your Raspberry Pi is to install Nginx, a popular web server that can be used to serve web pages and applications.

To install Nginx, open a terminal or SSH connection to your Raspberry Pi and run the following command:

```bash
sudo apt update
sudo apt install nginx
```

Once Nginx is installed, you can verify that it is running by opening a web browser and navigating to http://<your_raspberry_pi_ip_address>. You should see the default Nginx welcome page.

## Step 2: Install PocketBase

The next step is to install PocketBase on your Raspberry Pi. To do this, you can follow the instructions in the PocketBase documentation:

    Download the PocketBase binary for Linux ARM from the PocketBase GitHub releases page.

    Extract the downloaded archive to a directory of your choice.

    Set the PB_DIR environment variable to the path of the extracted directory:

```bash
export PB_DIR=/path/to/pocketbase
```

Start PocketBase by running the pocketbase command:

```bash
$PB_DIR/pocketbase
```

If PocketBase starts successfully, you should see output similar to the following:

```bash
Starting PocketBase...
PocketBase started on port 8080
```

## Step 3: Configure Nginx as a reverse proxy

Now that PocketBase is running, we need to configure Nginx as a reverse proxy to forward requests to PocketBase.

To do this, create a new Nginx configuration file in the /etc/nginx/sites-available/ directory. You can name the file anything you like, but we recommend something like pocketbase.conf:

```bash
sudo nano /etc/nginx/sites-available/pocketbase.conf
```

In this file, add the following configuration:

```
server {
    listen 80;
    server_name pocketbase.local;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

This configuration tells Nginx to listen on port 80 and forward requests to PocketBase, which is running on localhost port 8080. It also sets some headers to pass information about the original request to PocketBase.

Save and close the file by pressing Ctrl+X, Y, and Enter.

Next, create a symbolic link to this file in the /etc/nginx/sites-enabled/ directory:

```bash
sudo ln -s /etc/nginx/sites-available/pocketbase.conf /etc/nginx/sites-enabled/
```

Finally, test the Nginx configuration and restart Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## Step 4: Create a systemd service for PocketBase

To run PocketBase persistently, we will create a systemd service called pocketbase. This service will start PocketBase automatically when the Raspberry Pi boots up and restart it if it crashes.

To create the pocketbase service, create a new file at /etc/systemd/system/pocketbase.service:

```bash
sudo nano /etc/systemd/system/pocketbase.service
```

Add the following contents to the file:

```makefile

[Unit]
Description=PocketBase server
After=network.target

[Service]
Type=simple
ExecStart=/path/to/pocketbase/pocketbase
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

Replace /path/to/pocketbase with the path to the directory where you extracted the PocketBase binary.

This service file tells systemd to start PocketBase as a simple service, restart it always, and run it as the root user. It also specifies that the service should be started after the network has been initialized.

Save and close the file by pressing Ctrl+X, Y, and Enter.

To start the pocketbase service, run the following commands:

```bash
sudo systemctl daemon-reload
sudo systemctl start pocketbase
```

You can verify that PocketBase is running by checking the service status:

```bash
sudo systemctl status pocketbase
```

If everything is working correctly, you should see output similar to the following:

```yaml
● pocketbase.service - PocketBase server
Loaded: loaded (/etc/systemd/system/pocketbase.service; enabled; vendor preset: enabled)
Active: active (running) since Fri 2023-03-03 23:30:23 EST; 1min 30s ago
Main PID: 1234 (pocketbase)
Tasks: 7 (limit: 2054)
Memory: 3.9M
CGroup: /system.slice/pocketbase.service
└─1234 /path/to/pocketbase/pocketbase

Mar 03 23:30:23 raspberrypi systemd[1]: Started PocketBase server.
```

# Conclusion

Congratulations! You have successfully set up a PocketBase server on a Raspberry Pi using Ubuntu and Nginx, and created a systemd service to run PocketBase persistently. Now you can use PocketBase to store and retrieve data from your Raspberry Pi applications.
