    // ─── EmailJS INIT ───
    // IMPORTANT: Replace with your actual EmailJS credentials
    // Sign up free at emailjs.com, connect Hostinger SMTP
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_stoxvera'
    const EMAILJS_TEMPLATE_LEAD = 'YOUR_TEMPLATE_ID_LEAD'; // e.g. 'template_lead'
    const EMAILJS_TEMPLATE_KYC = 'YOUR_TEMPLATE_ID_KYC';  // e.g. 'template_kyc'
    const EMAILJS_TEMPLATE_CONTACT = 'YOUR_TEMPLATE_ID_CT'; // e.g. 'template_contact'
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // from EmailJS dashboard

    (function () {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    })();

    // ─── LOADING SCREEN ───
    window.addEventListener('load', () => {
      setTimeout(() => {
        const ls = document.getElementById('loadingScreen');
        ls.style.opacity = '0';
        setTimeout(() => ls.style.display = 'none', 600);
      }, 1800);
    });

    // ─── PAGE NAVIGATION ───
    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + id).classList.add('active');
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const navEl = document.getElementById('nav-' + id);
      if (navEl) navEl.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ─── HAMBURGER ───
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('open');
    }

    // ─── TICKER ───
    const tickerData = [
      { name: 'NIFTY 50', val: '22,350.50', chg: '+185.30', pct: '+0.84%', up: true },
      { name: 'SENSEX', val: '73,651.35', chg: '+612.45', pct: '+0.84%', up: true },
      { name: 'BANKNIFTY', val: '48,920.15', chg: '-124.80', pct: '-0.25%', up: false },
      { name: 'NIFTY IT', val: '33,450.60', chg: '+320.10', pct: '+0.97%', up: true },
      { name: 'NIFTY AUTO', val: '19,850.75', chg: '+95.25', pct: '+0.48%', up: true },
      { name: 'NIFTY PHARMA', val: '16,220.40', chg: '-45.80', pct: '-0.28%', up: false },
      { name: 'GOLD', val: '₹72,350/10g', chg: '+280', pct: '+0.39%', up: true },
      { name: 'CRUDE OIL', val: '$82.50', chg: '-0.65', pct: '-0.78%', up: false },
    ];
    const track = document.getElementById('tickerTrack');
    // Duplicate for seamless loop
    [...tickerData, ...tickerData].forEach(item => {
      const el = document.createElement('span');
      el.className = 'ticker-item';
      el.innerHTML = `<span class="ticker-name">${item.name}</span><span class="ticker-val">${item.val}</span><span class="ticker-chg ${item.up ? 'up' : 'dn'}">${item.up ? '▲' : '▼'} ${item.chg} (${item.pct})</span>`;
      track.appendChild(el);
    });

    // ─── MARKET CARDS ───
    const markets = [
      { name: 'NIFTY 50', val: '22,350', chg: '+185 (+0.84%)', up: true },
      { name: 'SENSEX', val: '73,651', chg: '+612 (+0.84%)', up: true },
      { name: 'BANKNIFTY', val: '48,920', chg: '-124 (-0.25%)', up: false },
      { name: 'NIFTY IT', val: '33,450', chg: '+320 (+0.97%)', up: true },
      { name: 'NIFTY AUTO', val: '19,850', chg: '+95 (+0.48%)', up: true },
      { name: 'GOLD', val: '₹72,350', chg: '+280 (+0.39%)', up: true },
    ];
    const mg = document.getElementById('marketGrid');
    markets.forEach(m => {
      const pts = Array.from({ length: 20 }, (_, i) => {
        const y = 25 + Math.random() * 20 * (m.up ? (1 - i / 20) : (i / 20));
        return `${i * 5.2},${y}`;
      }).join(' ');
      mg.innerHTML += `
    <div class="market-card">
      <div class="market-name">${m.name}</div>
      <div class="market-val">${m.val}</div>
      <div class="market-chg ${m.up ? 'up' : 'dn'}">${m.up ? '▲' : '▼'} ${m.chg}</div>
      <div class="mini-chart">
        <svg viewBox="0 0 104 50" preserveAspectRatio="none">
          <polyline points="${pts}" fill="none" stroke="${m.up ? '#00e676' : '#ff1744'}" stroke-width="2"/>
        </svg>
      </div>
    </div>`;
    });

    // ─── TESTIMONIALS ───
    const testis = [
      { text: "Stoxvera's research calls helped me grow my portfolio by 40% in 3 months. The accuracy is remarkable!", author: "Priya Sharma", role: "Equity Trader, Pune", stars: 5 },
      { text: "Finally a SEBI registered analyst I can trust. Every call comes with clear entry, target and stop loss.", author: "Arun Patel", role: "Options Trader, Ahmedabad", stars: 5 },
      { text: "The Platinum plan is absolutely worth every rupee. Dedicated manager and VIP tips are game-changing.", author: "Vikram Nair", role: "Investor, Bangalore", stars: 5 },
      { text: "24/7 support team is always available. They guided me through my first options trade perfectly.", author: "Sneha Joshi", role: "Beginner Trader, Nashik", stars: 5 },
      { text: "4:1 reward ratio strategy has completely transformed my trading approach. Highly recommended!", author: "Deepak Mehta", role: "Swing Trader, Surat", stars: 5 },
      { text: "Rajendra sir's 20+ years of experience shows in every single recommendation. Pure market expertise.", author: "Ritu Singh", role: "Day Trader, Delhi", stars: 5 },
    ];
    const tt = document.getElementById('testiTrack');
    [...testis, ...testis].forEach(t => {
      tt.innerHTML += `
    <div class="testi-card">
      <div class="testi-stars">${'⭐'.repeat(t.stars)}</div>
      <div class="testi-text">"${t.text}"</div>
      <div class="testi-author">${t.author}</div>
      <div class="testi-role">${t.role}</div>
    </div>`;
    });

    // ─── PARTICLES ───
    const pc = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
    left:${Math.random() * 100}%;
    top:${Math.random() * 100}%;
    --d:${6 + Math.random() * 8}s;
    --ty:${-20 - Math.random() * 60}px;
    --tx:${(Math.random() - 0.5) * 40}px;
    animation-delay:${Math.random() * 8}s;
    width:${1 + Math.random() * 3}px;
    height:${1 + Math.random() * 3}px;
  `;
      pc.appendChild(p);
    }

    // ─── FILE UPLOAD DISPLAY ───
    function showFile(input, labelId) {
      const label = document.getElementById(labelId);
      if (input.files && input.files[0]) {
        label.textContent = '✅ ' + input.files[0].name;
        label.style.color = 'var(--green)';
      }
    }

    // ─── COPY TEXT ───
    function copyText(txt) {
      navigator.clipboard.writeText(txt).then(() => {
        alert('Copied: ' + txt);
      });
    }

    // ─── LEAD FORM SUBMIT ───
    async function submitLead() {
      const name = document.getElementById('lead_name').value.trim();
      const email = document.getElementById('lead_email').value.trim();
      const mobile = document.getElementById('lead_mobile').value.trim();
      const city = document.getElementById('lead_city').value.trim();
      const capital = document.getElementById('lead_capital').value;
      const errEl = document.getElementById('leadError');

      if (!name || !email || !mobile || !capital) {
        errEl.textContent = '⚠️ Please fill all required fields.';
        errEl.style.display = 'block';
        return;
      }
      errEl.style.display = 'none';

      const btn = document.getElementById('leadBtn');
      btn.disabled = true;
      btn.textContent = '⏳ Sending...';

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_LEAD, {
          to_email: 'sales@stoxvera.in',
          from_name: name,
          from_email: email,
          mobile: mobile,
          city: city || 'Not provided',
          capital: capital,
          subject: '🔥 New Lead – Stoxvera',
          message: `New lead from homepage:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCity: ${city || 'N/A'}\nCapital: ${capital}`,
        });

        document.getElementById('leadFormBox').style.display = 'none';
        document.getElementById('leadSuccess').style.display = 'block';
        setTimeout(() => showPage('kyc'), 2500);
      } catch (err) {
        btn.disabled = false;
        btn.textContent = '👉 Get Started';
        errEl.textContent = '⚠️ Email service not configured yet. Please contact sales@stoxvera.in directly.';
        errEl.style.display = 'block';
        // Still redirect after 3 seconds
        setTimeout(() => showPage('kyc'), 3000);
      }
    }

    // ─── KYC SUBMIT ───
    async function submitKYC() {
      const name = document.getElementById('kyc_name').value.trim();
      const email = document.getElementById('kyc_email').value.trim();
      const mobile = document.getElementById('kyc_mobile').value.trim();
      const capital = document.getElementById('kyc_capital').value;
      const aadhar = document.getElementById('aadharFile').files[0];
      const errEl = document.getElementById('kycError');

      if (!name || !email || !mobile || !capital || !aadhar) {
        errEl.textContent = '⚠️ Please fill all required fields and upload Aadhaar card.';
        errEl.style.display = 'block';
        return;
      }
      errEl.style.display = 'none';

      const btn = document.getElementById('kycBtn');
      btn.disabled = true;
      btn.textContent = '⏳ Submitting KYC...';

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_KYC, {
          to_email: 'sales@stoxvera.in',
          from_name: name,
          from_email: email,
          mobile: mobile,
          capital: capital,
          subject: '📋 New KYC Submission – Stoxvera',
          message: `New KYC submission:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCapital: ${capital}\nAadhaar: ${aadhar.name}\nPAN: ${document.getElementById('panFile').files[0]?.name || 'Not uploaded'}`,
        });

        document.getElementById('kycFormBox').style.display = 'none';
        document.getElementById('kycSuccess').style.display = 'block';
        setTimeout(() => showPage('payment'), 2500);
      } catch (err) {
        btn.disabled = false;
        btn.textContent = '✅ Submit KYC & Proceed to Payment';
        errEl.textContent = '⚠️ Email service not configured yet. Redirecting to payment...';
        errEl.style.display = 'block';
        setTimeout(() => showPage('payment'), 3000);
      }
    }

    // ─── CONTACT SUBMIT ───
    async function submitContact() {
      const name = document.getElementById('ct_name').value.trim();
      const email = document.getElementById('ct_email').value.trim();
      const mobile = document.getElementById('ct_mobile').value.trim();
      const message = document.getElementById('ct_message').value.trim();
      const errEl = document.getElementById('ctError');

      if (!name || !email || !message) {
        errEl.textContent = '⚠️ Please fill name, email and message.';
        errEl.style.display = 'block';
        return;
      }
      errEl.style.display = 'none';

      const btn = document.getElementById('ctBtn');
      btn.disabled = true;
      btn.textContent = '⏳ Sending...';

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT, {
          to_email: 'sales@stoxvera.in',
          from_name: name,
          from_email: email,
          mobile: mobile || 'Not provided',
          subject: '📞 Contact Form – Stoxvera',
          message: `Contact form query:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile || 'N/A'}\n\nMessage:\n${message}`,
        });

        document.getElementById('contactFormBox').style.display = 'none';
        document.getElementById('ctSuccess').style.display = 'block';
      } catch (err) {
        btn.disabled = false;
        btn.textContent = '📤 Send Message';
        errEl.textContent = '⚠️ Email not configured yet. Please email sales@stoxvera.in directly.';
        errEl.style.display = 'block';
      }
    }

    // ─── LIVE MARKET ANIMATION ───
    function animateMarkets() {
      const cards = document.querySelectorAll('.market-val');
      cards.forEach(card => {
        const current = parseFloat(card.textContent.replace(/[₹,]/g, ''));
        const change = (Math.random() - 0.5) * 20;
        const prefix = card.textContent.includes('₹') ? '₹' : '';
        card.textContent = prefix + (current + change).toLocaleString('en-IN', { maximumFractionDigits: 2 });
      });
    }
    setInterval(animateMarkets, 3000);

    emailjs.init("PASTE_PUBLIC_KEY_HERE");

    document.getElementById("consultationForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.send(
          "service_o4aalol",
          "template_myccng2",
          {
            full_name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            city: document.getElementById("city").value,
            capital: document.getElementById("capital").value
          }
        )
          .then(function () {
            alert("Form Submitted Successfully");
            document.getElementById("consultationForm").reset();
          })
          .catch(function (error) {
            console.log(error);
            alert("Something went wrong");
          });
      });
