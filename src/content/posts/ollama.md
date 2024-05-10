---
layout: "../../layouts/PostLayout.astro"
pubDate: 2024-4-14T12:00:00Z
title: Ollama.
description: Run Llama 2, Code Llama, and other models locally. Customize and create your own models.
excerpt: hello world
category: now
image: /images/ollama2.png
tags:
  - Llama2
  - Python
  - API
  - Ubuntu
  - Linux
  - MacOS
  - AI
projectURL: ""
repoURL: "https://github.com/ollama/ollama"
---

# The Future of Locally-Run AI Models: Embracing Ollama and Personal Compute

In the rapidly evolving world of artificial intelligence (AI), locally-run models are gaining significant traction, reshaping how we interact with AI technologies. Among these advancements, Ollama stands out as a pioneering platform that facilitates the local execution of powerful AI models. This shift towards local computation not only enhances privacy and security but also introduces the intriguing concept of personal compute as a potential currency in the digital age.

## Why Local AI and Ollama Are Game-Changers

1. **Enhanced Privacy and Security**
   By processing data locally, Ollama ensures that sensitive information does not leave the user's device, thereby reducing the risk of data breaches associated with cloud-based services. This is crucial for applications that handle personal or confidential data.

2. **Reduced Latency**
   Local computation eliminates the need for data to travel to and from remote servers, resulting in faster response times. This is particularly beneficial for real-time applications like autonomous vehicles, healthcare monitoring systems, and interactive AI assistants.

3. **Independence from Connectivity**
   Locally-run models do not rely on continuous internet connectivity. This makes AI technologies more accessible in remote or unstable network conditions, broadening the scope of AI's benefits.

4. **Customization and Control**
   Users have greater control over their AI models, including customization based on personal or localized data without the constraints imposed by cloud providers.

## The Potential of Personal Compute as Currency

As AI technologies proliferate, the computational power of individual devices could be harnessed to create a new form of currency — personal compute. Users could "rent out" their device's processing power to perform complex computations for others, earning credits or digital currency in return. This model promotes a decentralized computational network that leverages idle resources efficiently and could support massive, distributed AI computations without the need for centralized data centers.

## Tutorial: Running Ollama Locally

### Requirements:

To run these models locally, and maintain performance and usability, you will will want to use as high-powered of a machine as possible. I have personally tested Ollama across the following devices, with the following results:

<div class="table table-sm border">

| Machine                 | RAM   | Results |
| ----------------------- | ----- | ------- |
| M3 Pro MacBook Pro      | 18 GB | A+      |
| SurfaceBook 2           | 16 GB | B+      |
| ThinkPad X220           | 8 GB  | C+      |
| Raspberry Pi 4B         | 8 GB  | C-      |
| Linode Ubuntu 22.04 VPS | 2 GB  | F       |

</div>

<br/>

<strong>Note:</strong> As you can see by the above results, performance is correlated to RAM. For best results, use on the most powerful machine that you have access to.

### Step 1: Install Ollama

Ensure your system meets the hardware requirements (primarily modern CPU with optional GPU support for enhanced performance). Install Ollama by running the following command in your terminal:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Step 2: Verify Installation

After installation, verify that Ollama is correctly installed by checking its version:

```bash
ollama --version
```

### Step 3: Running Your First Model

You can start by running a simple model to see Ollama in action:

```bash
ollama run your-model-name
```

### Available Models:

<a class="btn btn-primary" href="https://ollama.com/library" target="_blank">View Available Models</a>

### Example Usage:

Run Llama2

```bash
ollama run llama2
```

Run Phi-2

```bash
ollama run phi
```

List models

```bash
ollama list
```

Replace your-model-name with the model you wish to run. Make sure the model is compatible with your Ollama installation.

### Step 4: Monitoring and Managing Models

Use Ollama's dashboard or command-line tools to monitor and manage the models. You can start, stop, and restart models as needed.

## Conclusion

As AI continues to integrate into every aspect of modern life, platforms like Ollama and the concept of leveraging personal compute as a currency illustrate a future where technology is more personalized, secure, and accessible.

This paradigm not only empowers individuals by valuing and utilizing their resources but also fosters a more distributed and democratic digital ecosystem. By embracing locally-run models, we step into a future where technology serves humanity more discreetly and powerfully, all from the comfort of our local devices.
