"use client";
import {
  Palette,
  BarChart,
  Share2,
  Mail,
  Search,
  Globe,
  Layers,
  RefreshCw,
  LineChart,
  MessageSquare,
  TrelloIcon,
  CheckSquare,
} from "lucide-react";

export default function Tools() {
  const tools = [
    { name: "Canva", icon: <Palette className="h-10 w-10 text-purple-600" /> },
    {
      name: "Google Analytics",
      icon: <BarChart className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Hootsuite",
      icon: <Share2 className="h-10 w-10 text-purple-600" />,
    },
    { name: "Mailchimp", icon: <Mail className="h-10 w-10 text-purple-600" /> },
    { name: "SEMrush", icon: <Search className="h-10 w-10 text-purple-600" /> },
    {
      name: "WordPress",
      icon: <Globe className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Adobe Creative Suite",
      icon: <Layers className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Buffer",
      icon: <RefreshCw className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Ahrefs",
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Slack",
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Trello",
      icon: <TrelloIcon className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "Asana",
      icon: <CheckSquare className="h-10 w-10 text-purple-600" />,
    },
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                {tool.icon}
              </div>
              <p className="font-medium text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
