import React, {useEffect, useState} from 'react'
import { ArrowRight, Menu, X } from 'lucide-react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const docSections = {
    'getting-started': {
      title: 'Getting Started',
      subsections: {
        'introduction': { title: 'Introduction', icon: '📖' },
        'installation': { title: 'Installation', icon: '⚙️' },
        'quick-start': { title: 'Quick Start', icon: '🚀' },
        'configuration': { title: 'Configuration', icon: '⚡' }
      }
    },
    'core-concepts': {
      title: 'Core Concepts',
      subsections: {
        'agents': { title: 'AI Agents', icon: '🤖' },
        'tools': { title: 'Tool Calling', icon: '🔧' },
        'memory': { title: 'Memory Systems', icon: '💾' },
        'chains': { title: 'Chain Execution', icon: '🔗' }
      }
    },
    'llm-module': {
      title: 'LLM Module',
      subsections: {
        'openai': { title: 'OpenAI', icon: '🟢' },
        'anthropic': { title: 'Anthropic Claude', icon: '🔵' },
        'google': { title: 'Google Gemini', icon: '🔴' },
        'groq': { title: 'Groq', icon: '🟡' },
        'ollama': { title: 'Ollama (Local)', icon: '🟣' }
      }
    },
    'memory-module': {
      title: 'Memory Module',
      subsections: {
        'buffer-memory': { title: 'Buffer Memory', icon: '📝' },
        'window-memory': { title: 'Window Memory', icon: '🪟' },
        'token-memory': { title: 'Token Buffer Memory', icon: '🎫' },
        'summary-memory': { title: 'Summary Memory', icon: '📋' }
      }
    },
    'advanced': {
      title: 'Advanced Topics',
      subsections: {
        'custom-tools': { title: 'Custom Tools', icon: '🛠️' },
        'async-execution': { title: 'Async Execution', icon: '⚡' },
        'streaming': { title: 'Streaming Responses', icon: '📡' },
        'error-handling': { title: 'Error Handling', icon: '⚠️' }
      }
    },
    'api-reference': {
      title: 'API Reference',
      subsections: {
        'agent-api': { title: 'Agent API', icon: '📚' },
        'llm-api': { title: 'LLM API', icon: '📚' },
        'memory-api': { title: 'Memory API', icon: '📚' },
        'tools-api': { title: 'Tools API', icon: '📚' }
      }
    }
  };

  const docContent = {
    'introduction': {
      title: 'Introduction to Codemni',
      content: (
        <>
          <p className="text-gray-700 mb-4">Welcome to Codemni, the complete AI Agent Framework designed for building autonomous, intelligent agents with ease.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-blue-800">💡 <strong>What is Codemni?</strong> Codemni is not just another LLM wrapper. It's a comprehensive framework that enables you to build agents capable of thinking, deciding, and executing complex tasks.</p>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Intelligent tool-calling agents that can use multiple tools</li>
            <li>Multi-provider LLM support (OpenAI, Anthropic, Google, Groq, Ollama)</li>
            <li>Advanced memory systems for context retention</li>
            <li>Production-ready with error handling and retries</li>
          </ul>
        </>
      )
    },
    'installation': {
      title: 'Installation',
      content: (
        <>
          <p className="text-gray-700 mb-4">Get started with Codemni in just a few minutes.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Using pip</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
            pip install codemni
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Using poetry</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
            poetry add codemni
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Python 3.8 or higher</li>
            <li>pip or poetry package manager</li>
            <li>API keys for your preferred LLM provider</li>
          </ul>
        </>
      )
    },
    'quick-start': {
      title: 'Quick Start Guide',
      content: (
        <>
          <p className="text-gray-700 mb-4">Create your first AI agent in under 5 minutes!</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Basic Agent</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`from codemni import Agent
from codemni.llm import OpenAI
from codemni.tools import SearchTool, CalculatorTool

# Initialize LLM
llm = OpenAI(model="gpt-4", api_key="your-api-key")

# Create agent with tools
agent = Agent(
    llm=llm,
    tools=[SearchTool(), CalculatorTool()],
    verbose=True
)

# Run agent
response = agent.run("What's 25 * 37 and what's the weather in Tokyo?")
print(response)`}</pre>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="text-green-800">✅ That's it! Your agent can now search the web and perform calculations.</p>
          </div>
        </>
      )
    },
    'configuration': {
      title: 'Configuration',
      content: (
        <>
          <p className="text-gray-700 mb-4">Customize your agent's behavior with various configuration options.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Agent Configuration</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`agent = Agent(
    llm=llm,
    tools=tools,
    memory=ConversationBufferMemory(),
    max_iterations=10,
    verbose=True,
    return_intermediate_steps=True
)`}</pre>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Parameter</th>
                  <th className="border border-gray-300 p-3 text-left">Type</th>
                  <th className="border border-gray-300 p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-mono text-sm">llm</td>
                  <td className="border border-gray-300 p-3">LLM</td>
                  <td className="border border-gray-300 p-3">Language model instance</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-mono text-sm">tools</td>
                  <td className="border border-gray-300 p-3">List[Tool]</td>
                  <td className="border border-gray-300 p-3">List of tools agent can use</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-mono text-sm">memory</td>
                  <td className="border border-gray-300 p-3">Memory</td>
                  <td className="border border-gray-300 p-3">Memory system for context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    'agents': {
      title: 'AI Agents',
      content: (
        <>
          <p className="text-gray-700 mb-4">Agents are autonomous entities that can reason, plan, and execute tasks using available tools.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">How Agents Work</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li><strong>Receive Input:</strong> Agent gets a task or query</li>
              <li><strong>Reason:</strong> Agent analyzes what needs to be done</li>
              <li><strong>Plan:</strong> Agent decides which tools to use</li>
              <li><strong>Execute:</strong> Agent uses tools and processes results</li>
              <li><strong>Respond:</strong> Agent provides final answer</li>
            </ol>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Agent Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">ToolCalling Agent</h4>
              <p className="text-gray-600 text-sm">Best for general-purpose tasks with multiple tools</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Conversational Agent</h4>
              <p className="text-gray-600 text-sm">Optimized for natural conversations</p>
            </div>
          </div>
        </>
      )
    },
    'openai': {
      title: 'OpenAI Integration',
      content: (
        <>
          <p className="text-gray-700 mb-4">Use OpenAI's powerful models including GPT-4 and GPT-3.5-turbo.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Setup</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`from codemni.llm import OpenAI

llm = OpenAI(
    model="gpt-4",
    api_key="sk-...",
    temperature=0.7,
    max_tokens=2000
)`}</pre>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Available Models</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-4</code> - Most capable model</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-4-turbo</code> - Faster GPT-4 variant</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">gpt-3.5-turbo</code> - Fast and efficient</li>
          </ul>
        </>
      )
    },
    'buffer-memory': {
      title: 'Buffer Memory',
      content: (
        <>
          <p className="text-gray-700 mb-4">Store all messages in conversation history without any limits.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Usage</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`from codemni.memory import ConversationBufferMemory

memory = ConversationBufferMemory()

# Add messages
memory.add_message("user", "Hello!")
memory.add_message("assistant", "Hi! How can I help?")

# Get all messages
messages = memory.get_messages()
print(messages)`}</pre>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <p className="text-yellow-800">⚠️ <strong>Warning:</strong> This memory type can grow very large. Use for short conversations only.</p>
          </div>
        </>
      )
    },
    'custom-tools': {
      title: 'Creating Custom Tools',
      content: (
        <>
          <p className="text-gray-700 mb-4">Extend your agent's capabilities by creating custom tools.</p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tool Template</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`from codemni.tools import BaseTool

class WeatherTool(BaseTool):
    name = "weather"
    description = "Get current weather for a location"
    
    def _run(self, location: str) -> str:
        # Your implementation
        return f"Weather in {location}: Sunny, 72°F"
    
    async def _arun(self, location: str) -> str:
        # Async implementation
        return self._run(location)`}</pre>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Best Practices</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Keep tool names concise and descriptive</li>
            <li>Write clear descriptions for the LLM</li>
            <li>Handle errors gracefully</li>
            <li>Return results as strings</li>
          </ul>
        </>
      )
    }
  };

  const allSubsections = Object.entries(docSections).flatMap(([key, section]) =>
    Object.keys(section.subsections)
  );

  const currentIndex = allSubsections.indexOf(activeSection);
  const prevSection = currentIndex > 0 ? allSubsections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSubsections.length - 1 ? allSubsections[currentIndex + 1] : null;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="pt-16">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-40 px-4 py-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <Menu size={20} />
            <span>Documentation Menu</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className={`
              fixed lg:sticky top-32 lg:top-24 left-0 bottom-0 lg:bottom-auto
              w-72 bg-white lg:bg-transparent border-r lg:border-0 border-gray-200
              overflow-y-auto z-50 lg:z-auto h-fit max-h-[calc(100vh-8rem)]
              transition-transform duration-300 lg:translate-x-0
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <div className="p-6 lg:p-0">
                {/* Close button for mobile */}
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>

                <h2 className="text-xl font-bold text-gray-900 mb-6">Documentation</h2>

                <nav className="space-y-6">
                  {Object.entries(docSections).map(([sectionKey, section]) => (
                    <div key={sectionKey}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {Object.entries(section.subsections).map(([subKey, subsection]) => (
                          <li key={subKey}>
                            <button
                              onClick={() => {
                                setActiveSection(subKey);
                                setIsSidebarOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${activeSection === subKey
                                  ? 'bg-blue-100 text-blue-700 font-medium'
                                  : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                              <span>{subsection.icon}</span>
                              <span>{subsection.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
              <div
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Main Content */}
            <main className="flex-1 pb-20 lg:pt-0 pt-12">
              <div className="max-w-4xl">
                <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    {docContent[activeSection]?.title || 'Documentation'}
                  </h1>
                  <div className="prose prose-lg max-w-none">
                    {docContent[activeSection]?.content || (
                      <p className="text-gray-700">Content coming soon...</p>
                    )}
                  </div>
                </article>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                  <div>
                    {prevSection && (
                      <button
                        onClick={() => setActiveSection(prevSection)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <ArrowRight size={20} className="rotate-180" />
                        <span>Previous</span>
                      </button>
                    )}
                  </div>
                  <div>
                    {nextSection && (
                      <button
                        onClick={() => setActiveSection(nextSection)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>Next</span>
                        <ArrowRight size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
