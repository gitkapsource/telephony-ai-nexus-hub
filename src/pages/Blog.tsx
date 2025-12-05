import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Phone, Bot, Cloud, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: "1",
      title: "Complete Guide to VoIP Migration in India: Step-by-Step Process",
      excerpt: "Learn the complete process of migrating from traditional phone systems to VoIP. Discover how Indian businesses can save up to 60% on communication costs with proper VoIP implementation.",
      category: "VoIP Solutions",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tags: ["VoIP Migration", "India", "Cost Savings", "Implementation"],
      featured: true
    },
    {
      id: "2",
      title: "FreeSWITCH vs Asterisk: Which VoIP Platform is Better for Indian Businesses?",
      excerpt: "Comprehensive comparison of FreeSWITCH and Asterisk for Indian businesses. Understand the pros, cons, and best use cases for each platform in the Indian market.",
      category: "VoIP Platforms",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      tags: ["FreeSWITCH", "Asterisk", "Comparison", "VoIP Platforms"]
    },
    {
      id: "3",
      title: "Amazon Connect Implementation Guide: Setting Up Cloud Contact Center in India",
      excerpt: "Step-by-step guide to implementing Amazon Connect for Indian contact centers. Learn about AWS integration, cost optimization, and best practices for Indian businesses.",
      category: "Cloud VoIP",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["Amazon Connect", "AWS", "Contact Center", "Cloud VoIP"]
    },
    {
      id: "4",
      title: "Voice AI Revolution: How Indian Businesses are Using Voice Bots to Increase Sales",
      excerpt: "Discover how Indian businesses are leveraging Voice AI to automate customer service, increase sales, and improve customer experience. Real case studies and implementation strategies.",
      category: "Voice AI",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      tags: ["Voice AI", "Voice Bots", "Customer Service", "Automation"]
    },
    {
      id: "5",
      title: "Google Dialogflow Implementation: Building Intelligent Chat Bots for Indian Markets",
      excerpt: "Complete guide to implementing Google Dialogflow for Indian businesses. Learn about multilingual support, local language integration, and cost-effective AI solutions.",
      category: "Voice AI",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["Google Dialogflow", "Chat Bots", "AI", "Multilingual"]
    },
    {
      id: "6",
      title: "SIP Trunking Benefits for Indian Businesses: Cost Savings and Scalability",
      excerpt: "Understand how SIP trunking can reduce communication costs by up to 70% for Indian businesses. Learn about implementation, security, and scalability benefits.",
      category: "VoIP Solutions",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["SIP Trunking", "Cost Savings", "Scalability", "VoIP"]
    }
  ];

  const categories = [
    { name: "VoIP Solutions", icon: Phone, count: 2 },
    { name: "Voice AI", icon: Bot, count: 2 },
    { name: "Cloud VoIP", icon: Cloud, count: 1 },
    { name: "VoIP Platforms", icon: Shield, count: 1 }
  ];

  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              VoIP & Voice AI Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, implementation guides, and industry best practices for Indian businesses
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !selectedCategory 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Posts ({blogPosts.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category.name 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              {searchQuery 
                ? `No articles found matching "${searchQuery}"`
                : selectedCategory 
                ? `No articles found in "${selectedCategory}" category`
                : 'No articles found'
              }
            </div>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with VoIP & Voice AI Insights
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles, implementation guides, and industry insights delivered to your inbox. 
            Join 25+ Indian businesses already subscribed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 