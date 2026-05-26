// AI NEWS PORTAL - search.js
const articlesData = [{"id": "AI-NEWS-003", "title": "Nvidia's Huang Bankrolls AI Boom with $90B Deal Spree", "description": "Nvidia CEO Jensen Huang is making a $90 billion deal spree to bankroll the AI boom, as the company continues to dominate the AI hardware market with its Blackwell architecture chips selling out months in advance.", "section": "COMPANIES", "date": "2026-05-20", "url": "article_AI-NEWS-003.html"}, {"id": "AI-NEWS-005", "title": "Ask YouTube Brings AI-Powered Conversational Search to Video, Adds Gemini Omni to Shorts", "description": "YouTube launched 'Ask YouTube' \u2014 AI-powered conversational search for video content, and added Gemini Omni to YouTube Shorts for enhanced AI-powered content discovery.", "section": "TOOLS", "date": "2026-05-20", "url": "article_AI-NEWS-005.html"}, {"id": "AI-NEWS-050", "title": "Goldman Sachs Estimates 300 Million Jobs Exposed to AI Automation Globally", "description": "Goldman Sachs Research estimates that 300 million jobs globally are exposed to automation by AI over a 10-year period. In the US, AI can automate tasks accounting for 25% of all work hours.", "section": "JOBS", "date": "2026-05-19", "url": "article_AI-NEWS-050.html"}, {"id": "AI-NEWS-001", "title": "Anthropic Acquires Stainless \u2014 API Documentation Company", "description": "Anthropic announced acquisition of Stainless, the API documentation company that powers API docs for many leading AI and developer tools. The deal continues Anthropic's expansion beyond core AI model development into the developer tools ecosystem.", "section": "COMPANIES", "date": "2026-05-19", "url": "article_AI-NEWS-001.html"}, {"id": "AI-NEWS-004", "title": "Alibaba Unveils New AI Chip for Training and Inferencing", "description": "Alibaba unveiled a new AI chip designed for both training and inference workloads, expanding the competitive landscape in AI hardware and reducing dependence on Western chip suppliers.", "section": "TRENDS", "date": "2026-05-20", "url": "article_AI-NEWS-004.html"}, {"id": "AI-NEWS-006", "title": "Anthropic's $30B Round Co-Led by Sequoia, Dragoneer, Greenoaks, and Altimeter", "description": "Anthropic's fundraising round of at least $30 billion at a $900 billion-plus valuation is co-led by Sequoia Capital, Dragoneer Investment Group, Greenoaks Capital, and Altimeter Capital.", "section": "COMPANIES", "date": "2026-05-17", "url": "article_AI-NEWS-006.html"}, {"id": "AI-NEWS-011", "title": "OpenAI Launches Personal Finance Feature in ChatGPT", "description": "OpenAI shipped a personal finance experience inside ChatGPT, connecting to users' financial accounts to provide budgeting analysis, spending summaries, and savings recommendations using the memory system.", "section": "TOOLS", "date": "2026-05-18", "url": "article_AI-NEWS-011.html"}, {"id": "AI-NEWS-043", "title": "Over 70,000 Workers Already Impacted by AI-Driven Layoffs in 2026", "description": "More than 70,000 employees have been impacted by AI-driven layoffs in 2026 across 45+ companies. Over 100,000 were affected in 2025, with AI layoffs spreading beyond tech into finance, logistics, consulting, and retail.", "section": "JOBS", "date": "2026-05-19", "url": "article_AI-NEWS-043.html"}, {"id": "AI-NEWS-025", "title": "Entire Companies Under AI Psychosis, Says Terraform Creator Mitchell Hashimoto", "description": "Terraform creator Mitchell Hashimoto published a viral analysis arguing companies are building meaningless AI workflows. AI will amplify the gap between those who know what they want and those who don't.", "section": "TRENDS", "date": "2026-05-16", "url": "article_AI-NEWS-025.html"}, {"id": "AI-NEWS-048", "title": "OpenAI's Consulting Arm DeployCo Attracts Major Private Equity Firms", "description": "OpenAI's new consulting arm DeployCo is attracting major private equity and consulting firms as enterprises seek help deploying AI solutions at scale.", "section": "COMPANIES", "date": "2026-05-13", "url": "article_AI-NEWS-048.html"}, {"id": "AI-NEWS-046", "title": "China's Biotech Boom, AI Limits and Regulatory Edge", "description": "Bloomberg reports on China's biotechnology boom powered by AI, examining the limits and regulatory advantages that shape China's approach to AI in life sciences.", "section": "TRENDS", "date": "2026-05-20", "url": "article_AI-NEWS-046.html"}, {"id": "AI-NEWS-045", "title": "New Accessibility Features Powered by Apple Intelligence", "description": "Apple announced new accessibility features using Apple Intelligence, including enhanced voice control and assistive technologies for users with disabilities.", "section": "TOOLS", "date": "2026-05-19", "url": "article_AI-NEWS-045.html"}, {"id": "AI-NEWS-012", "title": "White-Collar Workers Report Growing Feelings of 'AI Brain Fry'", "description": "White-collar workers are increasingly reporting cognitive exhaustion and 'AI brain fry' as they struggle to adapt to AI-augmented workflows and the rapid pace of technological change in the workplace.", "section": "JOBS", "date": "2026-05-20", "url": "article_AI-NEWS-012.html"}, {"id": "AI-NEWS-028", "title": "SANA-WM: NVIDIA Releases 2.6B Open-Source World Model for 1-Minute 720p Video", "description": "NVIDIA released SANA-WM, a 2.6 billion parameter open-source world model that generates 1-minute 720p video from text prompts, advancing video generation capabilities.", "section": "TOOLS", "date": "2026-05-16", "url": "article_AI-NEWS-028.html"}, {"id": "AI-NEWS-008", "title": "Google I/O 2026 Confirmed Lineup: Gemini Spark, Desktop Agent, Android XR Glasses", "description": "Google I/O 2026 keynote lineup includes Gemini Spark persistent 24/7 AI agent, Gemini desktop agent for Mac/PC control, Android XR smart glasses, and Gemini Omni unified model for text, images, and video.", "section": "TRENDS", "date": "2026-05-17", "url": "article_AI-NEWS-008.html"}, {"id": "AI-NEWS-017", "title": "Harvey AI's Winston Weinberg: Why AI Will Force Lawyers to Change Their Fee Structure", "description": "Harvey AI co-founder discusses how AI will fundamentally alter legal fee structures, moving from billable hours to value-based pricing as AI automates legal research and document review.", "section": "JOBS", "date": "2026-05-20", "url": "article_AI-NEWS-017.html"}, {"id": "AI-NEWS-039", "title": "Meta's New Reality: Record High Profits, Record Low Morale", "description": "Wired published a feature on Meta's current state amid layoffs and AI push, revealing record profits but employee morale at historic lows as the company restructures around AI.", "section": "COMPANIES", "date": "2026-05-14", "url": "article_AI-NEWS-039.html"}, {"id": "AI-NEWS-049", "title": "OpenClaw: The Fastest-Growing Open-Source Project in GitHub History Passes 210K Stars", "description": "OpenClaw, a personal AI assistant that runs entirely on local devices, passed 210,000 GitHub stars. It connects AI models to over 50 integrations and stores all data locally.", "section": "TOOLS", "date": "2026-05-13", "url": "article_AI-NEWS-049.html"}];

