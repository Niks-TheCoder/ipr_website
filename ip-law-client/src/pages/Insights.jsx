// src/pages/Insights.jsx
import { ArrowRightIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Patent Prosecution: A Complete Guide",
    excerpt: "Learn the essential steps in patent prosecution and how to navigate the complex process of securing patent protection for your innovations.",
    category: "Patents",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    image: "https://picsum.photos/400/300?random=1",
    slug: "understanding-patent-prosecution",
  },
  {
    id: 2,
    title: "Trademark Infringement: Recent Court Decisions",
    excerpt: "Analysis of recent trademark infringement cases and their implications for brand protection strategies.",
    category: "Trademarks",
    author: "David Chen",
    date: "2024-01-10",
    image: "https://picsum.photos/400/300?random=2",
    slug: "trademark-infringement-court-decisions",
  },
  {
    id: 3,
    title: "AI and Copyright: Navigating New Legal Territory",
    excerpt: "Exploring the intersection of artificial intelligence and copyright law in the digital age.",
    category: "Copyrights",
    author: "Jennifer Walsh",
    date: "2024-01-05",
    image: "https://picsum.photos/400/300?random=3",
    slug: "ai-and-copyright-legal-territory",
  },
  {
    id: 4,
    title: "International IP Strategy for Global Businesses",
    excerpt: "Essential considerations for protecting intellectual property across multiple jurisdictions.",
    category: "Industry News",
    author: "Michael Brown",
    date: "2023-12-28",
    image: "https://picsum.photos/400/300?random=4",
    slug: "international-ip-strategy",
  },
  {
    id: 5,
    title: "Trade Secret Protection in the Remote Work Era",
    excerpt: "Best practices for maintaining trade secret protection when employees work remotely.",
    category: "Litigation",
    author: "Maria Rodriguez",
    date: "2023-12-20",
    image: "https://picsum.photos/400/300?random=5",
    slug: "trade-secret-protection-remote-work",
  },
  {
    id: 6,
    title: "Design Patent Trends in Consumer Electronics",
    excerpt: "Analysis of design patent filing trends and strategies in the consumer electronics industry.",
    category: "Patents",
    author: "Robert Kim",
    date: "2023-12-15",
    image: "https://picsum.photos/400/300?random=6",
    slug: "design-patent-trends-electronics",
  },
];

const categories = ["All", "Patents", "Trademarks", "Copyrights", "Litigation", "Industry News"];

const BlogHero = () => (
  <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">IP Insights & News</h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto">
        Stay informed with the latest developments in intellectual property law, industry trends, and expert analysis from our legal team.
      </p>
    </div>
  </section>
);

const BlogFilters = ({ activeCategory, setActiveCategory }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Filter by Category</h2>
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-teal-600 hover:bg-teal-700 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

const BlogGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CalendarDaysIcon className="h-4 w-4 mr-1.5" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex-grow">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{post.excerpt}</p>
          <div className="border-t dark:border-gray-700 mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <UserIcon className="h-4 w-4 mr-1.5" />
              {post.author}
            </div>
            <a href={`/blog/${post.slug}`} className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm">
              Read More
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All' ? blogPosts : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <Navbar />
      <main>
        <BlogHero />
        <div className="py-16 sm:py-24">
          <div className="container mx-auto px-6">
            <BlogFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <BlogGrid posts={filteredPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
