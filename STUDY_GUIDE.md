# Mercor Applied AI Engineer - Take-Home Study Guide

## Take-Home Context
You will architect and refine a scaled-down LLM evaluation pipeline using:
- **Ollama** (run LLMs locally)
- **lm-evaluation-harness** (EleutherAI's benchmark framework)
- **4-hour time box** focused on building, testing, and analyzing LLM behavior

---

## Part 1: Ollama - Running LLMs Locally
- [ ] Installing and configuring Ollama
- [ ] Pulling and managing models (e.g., `ollama pull llama3`, `ollama pull mistral`)
- [ ] Running inference via CLI and REST API
- [ ] Ollama API endpoints (`/api/generate`, `/api/chat`, `/api/embeddings`)
- [ ] Model parameters: temperature, top_p, top_k, repeat_penalty, context window
- [ ] Understanding model file formats (GGUF, quantization levels: Q4_0, Q4_K_M, Q8_0, etc.)
- [ ] Resource management: GPU vs CPU inference, memory requirements
- [ ] Modelfile customization (system prompts, parameters, templates)

## Part 2: lm-evaluation-harness (EleutherAI)
- [ ] Installation and setup (`lm_eval` CLI and Python API)
- [ ] Architecture overview: Tasks, Models, Metrics
- [ ] Running evaluations against Ollama models (using the `local-completions` or `openai-completions` model type pointed at Ollama's API)
- [ ] Built-in benchmark tasks and task groups (MMLU, HellaSwag, ARC, TruthfulQA, Winogrande, GSM8K, etc.)
- [ ] Writing custom evaluation tasks (YAML task configs)
- [ ] Understanding task structure: `doc_to_text`, `doc_to_target`, `metric_list`, few-shot prompts
- [ ] Output formats and results interpretation
- [ ] Filtering and selecting specific subtasks
- [ ] Batch size tuning and performance optimization

## Part 3: LLM Evaluation Methods & Benchmarks
- [ ] **Types of evaluation**: automated metrics vs human evaluation vs model-as-judge
- [ ] **Common benchmarks and what they measure**:
  - MMLU - broad knowledge and reasoning across 57 subjects
  - HellaSwag - commonsense reasoning / sentence completion
  - ARC (AI2 Reasoning Challenge) - grade-school science questions
  - TruthfulQA - tendency to generate truthful vs popular-but-false answers
  - GSM8K - grade-school math word problems
  - HumanEval / MBPP - code generation
  - Winogrande - commonsense reasoning with pronoun resolution
  - BBH (Big Bench Hard) - challenging tasks from BIG-Bench
- [ ] **Metrics**: accuracy, F1, exact match, perplexity, BLEU, ROUGE, pass@k
- [ ] **Few-shot vs zero-shot evaluation**: what they test and when to use each
- [ ] **Contamination and benchmark gaming**: why evaluation integrity matters
- [ ] **Evaluation pitfalls**: prompt sensitivity, ordering effects, tokenization artifacts

## Part 4: Statistical Analysis for Model Evaluation
- [ ] Comparing model performance across benchmarks (absolute scores vs relative improvements)
- [ ] Confidence intervals and statistical significance in benchmark results
- [ ] Effect sizes and practical significance vs statistical significance
- [ ] Handling variance across runs (seeds, sampling)
- [ ] Aggregating scores across tasks: macro-average vs weighted average
- [ ] Error analysis: categorizing failure modes
- [ ] Ablation studies: isolating the effect of individual changes
- [ ] Visualization of evaluation results (tables, radar charts, bar plots)

## Part 5: Data Pipelines & Infrastructure
- [ ] Designing data pipelines for evaluation workflows (ingest -> process -> evaluate -> report)
- [ ] Working with dataset formats: JSON, JSONL, Parquet, HuggingFace Datasets
- [ ] Data validation and quality checks
- [ ] Logging and result storage for reproducibility
- [ ] Pipeline orchestration patterns (sequential, parallel, DAG-based)
- [ ] Error handling and retry logic in pipelines
- [ ] Containerization basics (Docker) for reproducible environments

## Part 6: Post-Training Concepts
- [ ] Fine-tuning vs prompt engineering vs RAG
- [ ] RLHF (Reinforcement Learning from Human Feedback) overview
- [ ] DPO (Direct Preference Optimization) overview
- [ ] SFT (Supervised Fine-Tuning) basics
- [ ] Training data formats: instruction-response pairs, conversations, preference pairs
- [ ] How post-training affects model behavior and benchmark performance
- [ ] Synthetic data generation for training and evaluation

## Part 7: Python Backend Engineering
- [ ] Clean, well-structured Python code (type hints, docstrings, modularity)
- [ ] Working with subprocess / external tools from Python
- [ ] REST API interaction (requests, httpx, aiohttp)
- [ ] Async programming with asyncio (useful for concurrent evaluations)
- [ ] File I/O and data serialization (JSON, YAML, CSV)
- [ ] Error handling and logging best practices
- [ ] Basic testing with pytest
- [ ] Virtual environments and dependency management (pip, poetry, uv)

## Part 8: Model Inference Fundamentals
- [ ] Autoregressive text generation: how LLMs produce output token-by-token
- [ ] Decoding strategies: greedy, beam search, nucleus sampling (top-p), top-k
- [ ] Temperature and its effect on output distribution
- [ ] Context window limitations and how they affect evaluation
- [ ] Tokenization basics: BPE, SentencePiece, and why tokenization matters for evaluation
- [ ] Quantization: what it is, trade-offs between size/speed and quality
- [ ] Prompt formatting: chat templates, system/user/assistant roles

## Part 9: Practical Take-Home Strategy
- [ ] **Time management** (suggested 4-hour allocation):
  - ~30 min: Read instructions, plan architecture, set up environment
  - ~60 min: Get Ollama running, pull models, verify inference works
  - ~90 min: Set up lm-evaluation-harness, run evaluations, build pipeline
  - ~30 min: Analysis and visualization of results
  - ~30 min: Documentation, code cleanup, final review
- [ ] **Environment setup checklist**:
  - Python 3.10+ installed
  - Ollama installed and running
  - lm-evaluation-harness installed (`pip install lm-eval`)
  - Sufficient disk space for models (7B models ~4-8GB each)
  - GPU preferred but CPU works for smaller/quantized models
- [ ] **Common pitfalls to avoid**:
  - Spending too long on perfect architecture vs getting things working
  - Not verifying Ollama is serving correctly before running eval harness
  - Forgetting to document assumptions and design decisions
  - Not capturing raw results for analysis
  - Over-engineering when a simple script suffices

---

## Pre-Study Setup Tasks
Before the take-home, make sure you have practiced:
1. Installing Ollama and pulling at least 2 different models
2. Running a basic evaluation with lm-evaluation-harness against a local model
3. Parsing and analyzing evaluation output programmatically
4. Writing a simple Python pipeline that chains these steps together

---

## Recommended Resources
- [Ollama Documentation](https://github.com/ollama/ollama)
- [lm-evaluation-harness Documentation](https://github.com/EleutherAI/lm-evaluation-harness)
- [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - see how models are ranked
- [EleutherAI blog on evaluation](https://blog.eleuther.ai/)
- [HELM benchmark paper](https://arxiv.org/abs/2211.09110) - comprehensive evaluation framework context
- [Chatbot Arena / LMSYS](https://chat.lmsys.org/) - human preference evaluation context
