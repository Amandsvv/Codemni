import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function CodemniLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-800">Codemni</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition">Home</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900 transition">Resources</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition">Docs</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Request Demo
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
                <a href="#docs" className="text-gray-600 hover:text-gray-900">Docs</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-left">
                  Request Demo
                </button>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Complete AI Agent Framework
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Codemni provides a complete ecosystem with intelligent tool-calling agents, 
            multi-provider LLM integrations, and sophisticated memory systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">
              Sign Up
            </button>
            <button className="px-6 py-3 flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition">
              Read More <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
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
                className="bg-blue-100/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-100/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Modules</h2>

          {/* Memory Module */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Memory Module - Conversation History Management
              </h3>
              <p className="text-gray-700 mb-4">
                Flexible conversation memory system for maintaining context in multi-turn interactions.
              </p>
              
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
                Full Memory Documentation → 
              </a>
            </div>
          </div>

          {/* LLM Module */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                LLM Module - Large Language Model Wrappers
              </h3>
              <p className="text-gray-700 mb-4">
                Production-ready wrappers for popular LLM providers with unified interface.
              </p>
              
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
                Full LLM Documentation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documents</a></li>
                <li><a href="#" className="hover:text-white transition">Resources</a></li>
                <li><a href="#" className="hover:text-white transition">Blogs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">Codemni</h2>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Services</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}