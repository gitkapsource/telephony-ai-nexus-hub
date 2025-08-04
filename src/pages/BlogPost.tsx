import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  const blogPosts = [
    {
      id: "1",
      title: "Complete Guide to VoIP Migration in India: Step-by-Step Process",
      excerpt: "Learn the complete process of migrating from traditional phone systems to VoIP. Discover how Indian businesses can save up to 60% on communication costs with proper VoIP implementation.",
      content: `
        <h2>Introduction to VoIP Migration</h2>
        <p>Voice over Internet Protocol (VoIP) migration is a crucial step for Indian businesses looking to modernize their communication infrastructure. With the right approach, companies can save up to 60% on communication costs while improving call quality and reliability.</p>
        
        <h2>Why Migrate to VoIP?</h2>
        <ul>
          <li><strong>Cost Savings:</strong> Up to 60% reduction in communication costs</li>
          <li><strong>Scalability:</strong> Easy to add or remove phone lines</li>
          <li><strong>Advanced Features:</strong> Call forwarding, voicemail, conference calling</li>
          <li><strong>Remote Work Support:</strong> Work from anywhere with internet access</li>
        </ul>
        
        <h2>Step-by-Step Migration Process</h2>
        
        <h3>Step 1: Assessment and Planning</h3>
        <p>Before starting the migration, conduct a thorough assessment of your current phone system:</p>
        <ul>
          <li>Audit existing phone lines and usage patterns</li>
          <li>Evaluate internet bandwidth requirements</li>
          <li>Identify critical business processes that depend on phone communication</li>
          <li>Plan for downtime and business continuity</li>
        </ul>
        
        <h3>Step 2: Network Infrastructure Preparation</h3>
        <p>Ensure your network can handle VoIP traffic:</p>
        <ul>
          <li>Upgrade internet connection if necessary (minimum 1 Mbps per concurrent call)</li>
          <li>Implement Quality of Service (QoS) settings</li>
          <li>Set up VLANs for voice traffic isolation</li>
          <li>Install power backup for network equipment</li>
        </ul>
        
        <h3>Step 3: VoIP Platform Selection</h3>
        <p>Choose the right VoIP platform for your business:</p>
        <ul>
          <li><strong>FreeSWITCH:</strong> Open-source, highly customizable</li>
          <li><strong>Asterisk:</strong> Popular open-source solution</li>
          <li><strong>Amazon Connect:</strong> Cloud-based, scalable</li>
          <li><strong>3CX:</strong> User-friendly, feature-rich</li>
        </ul>
        
        <h3>Step 4: Implementation and Testing</h3>
        <p>Execute the migration with proper testing:</p>
        <ul>
          <li>Set up VoIP servers and configure SIP trunks</li>
          <li>Configure phone extensions and routing rules</li>
          <li>Test call quality and connectivity</li>
          <li>Train staff on new system features</li>
        </ul>
        
        <h2>Cost Considerations for Indian Businesses</h2>
        <p>VoIP migration costs in India typically range from ₹50,000 to ₹5,00,000 depending on:</p>
        <ul>
          <li>Number of phone lines</li>
          <li>Chosen platform (FreeSWITCH, Asterisk, etc.)</li>
          <li>Hardware requirements</li>
          <li>Implementation complexity</li>
        </ul>
        
        <h2>Common Challenges and Solutions</h2>
        
        <h3>Challenge 1: Poor Call Quality</h3>
        <p><strong>Solution:</strong> Implement proper QoS settings and ensure adequate bandwidth.</p>
        
        <h3>Challenge 2: Power Outages</h3>
        <p><strong>Solution:</strong> Install UPS systems and consider cloud-based VoIP solutions.</p>
        
        <h3>Challenge 3: Employee Resistance</h3>
        <p><strong>Solution:</strong> Provide comprehensive training and highlight benefits.</p>
        
        <h2>Post-Migration Optimization</h2>
        <p>After successful migration, focus on:</p>
        <ul>
          <li>Monitoring call quality and system performance</li>
          <li>Optimizing call routing and auto-attendant settings</li>
          <li>Implementing advanced features like call recording and analytics</li>
          <li>Regular system maintenance and updates</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>VoIP migration is a strategic investment that can significantly improve your business communication while reducing costs. With proper planning and implementation, Indian businesses can successfully transition to modern VoIP systems and enjoy the benefits of advanced telephony features.</p>
        
        <p>For expert VoIP migration services in India, contact IntelVoiz at +91-9825597662 or email info@intelvoiz.com.</p>
      `,
      category: "VoIP Solutions",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      tags: ["VoIP Migration", "India", "Cost Savings", "Implementation"],
      author: "IntelVoiz Team",
      featured: true
    },
    {
      id: "2",
      title: "FreeSWITCH vs Asterisk: Which VoIP Platform is Better for Indian Businesses?",
      excerpt: "Comprehensive comparison of FreeSWITCH and Asterisk for Indian businesses. Understand the pros, cons, and best use cases for each platform in the Indian market.",
      content: `
        <h2>Introduction</h2>
        <p>Choosing the right VoIP platform is crucial for Indian businesses. FreeSWITCH and Asterisk are two of the most popular open-source VoIP platforms, each with unique strengths and use cases.</p>
        
        <h2>FreeSWITCH Overview</h2>
        <p>FreeSWITCH is a scalable open-source communications platform designed for creating voice, video, and text applications.</p>
        
        <h3>FreeSWITCH Advantages</h3>
        <ul>
          <li><strong>High Performance:</strong> Handles thousands of concurrent calls</li>
          <li><strong>Scalability:</strong> Excellent for large deployments</li>
          <li><strong>Modern Architecture:</strong> Built with modern technologies</li>
          <li><strong>Multi-Protocol Support:</strong> SIP, WebRTC, and more</li>
          <li><strong>Real-time Media:</strong> Superior audio and video handling</li>
        </ul>
        
        <h3>FreeSWITCH Disadvantages</h3>
        <ul>
          <li><strong>Complex Setup:</strong> Steeper learning curve</li>
          <li><strong>Limited Documentation:</strong> Fewer resources compared to Asterisk</li>
          <li><strong>Community Size:</strong> Smaller community than Asterisk</li>
        </ul>
        
        <h2>Asterisk Overview</h2>
        <p>Asterisk is the most popular open-source communications platform, known for its flexibility and extensive feature set.</p>
        
        <h3>Asterisk Advantages</h3>
        <ul>
          <li><strong>Mature Platform:</strong> Decades of development and refinement</li>
          <li><strong>Extensive Documentation:</strong> Abundant resources and tutorials</li>
          <li><strong>Large Community:</strong> Active developer and user community</li>
          <li><strong>Easy Configuration:</strong> User-friendly configuration files</li>
          <li><strong>Rich Feature Set:</strong> Comprehensive telephony features</li>
        </ul>
        
        <h3>Asterisk Disadvantages</h3>
        <ul>
          <li><strong>Performance Limitations:</strong> May struggle with very high call volumes</li>
          <li><strong>Legacy Architecture:</strong> Some components are dated</li>
          <li><strong>Resource Usage:</strong> Higher memory and CPU requirements</li>
        </ul>
        
        <h2>Comparison for Indian Businesses</h2>
        
        <h3>Small to Medium Businesses (SMBs)</h3>
        <p><strong>Recommended:</strong> Asterisk</p>
        <p>Reasons:</p>
        <ul>
          <li>Easier to set up and configure</li>
          <li>Abundant local support and documentation</li>
          <li>Cost-effective for smaller deployments</li>
          <li>Familiar to most Indian VoIP consultants</li>
        </ul>
        
        <h3>Large Enterprises</h3>
        <p><strong>Recommended:</strong> FreeSWITCH</p>
        <p>Reasons:</p>
        <ul>
          <li>Better performance for high call volumes</li>
          <li>Superior scalability</li>
          <li>Modern architecture for future growth</li>
          <li>Better support for advanced features</li>
        </ul>
        
        <h3>Call Centers</h3>
        <p><strong>Recommended:</strong> FreeSWITCH</p>
        <p>Reasons:</p>
        <ul>
          <li>Superior handling of concurrent calls</li>
          <li>Better real-time media processing</li>
          <li>Advanced call routing capabilities</li>
          <li>Integration with modern contact center features</li>
        </ul>
        
        <h2>Cost Considerations in India</h2>
        
        <h3>Implementation Costs</h3>
        <ul>
          <li><strong>Asterisk:</strong> ₹50,000 - ₹2,00,000</li>
          <li><strong>FreeSWITCH:</strong> ₹1,00,000 - ₹5,00,000</li>
        </ul>
        
        <h3>Maintenance Costs</h3>
        <ul>
          <li><strong>Asterisk:</strong> Lower due to abundant local expertise</li>
          <li><strong>FreeSWITCH:</strong> Higher due to specialized knowledge required</li>
        </ul>
        
        <h2>Technical Requirements</h2>
        
        <h3>Hardware Requirements</h3>
        <table>
          <tr>
            <th>Component</th>
            <th>Asterisk</th>
            <th>FreeSWITCH</th>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Dual-core minimum</td>
            <td>Quad-core recommended</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>4GB minimum</td>
            <td>8GB recommended</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>50GB SSD</td>
            <td>100GB SSD</td>
          </tr>
        </table>
        
        <h2>Support and Community</h2>
        
        <h3>Local Support in India</h3>
        <ul>
          <li><strong>Asterisk:</strong> Extensive local expertise available</li>
          <li><strong>FreeSWITCH:</strong> Limited but growing local expertise</li>
        </ul>
        
        <h3>Online Resources</h3>
        <ul>
          <li><strong>Asterisk:</strong> Abundant tutorials, forums, and documentation</li>
          <li><strong>FreeSWITCH:</strong> Growing but smaller resource base</li>
        </ul>
        
        <h2>Migration Considerations</h2>
        <p>If you're considering migrating between platforms:</p>
        <ul>
          <li><strong>Asterisk to FreeSWITCH:</strong> Complex migration requiring expertise</li>
          <li><strong>FreeSWITCH to Asterisk:</strong> Generally easier due to Asterisk's flexibility</li>
        </ul>
        
        <h2>Recommendations for Indian Businesses</h2>
        
        <h3>Choose Asterisk if:</h3>
        <ul>
          <li>You're a small to medium business</li>
          <li>You need quick implementation</li>
          <li>You have limited technical expertise</li>
          <li>You want extensive local support</li>
          <li>You have budget constraints</li>
        </ul>
        
        <h3>Choose FreeSWITCH if:</h3>
        <ul>
          <li>You're a large enterprise</li>
          <li>You need high-performance call handling</li>
          <li>You have technical expertise or budget for consultants</li>
          <li>You plan to scale significantly</li>
          <li>You need advanced features</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Both FreeSWITCH and Asterisk are excellent VoIP platforms, but they serve different needs. For most Indian SMBs, Asterisk offers the best balance of features, ease of use, and local support. For larger enterprises with high call volumes, FreeSWITCH provides superior performance and scalability.</p>
        
        <p>Contact IntelVoiz at +91-9825597662 for expert consultation on choosing the right VoIP platform for your business.</p>
      `,
      category: "VoIP Platforms",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      tags: ["FreeSWITCH", "Asterisk", "Comparison", "VoIP Platforms"],
      author: "IntelVoiz Team"
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            {post.featured && (
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}
          </div>

          {/* Article Content */}
          <div className="p-8 lg:p-12">
            {/* Meta Information */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">IN</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-gray-500 text-sm">IntelVoiz Team</p>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <Share2 className="h-4 w-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need VoIP or Voice AI Solutions?
              </h3>
              <p className="text-gray-600 mb-6">
                Get expert consultation from India's leading VoIP and Voice AI specialists. 
                Contact us for a free assessment of your communication needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+91-9825597662"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Call +91-9825597662
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost; 