function searchArticles(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return articlesData.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q) ||
    a.section.toLowerCase().includes(q)
  );
}

function showSearch(query) {
  const results = searchArticles(query);
  const overlay = document.getElementById('searchResults');
  const panel = overlay.querySelector('.search-results-panel');
  let html = '<button class="search-close" onclick="closeSearch()">&times;</button>';
  html += '<h2>Search Results</h2>';
  if (results.length === 0) {
    html += '<p class="no-results">No articles found for "<strong>' + query.replace(/</g,'&lt;') + '</strong>"</p>';
  } else {
    html += '<p>Found ' + results.length + ' result' + (results.length > 1 ? 's' : '') + ':</p>';
    results.forEach(a => {
      html += '<a href="' + a.url + '" class="search-result-item">' +
        '<h3>' + a.title + '</h3>' +
        '<p>' + a.description + '</p>' +
        '<small>' + a.section + ' &middot; ' + a.date + '</small>' +
        '</a>';
    });
  }
  panel.innerHTML = html;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSearch() {
  document.getElementById('searchResults').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (searchInput.value.trim()) showSearch(searchInput.value);
    });
  }
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && searchInput.value.trim()) showSearch(searchInput.value);
    });
  }

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSearch();
  });

  // Bookmark toggle
  document.querySelectorAll('.bookmark-btn').forEach(function(btn) {
    const articleId = btn.dataset.articleId;
    const key = 'bookmark_' + articleId;
    if (localStorage.getItem(key) === 'true') {
      btn.classList.add('saved');
      btn.innerHTML = '&#9733;';
    }
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const saved = localStorage.getItem(key) === 'true';
      if (saved) {
        localStorage.removeItem(key);
        btn.classList.remove('saved');
        btn.innerHTML = '&#9734;';
      } else {
        localStorage.setItem(key, 'true');
        btn.classList.add('saved');
        btn.innerHTML = '&#9733;';
      }
    });
  });

  // Copy link
  document.querySelectorAll('.copy-link-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(function() {
        btn.classList.add('copied');
        btn.textContent = 'Copied!';
        setTimeout(function() {
          btn.classList.remove('copied');
          btn.textContent = '🔗';
        }, 2000);
      });
    });
  });
});
