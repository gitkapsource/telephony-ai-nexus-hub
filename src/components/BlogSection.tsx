import React, { useState } from 'react';
import { Clock, ArrowRight, Phone, Bot, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: "1",
      title: "Complete Guide to VoIP Migration in : Step-by-Step Process",
      excerpt: "Learn the complete process of migrating from traditional phone systems to VoIP. Discover how n businesses can save up to 60% on communication costs with proper VoIP implementation.",
      category: "VoIP Solutions",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tags: ["VoIP Migration", "", "Cost Savings", "Implementation"],
      featured: true
    },
    {
      id: "2",
      title: "FreeSWITCH vs Asterisk: Which VoIP Platform is Better for n Businesses?",
      excerpt: "Comprehensive comparison of FreeSWITCH and Asterisk for n businesses. Understand the pros, cons, and best use cases for each platform in the n market.",
      category: "VoIP Platforms",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      tags: ["FreeSWITCH", "Asterisk", "Comparison", "VoIP Platforms"]
    },
    {
      id: "3",
      title: "Amazon Connect Implementation Guide: Setting Up Cloud Contact Center in ",
      excerpt: "Step-by-step guide to implementing Amazon Connect for n contact centers. Learn about AWS integration, cost optimization, and best practices for n businesses.",
      category: "Cloud VoIP",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["Amazon Connect", "AWS", "Contact Center", "Cloud VoIP"]
    },
    {
      id: "4",
      title: "Voice AI Revolution: How n Businesses are Using Voice Bots to Increase Sales",
      excerpt: "Discover how n businesses are leveraging Voice AI to automate customer service, increase sales, and improve customer experience. Real case studies and implementation strategies.",
      category: "Voice AI",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      tags: ["Voice AI", "Voice Bots", "Customer Service", "Automation"]
    },
    {
      id: "5",
      title: "Google Dialogflow Implementation: Building Intelligent Chat Bots for n Markets",
      excerpt: "Complete guide to implementing Google Dialogflow for n businesses. Learn about multilingual support, local language integration, and cost-effective AI solutions.",
      category: "Voice AI",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["Google Dialogflow", "Chat Bots", "AI", "Multilingual"]
    },
    {
      id: "6",
      title: "SIP Trunking Benefits for n Businesses: Cost Savings and Scalability",
      excerpt: "Understand how SIP trunking can reduce communication costs by up to 70% for n businesses. Learn about implementation, security, and scalability benefits.",
      category: "VoIP Solutions",
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

  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  // Get featured post (always show first post as featured)
  const featuredPost = blogPosts[0];

  return (
    <section id="blog" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VoIP & Voice AI Blog - Expert Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Stay updated with the latest trends in VoIP, Voice AI, and telecommunications technology. 
            Expert insights, implementation guides, and industry best practices for n businesses.
          </p>
          <Link 
            to="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 inline-flex"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-2 ${
                  selectedCategory === category.name 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} articles</p>
                {selectedCategory === category.name && (
                  <div className="mt-3 text-blue-600 text-sm font-medium">
                    ✓ Selected
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory ? `${selectedCategory} Articles` : 'Recent Articles'}
            </h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Clear Filter
              </button>
            )}
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with VoIP & Voice AI Trends
            </h3>
            <p className="text-blue-100 mb-6">
              Get the latest insights on VoIP technology, Voice AI developments, and industry best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Join 25+ n businesses already subscribed to our VoIP insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 