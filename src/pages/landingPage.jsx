import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function CodemniLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-100/70 pt-40 pb-40 px-4 sm:px-4 sm:pt-4 sm:pb-10 lg:pt-35 lg:pb-30">
        <div className=" mx-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 leading-tight">
            The Complete AI Agent Framework
          </h1>
          <p className="text-2xl sm:text-2xl font-light text-gray-600 mb-8">
            Codemni provides a complete ecosystem with intelligent tool-calling agents, 
            multi-provider LLM integrations, and sophisticated memory systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <button className="px-6 py-3 border-2 border rounded-3xl hover:bg-gray-50 transition font-medium">
              Request Demo
            </button>
            <button className="px-10 py-3 bg-gray-900 text-white rounded-3xl hover:bg-gray-800 transition font-medium">
              Sign Up
            </button>
            <button className="px-6 py-3 flex items-center justify-center gap-2 underline underline-offset-8 hover:text-gray-900 transition">
              Read More <ArrowRight size={20} className="rotate-320" />
            </button>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className=" text-2xl font-light leading-relaxed">
            The most powerful framework for building autonomous AI agents - featuring 
            intelligent tool execution, multi-LLM orchestration, and advanced 
            conversational memory
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Complete Agent Framework",
                desc: "Not just an LLM wrapper - build agents that can think, decide, and execute tools"
              },
              {
                title: "Multiple Provider Support",
                desc: "Seamlessly switch between OpenAI, Google, Anthropic, Groq, and Ollama"
              },
              {
                title: "Advanced Memory",
                desc: "4 memory strategies to maintain context and conversation history"
              },
              {
                title: "Developer-Friendly",
                desc: "Intuitive APIs, comprehensive documentation, and consistent interfaces"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-blue-100/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-100/70 transition-all h-80 duration-300 hover:shadow-lg hover:-translate-y-1 border flex flex-col justify-around"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-lg my-10 mx-2 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-900 mb-12 underline underline-offset-10 decoration-2">Featured Modules</h2>

          {/* Memory Module */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/70 rounded-3xl p-8 mb-8 hover:shadow-xl transition-shadow duration-300 border">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Memory Module - Conversation History Management
            </h3>
            <p className="text-gray-700 mb-4">
              Flexible conversation memory system for maintaining context in multi-turn interactions.
            </p>
            <div className="border backdrop-blur-sm rounded-2xl p-6">            
              <div className="space-y-3 mb-6">
                <p className="text-gray-800 font-semibold">Available Memory Types:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• ConversationBufferMemory - Store all messages</li>
                  <li>• ConversationWindowMemory - Keep last N exchanges</li>
                  <li>• ConversationTokenBufferMemory - Limit by token count</li>
                  <li>• ConversationSummaryMemory - Summarize old conversations</li>
                </ul>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-gray-800 font-semibold">Key Features:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Common API across all memory types</li>
                  <li>• Easy serialization (save/load)</li>
                  <li>• Lightweight and efficient</li>
                  <li>• Integrates seamlessly with ToolCalling Agent</li>
                </ul>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                Full Memory Documentation <ArrowRight size={20} className="rotate-320"/>
              </a>
            </div>
          </div>

          {/* LLM Module */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              LLM Module - Large Language Model Wrappers
            </h3>
            <p className="text-gray-700 mb-4">
              Production-ready wrappers for popular LLM providers with unified interface.
            </p>
            <div className="border backdrop-blur-sm rounded-2xl p-6">              
              <div className="space-y-3 mb-6">
                <p className="text-gray-800 font-semibold">Supported Providers:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google Gemini (gemini-pro, gemini-2.0-flash-exp)</li>
                  <li>• OpenAI (gpt-4, gpt-3.5-turbo, gpt-4-turbo)</li>
                  <li>• Anthropic Claude (claude-3-opus, claude-3-sonnet, claude-3-haiku)</li>
                  <li>• Groq (llama3-70b, mixtral-8x7b)</li>
                  <li>• Ollama (Local models: llama3, mistral, codellama)</li>
                </ul>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-gray-800 font-semibold">Key Features:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Automatic retries with exponential backoff</li>
                  <li>• Configurable timeouts</li>
                  <li>• Consistent API across all providers</li>
                  <li>• Both function and class-based interfaces</li>
                  <li>• Silent operation (no logging)</li>
                  <li>• Minimal dependencies</li>
                </ul>
              </div>

              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                Full LLM Documentation <ArrowRight size={20} className="rotate-320"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}