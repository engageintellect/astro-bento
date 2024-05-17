---
layout: "../../layouts/PostLayout.astro"
pubDate: 2023-08-26T00:00:00Z
title: Running Hugging Face Transformers Locally
description: A guide on how to use Hugging Face Transformers to run machine learning models locally.
excerpt: Artificial Intelligence and Machine Learning are transforming industries, and one of the key technologies driving this revolution is the transformer architecture.
category: now
image: "https://huggingface.co/front/assets/homepage/hugs-mobile.svg"
tags:
  - Python
  - AI
  - Machine Learning
  - PyTorch
  - Hugging Face
---

# Using Hugging Face Transformers for Various AI/ML Tasks.

Artificial Intelligence and Machine Learning are transforming industries, and one of the key technologies driving this revolution is the transformer architecture. Hugging Face has made it incredibly easy to use this architecture with their `transformers` library. This blog post aims to guide you through how to use Hugging Face Transformers to perform various AI and ML tasks, complete with code examples.

## Introduction <a name="introduction"></a>

Hugging Face Transformers provides a unified API for multiple NLP tasks, and it's based on the transformer architecture. The library is compatible with both PyTorch and TensorFlow, making it versatile and easy to integrate.

## Installation <a name="installation"></a>

First things first, let's install the package. You can install it using pip:

```bash
pip install transformers
```

Or if you're using conda:

```bash
conda install -c huggingface transformers
```

## Text Classification <a name="text-classification"></a>

Text classification involves categorizing text into predefined classes. This is useful in a variety of applications, from sentiment analysis to spam detection.

Here's a simple example using the BERT model for classifying sentences into positive and negative sentiment classes:

```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

# Initialize the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModelForSequenceClassification.from_pretrained('bert-base-uncased')

# Prepare the text
text = "I love programming!"
tokens = tokenizer(text, padding=True, truncation=True, return_tensors="pt")

# Forward pass
with torch.no_grad():
    outputs = model(**tokens)

# Extract logits and compute probabilities
logits = outputs.logits
probabilities = torch.softmax(logits, dim=-1)

# Output the classification
if torch.argmax(probabilities) == 1:
    print("The sentiment is positive.")
else:
    print("The sentiment is negative.")
```

## Named Entity Recognition (NER) <a name="named-entity-recognition"></a>

Named Entity Recognition is the task of identifying and classifying named entities in a text.

Here is how you can use the Hugging Face Transformers library to perform NER:

```python
from transformers import AutoModelForTokenClassification, AutoTokenizer
import torch

# Initialize tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = AutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

# Example sentence
sentence = "Hugging Face is based in New York City."

# Tokenize the sentence
tokens = tokenizer(sentence, padding=True, truncation=True, return_tensors="pt")

# Forward pass
with torch.no_grad():
    outputs = model(**tokens)

# Detect entities
predictions = torch.argmax(outputs.logits, dim=-1)[0].tolist()
for id, label in zip(predictions, tokens["input_ids"][0]):
    print(f"{tokenizer.convert_ids_to_tokens([label])[0]}: {model.config.id2label[id]}")
```

## Text Generation <a name="text-generation"></a>

Text generation is a fascinating aspect of NLP. The task is to generate coherent and contextually relevant text based on certain input.

Here is how you can use GPT-2, a model particularly good at text generation:

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

# Initialize the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# Create input prompt text
input_text = "Once upon a time,"
input_ids = tokenizer.encode(input_text, return_tensors='pt')

# Generate text
output = model.generate(input_ids, max_length=100, num_return_sequences=1)

# Decode and print the generated text
generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
print(generated_text)
```

## Conclusion <a name="conclusion"></a>

The Hugging Face Transformers library provides an easy-to-use interface for various NLP tasks, ranging from text classification to text generation. We have only scratched the surface here; the library offers much more, including tools for translation, summarization, and question answering. Happy coding!

If you have any questions or need further clarification, feel free to ask. Thank you for reading!
