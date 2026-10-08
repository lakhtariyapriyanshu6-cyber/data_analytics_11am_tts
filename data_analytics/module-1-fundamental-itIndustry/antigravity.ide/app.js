// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Mobile Drawer Navigation (Right Side) ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none', 'invisible');
    mobileDrawerBackdrop.classList.add('opacity-100', 'visible');
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileMenu() {
    mobileDrawerBackdrop.classList.remove('opacity-100', 'visible');
    mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none', 'invisible');
    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === mobileDrawerBackdrop) {
        closeMobileMenu();
      }
    });
  }

  // Close drawer when clicking any mobile navigation link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close drawer on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileDrawer.classList.contains('translate-x-full')) {
      closeMobileMenu();
      closeModal();
    }
  });

  // --- Projects Data & Filtering ---
  const projects = [
    {
      id: 'proj-1',
      category: 'powerbi',
      title: 'E-Commerce Executive Sales & Customer Retention Dashboard',
      subtitle: 'Comprehensive business intelligence report tracking $2.4M in online revenue and cohort retention.',
      tools: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Data Modeling'],
      metrics: [
        { label: 'Revenue Analyzed', value: '$2.4M+' },
        { label: 'Retention Boost Identified', value: '+18.4%' },
        { label: 'Query Performance', value: '45% Faster' }
      ],
      description: 'Engineered a multi-table Star Schema model connecting sales, customer demographic, and product return tables. Developed 35+ dynamic DAX measures including Customer Lifetime Value (CLV), Moving Averages, Year-over-Year (YoY) growth, and churn probabilities. Implemented role-based row-level security and automated incremental refreshes.',
      github: 'https://github.com/lakhtariyapriyanshu/ecommerce-powerbi-analytics',
      demo: 'https://app.powerbi.com/view?r=eyJrIjoiDemoReport',
      accentColor: 'from-amber-500/20 to-orange-500/10'
    },
    {
      id: 'proj-2',
      category: 'sql',
      title: 'Financial Risk Assessment & Credit Default Modeling Pipeline',
      subtitle: 'Complex relational database modeling & automated feature engineering on 150,000+ loan accounts.',
      tools: ['PostgreSQL', 'Advanced SQL', 'Window Functions', 'CTEs', 'Database Indexing'],
      metrics: [
        { label: 'Records Queried', value: '150,000+' },
        { label: 'Default Indicators', value: '12 Metrics' },
        { label: 'ETL Execution Time', value: '-62%' }
      ],
      description: 'Authored modular, optimized SQL scripts utilizing recursive Common Table Expressions (CTEs), rank & partition window functions, and indexing strategies. Detected high-risk customer segments with 82% correlation to delinquency 90 days before default. Formatted analytical data marts ready for downstream predictive models.',
      github: 'https://github.com/lakhtariyapriyanshu/sql-financial-risk-analytics',
      demo: '#',
      accentColor: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      id: 'proj-3',
      category: 'python',
      title: 'Healthcare Wait-Times & Clinical Patient Outcome EDA',
      subtitle: 'End-to-end exploratory data analysis and hypothesis testing on emergency department bottlenecks.',
      tools: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Scipy Stats', 'Jupyter'],
      metrics: [
        { label: 'Dataset Size', value: '85K Rows' },
        { label: 'Stat Significance', value: 'p < 0.01' },
        { label: 'Wait Time Reduction Rec.', value: '23 Mins' }
      ],
      description: 'Performed extensive data hygiene, imputed missing clinical variables, and checked outlier distributions using interquartile range (IQR) methods. Conducted two-sample t-tests and ANOVA to evaluate triage triage priority vs actual medical outcomes. Automated visual plots using Seaborn and Matplotlib to present actionable insights to medical department directors.',
      github: 'https://github.com/lakhtariyapriyanshu/healthcare-eda-python',
      demo: '#',
      accentColor: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      id: 'proj-4',
      category: 'excel',
      title: 'Global Supply Chain & Inventory Replenishment Forecasting',
      subtitle: 'Dynamic financial & inventory optimization model with automated stockout alerts.',
      tools: ['Advanced Excel', 'XLOOKUP', 'Pivot Tables', 'VBA / Macros', 'What-If Analysis'],
      metrics: [
        { label: 'Stockout Reduction', value: '-31%' },
        { label: 'Inventory Cost Saved', value: '$85,000' },
        { label: 'Automation', value: 'One-Click Refresh' }
      ],
      description: 'Constructed an automated inventory replenishment model utilizing safety stock formulas, Economic Order Quantity (EOQ), and historical lead-time standard deviations. Integrated interactive slicers, conditional formatting heatmaps, and macro-enabled weekly snapshot exports for operations executives.',
      github: 'https://github.com/lakhtariyapriyanshu/excel-supply-chain-analytics',
      demo: '#',
      accentColor: 'from-purple-500/20 to-pink-500/10'
    },
    {
      id: 'proj-5',
      category: 'powerbi',
      title: 'HR Workforce Attrition & Employee Performance Analytics',
      subtitle: 'Interactive Tableau & Power BI dashboard discovering key determinants of organizational turnover.',
      tools: ['Tableau', 'Power BI', 'DAX', 'Statistical Clustering', 'HR Analytics'],
      metrics: [
        { label: 'Attrition Accuracy', value: '89%' },
        { label: 'Departments Tracked', value: '8 Units' },
        { label: 'Survey Insights', value: '1,470 Staff' }
      ],
      description: 'Built intuitive heatmaps, tenure distribution curves, and salary disparity charts to pinpoint attrition hot zones among remote vs in-office staff. Demonstrated that lack of timely promotional reviews increased turnover risk by 2.4x.',
      github: 'https://github.com/lakhtariyapriyanshu/hr-attrition-dashboard',
      demo: '#',
      accentColor: 'from-rose-500/20 to-orange-500/10'
    },
    {
      id: 'proj-6',
      category: 'sql',
      title: 'SaaS Subscription Churn & Monthly Recurring Revenue (MRR) Cohorts',
      subtitle: 'Automated cohort retention matrix calculation using SQL window functions and aggregation.',
      tools: ['SQL', 'PostgreSQL', 'Cohort Analysis', 'LTV/CAC', 'Data Modeling'],
      metrics: [
        { label: 'Cohort Periods', value: '24 Months' },
        { label: 'Net MRR Expansion', value: '114%' },
        { label: 'Analysis Speed', value: 'Real-time' }
      ],
      description: 'Structured dynamic monthly user signup cohorts and computed month-over-month retention decay. Provided key metrics including Net Dollar Retention (NDR), Quick Ratio, and expansion churn to support growth marketing strategy.',
      github: 'https://github.com/lakhtariyapriyanshu/saas-mrr-churn-sql',
      demo: '#',
      accentColor: 'from-indigo-500/20 to-sky-500/10'
    }
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(category = 'all') {
    if (!projectsGrid) return;
    
    const filtered = category === 'all' 
      ? projects 
      : projects.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group" data-category="${p.category}">
        <!-- Top Gradient Banner -->
        <div class="h-40 bg-gradient-to-br ${p.accentColor} p-6 relative flex flex-col justify-between overflow-hidden border-b border-slate-800/60">
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
          <div class="flex items-center justify-between z-10">
            <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900/80 text-cyan-400 border border-cyan-500/30">
              ${p.category.toUpperCase()}
            </span>
            <button onclick="openProjectModal('${p.id}')" class="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700/60 transition-colors">
              <span>Inspect Case</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="z-10">
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <i data-lucide="layers" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>Data Analytics Case Study</span>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mt-1">
              ${p.title}
            </h3>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
          <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed">
            ${p.subtitle}
          </p>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            ${p.metrics.map(m => `
              <div class="text-center">
                <div class="text-xs text-slate-400 font-medium truncate">${m.label}</div>
                <div class="text-sm font-bold text-cyan-400 mt-0.5">${m.value}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tools Tags -->
          <div class="flex flex-wrap gap-1.5">
            ${p.tools.map(tool => `
              <span class="text-xs px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                ${tool}
              </span>
            `).join('')}
          </div>

          <!-- Actions -->
          <div class="pt-2 flex items-center gap-3 border-t border-slate-800/70">
            <button onclick="openProjectModal('${p.id}')" class="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/10">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>View Case Study</span>
            </button>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors" title="GitHub Repository">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Handle filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/20');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/20');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // Initial render
  renderProjects('all');

  // --- Project Modal ---
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalContent = document.getElementById('modalContent');
  const closeModalBtn = document.getElementById('closeModalBtn');

  window.openProjectModal = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category.toUpperCase();
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalDescription').textContent = project.description;

    // Metrics
    const metricsContainer = document.getElementById('modalMetrics');
    metricsContainer.innerHTML = project.metrics.map(m => `
      <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
        <span class="text-xs text-slate-400 block">${m.label}</span>
        <span class="text-base font-bold text-cyan-400 mt-1 block">${m.value}</span>
      </div>
    `).join('');

    // Tools
    const toolsContainer = document.getElementById('modalTools');
    toolsContainer.innerHTML = project.tools.map(t => `
      <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700/80">
        ${t}
      </span>
    `).join('');

    // Links
    const githubLink = document.getElementById('modalGithub');
    githubLink.href = project.github;

    // Show modal
    projectModal.classList.remove('hidden');
    setTimeout(() => {
      modalBackdrop.classList.remove('opacity-0');
      modalBackdrop.classList.add('opacity-100');
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  function closeModal() {
    if (!projectModal || projectModal.classList.contains('hidden')) return;
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  // --- Interactive KPI Calculator (Live Analytics Demonstration) ---
  const monthlyVisitorsInput = document.getElementById('calcVisitors');
  const conversionRateInput = document.getElementById('calcConversion');
  const aovInput = document.getElementById('calcAOV');
  const churnRateInput = document.getElementById('calcChurn');

  const metricProjectedRevenue = document.getElementById('calcRevenue');
  const metricNetCustomers = document.getElementById('calcCustomers');
  const metricAnnualRunRate = document.getElementById('calcARR');

  function updateKPICalculator() {
    if (!monthlyVisitorsInput || !conversionRateInput || !aovInput || !churnRateInput) return;

    const visitors = parseFloat(monthlyVisitorsInput.value) || 0;
    const conversion = parseFloat(conversionRateInput.value) || 0;
    const aov = parseFloat(aovInput.value) || 0;
    const churn = parseFloat(churnRateInput.value) || 0;

    // Display slider values
    document.getElementById('valVisitors').textContent = visitors.toLocaleString();
    document.getElementById('valConversion').textContent = conversion.toFixed(1) + '%';
    document.getElementById('valAOV').textContent = '$' + aov;
    document.getElementById('valChurn').textContent = churn.toFixed(1) + '%';

    // Analytics calculations
    const acquiredCustomers = Math.round(visitors * (conversion / 100));
    const retainedCustomers = Math.round(acquiredCustomers * (1 - churn / 100));
    const monthlyGrossRevenue = acquiredCustomers * aov;
    const annualRunRate = monthlyGrossRevenue * 12;

    if (metricProjectedRevenue) metricProjectedRevenue.textContent = '$' + monthlyGrossRevenue.toLocaleString();
    if (metricNetCustomers) metricNetCustomers.textContent = retainedCustomers.toLocaleString();
    if (metricAnnualRunRate) metricAnnualRunRate.textContent = '$' + annualRunRate.toLocaleString();
  }

  if (monthlyVisitorsInput) {
    [monthlyVisitorsInput, conversionRateInput, aovInput, churnRateInput].forEach(slider => {
      slider.addEventListener('input', updateKPICalculator);
    });
    updateKPICalculator();
  }

  // --- Toast Notification Helper ---
  function showToast(title, message, icon = 'check-circle') {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMsg').textContent = message;
    
    const toastIcon = document.getElementById('toastIcon');
    if (toastIcon) {
      toastIcon.setAttribute('data-lucide', icon);
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0');
    }, 3800);
  }

  // --- Copy Email Button ---
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'lakhtariyapriyanshu.work@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email Copied!', email + ' copied to clipboard.', 'copy');
      }).catch(() => {
        showToast('Email Contact', email, 'mail');
      });
    });
  });

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>
        <span>Dispatching Message...</span>
      `;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
        showToast('Message Received!', 'Thank you! Priyanshu will get back to you within 24 hours.', 'check-check');
      }, 1200);
    });
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'invisible');
      backToTopBtn?.classList.add('opacity-100', 'visible');
    } else {
      backToTopBtn?.classList.remove('opacity-100', 'visible');
      backToTopBtn?.classList.add('opacity-0', 'invisible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
