'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { useReveal } from '@/lib/useReveal'
import { useEffect, useState, useRef, useCallback } from 'react'
import ToolboxSection from '@/components/ToolboxSection'

/* -- Icon component ------------------------------------------------ */
function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
    chart: <><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-12" /></>,
    search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
    check: <path d="M5 13l4 4L19 7" />,
    zap: <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
    arrow: <><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
    trending: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></>,
    send: <><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></>,
    building: <><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9h1" /><path d="M9 13h1" /><path d="M9 17h1" /></>,
    tool: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></>,
    chat: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons.check}
    </svg>
  )
}

/* -- Rotating words for hero --------------------------------------- */
function RotatingWord() {
  const { tArray } = useTranslation()
  const words = tArray('hero.rotatingWords')
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className="rotating-word-container">
      <span className={`rotating-word-pill ${isAnimating ? 'rotating-out' : 'rotating-in'}`}>
        {words[index]}
      </span>
    </span>
  )
}

/* -- Tech logos with real SVGs + text fallback ---------------------- */
const ALL_TECH_LOGOS: { name: string; slug?: string }[] = [
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Python', slug: 'python' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'Hetzner', slug: 'hetzner' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Twilio', slug: 'twilio' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Discord', slug: 'discord' },
  { name: 'Sentry', slug: 'sentry' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Linear', slug: 'linear' },
  { name: 'Figma', slug: 'figma' },
  { name: 'ElevenLabs', slug: 'elevenlabs' },
  { name: 'Google Analytics', slug: 'googleanalytics' },
  { name: 'Prisma', slug: 'prisma' },
  { name: 'Semrush', slug: 'semrush' },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'AWS' },
  { name: 'GitLab' },
  { name: 'Mollie' },
  { name: 'Framer' },
  { name: 'OpenRouter' },
  { name: 'LangChain' },
  { name: 'Qdrant' },
]

function TechLogo({ name, slug }: { name: string; slug?: string }) {
  return (
    <span className="tech-logo-item">
      {slug ? (
        <>
          <img
            src={`/logos/${slug}.svg`}
            alt={name}
            className="marquee-logo"
            width={20}
            height={20}
          />
          <span className="tech-logo-text">{name}</span>
        </>
      ) : (
        <span className="tech-logo-text">{name}</span>
      )}
    </span>
  )
}

/* -- Notification Feed --------------------------------------------- */
const NOTIFICATION_ICONS = ['chat', 'check', 'shield', 'zap', 'users', 'tool', 'chart', 'code']
const NOTIFICATION_COLORS = ['#2563eb', '#059669', '#d97757', '#8b5cf6', '#6366f1', '#059669', '#2563eb', '#2563eb']

function NotificationFeed() {
  const { t } = useTranslation()
  const [visibleStart, setVisibleStart] = useState(0)
  const VISIBLE_COUNT = 4

  const notifications = NOTIFICATION_ICONS.map((icon, i) => ({
    icon,
    agent: t(`notifications.items.${i}.agent`),
    text: t(`notifications.items.${i}.text`),
    time: t(`notifications.items.${i}.time`),
    color: NOTIFICATION_COLORS[i],
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) => (prev + 1) % notifications.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [notifications.length])

  const getVisibleNotifications = () => {
    const items = []
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const idx = (visibleStart + i) % notifications.length
      items.push({ ...notifications[idx], key: `${visibleStart}-${i}` })
    }
    return items
  }

  return (
    <div className="notification-feed">
      <div className="notification-feed-header">
        <span className="notification-feed-dot" />
        {t('notifications.liveActivity')}
      </div>
      <div className="notification-feed-list">
        {getVisibleNotifications().map((n, i) => (
          <div
            key={n.key}
            className="notification-card"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <img src={AGENTS[n.agent]?.avatar || ""} alt={n.agent} className="agent-avatar-small" />
            <span className="notification-agent">{n.agent}</span>
            <span className="notification-text">{n.text}</span>
            <span className="notification-time">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


/* -- Counter animation for stats ----------------------------------- */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepValue = target / steps
          const stepTime = duration / steps
          let current = 0
          const timer = setInterval(() => {
            current += stepValue
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, stepTime)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* -- Process icons ------------------------------------------------- */
const PROCESS_ICONS = ['send', 'cpu', 'check']

/* -- Agent avatars ------------------------------------------------- */
const AGENTS: Record<string, { avatar: string; color: string }> = {
  Sam: { avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/sam-002/avatar.png', color: '#2563eb' },
  Jessica: { avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/jessica-004/avatar.png', color: '#059669' },
  Max: { avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/max-001/avatar.png', color: '#d97757' },
  Levi: { avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/levi-005/avatar.png', color: '#8b5cf6' },
  Alex: { avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/alex-006/avatar.png', color: '#6366f1' },
};

const agentTools: Record<string, string[]> = {
  Sam: ['github', 'docker', 'postgresql'],
  Jessica: ['googleanalytics', 'mailchimp', 'hubspot'],
  Max: ['linear', 'slack', 'figma'],
  Levi: ['react', 'typescript', 'vercel'],
  Alex: ['cloudflare', 'sentry', 'snyk'],
};
/* -- Dashboard Scene: scripted animation loop ---------------------- */
type SceneStep = 
  | 'task-appear' | 'sam-claim' | 'progress-fill' | 'task-complete'
  | 'jessica-message' | 'doc-fly' | 'max-approve'
  | 'levi-build' | 'deploy-progress' | 'deploy-live'
  | 'alex-scan' | 'scan-passed' | 'jessica-outreach' | 'max-review'
  | 'fade-reset' | 'reset' | 'idle';

const SCENE_TIMELINE: { time: number; event: SceneStep }[] = [
  // Phase 1: Task arrives and gets claimed
  { time: 0, event: 'task-appear' },
  { time: 1500, event: 'sam-claim' },
  { time: 3500, event: 'progress-fill' },
  { time: 6000, event: 'task-complete' },
  // Phase 2: Communication between agents
  { time: 8000, event: 'jessica-message' },
  { time: 10000, event: 'doc-fly' },
  { time: 11500, event: 'max-approve' },
  // Phase 3: Deploy sequence
  { time: 14000, event: 'levi-build' },
  { time: 16500, event: 'deploy-progress' },
  { time: 19000, event: 'deploy-live' },
  // Phase 4: Multi-agent collaboration
  { time: 22000, event: 'alex-scan' },
  { time: 24500, event: 'scan-passed' },
  { time: 27000, event: 'jessica-outreach' },
  { time: 31000, event: 'max-review' },
  // Reset
  { time: 34000, event: 'fade-reset' },
];

const SCENE_STATUS_MESSAGES: Record<string, string> = {
  'task-appear': 'New task incoming...',
  'sam-claim': 'Sam claimed the task',
  'progress-fill': 'Working on it...',
  'task-complete': 'Task completed!',
  'jessica-message': 'Jessica has an update',
  'doc-fly': 'Sharing report with Max',
  'max-approve': 'Max approved',
  'levi-build': 'Levi is building...',
  'deploy-progress': 'Deploying to production...',
  'deploy-live': 'Successfully deployed!',
  'alex-scan': 'Alex running security check...',
  'scan-passed': 'All checks passed',
  'jessica-outreach': 'Jessica sending outreach...',
  'max-review': 'Max reviewing work',
  'fade-reset': '',
  'reset': '',
};

function AgentNode({ name, active, avatar }: { name: string; active: boolean; avatar: string }) {
  return (
    <div className={`scene-agent ${active ? 'scene-agent-active' : ''}`}>
      <img src={avatar} alt={name} className="scene-agent-avatar" />
      <span className="scene-agent-name">{name}</span>
      {active && <div className="scene-agent-pulse" />}
    </div>
  );
}

function EventCard({ visible, type, children }: { visible: boolean; type: string; children: React.ReactNode }) {
  return (
    <div className={`scene-event scene-event-${type} ${visible ? 'scene-event-visible' : ''}`}>
      <div className="scene-event-content">
        {type === 'success' && <span className="scene-check">&#10003;</span>}
        {type === 'security' && <span className="scene-shield-icon">&#128737;&#65039;</span>}
        {type === 'deploy' && <span className="scene-rocket">&#128640;</span>}
        {children}
      </div>
    </div>
  );
}

function OutreachCounter({ active }: { active: boolean }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (active) {
      setCount(0);
      intervalRef.current = setInterval(() => {
        setCount(prev => {
          if (prev >= 24) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 24;
          }
          return prev + 1;
        });
      }, 140);
    } else {
      setCount(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active]);

  if (!active) return null;
  return <span>{count} emails sent</span>;
}

function DashboardScene() {
  const [step, setStep] = useState<SceneStep>('idle');

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let loopTimeout: NodeJS.Timeout;

    function runTimeline() {
      timeouts = [];
      SCENE_TIMELINE.forEach(({ time, event }) => {
        timeouts.push(setTimeout(() => setStep(event), time));
      });
      loopTimeout = setTimeout(() => {
        setStep('reset');
        setTimeout(() => {
          setStep('idle');
          runTimeline();
        }, 500);
      }, 37000);
    }

    runTimeline();
    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(loopTimeout);
    };
  }, []);

  const isActive = (events: SceneStep[]) => events.includes(step);

  return (
    <div className="dashboard-scene">
      <div className="scene-stage">
        <AgentNode name="Sam" active={isActive(['sam-claim', 'progress-fill', 'task-complete'])} avatar={AGENTS.Sam.avatar} />
        <AgentNode name="Jessica" active={isActive(['jessica-message', 'doc-fly', 'jessica-outreach'])} avatar={AGENTS.Jessica.avatar} />
        <AgentNode name="Max" active={isActive(['max-approve', 'max-review'])} avatar={AGENTS.Max.avatar} />
        <AgentNode name="Levi" active={isActive(['levi-build', 'deploy-progress', 'deploy-live'])} avatar={AGENTS.Levi.avatar} />
        <AgentNode name="Alex" active={isActive(['alex-scan', 'scan-passed'])} avatar={AGENTS.Alex.avatar} />

        {/* Phase 1: Task */}
        <EventCard visible={step === 'task-appear' || step === 'sam-claim'} type="task">
          Deploy API v2.4
        </EventCard>
        <EventCard visible={step === 'progress-fill'} type="progress">
          <div className="mini-progress"><div className="mini-progress-fill" /></div>
        </EventCard>
        <EventCard visible={step === 'task-complete'} type="success">
          Completed
        </EventCard>

        {/* Phase 2: Communication */}
        <EventCard visible={step === 'jessica-message'} type="chat">
          Campaign report ready
        </EventCard>
        <EventCard visible={step === 'doc-fly'} type="chat">
          <span className="scene-doc-icon">&#128196;</span> Sending to Max...
        </EventCard>
        <EventCard visible={step === 'max-approve'} type="success">
          <span>&#128077;</span> +1 Report
        </EventCard>

        {/* Phase 3: Deploy */}
        <EventCard visible={step === 'levi-build'} type="deploy">
          Building...
        </EventCard>
        <EventCard visible={step === 'deploy-progress'} type="deploy">
          <span className="scene-rocket">&#128640;</span> Deploying...
          <div className="mini-progress"><div className="mini-progress-fill" /></div>
        </EventCard>
        <EventCard visible={step === 'deploy-live'} type="success">
          Live on production
          <span className="scene-confetti">&#10024;</span>
        </EventCard>

        {/* Phase 4: Multi-agent */}
        <EventCard visible={step === 'alex-scan'} type="security">
          Scanning...
        </EventCard>
        <EventCard visible={step === 'scan-passed'} type="success">
          Security: Passed
        </EventCard>
        <EventCard visible={step === 'jessica-outreach'} type="chat">
          <OutreachCounter active={step === 'jessica-outreach'} />
        </EventCard>
        <EventCard visible={step === 'max-review'} type="success">
          All work reviewed &#10003;
        </EventCard>
      </div>

      <div className="scene-status">
        <div className="scene-status-line">
          <span className="scene-status-dot" />
          <span>{SCENE_STATUS_MESSAGES[step] || 'Agents are working...'}  </span>
        </div>
      </div>
    </div>
  );
}


/* -- Live Activity Feed ------------------------------------------- */
function LiveFeed({ activeAgent }: { activeAgent: string }) {
  const allEvents = [
    { agent: 'Sam', text: 'Deployed API v2.4 to production' },
    { agent: 'Jessica', text: 'Qualified new lead: TechStartup BV' },
    { agent: 'Max', text: 'Approved DNS change request' },
    { agent: 'Levi', text: 'Pushed 12 commits to frontend' },
    { agent: 'Alex', text: 'Security scan completed: all clear' },
    { agent: 'Sam', text: 'Created database migration #47' },
    { agent: 'Jessica', text: 'Published blog post: AI in 2026' },
    { agent: 'Max', text: 'Reviewed 8 pull requests' },
    { agent: 'Levi', text: 'Optimized bundle size by 23%' },
    { agent: 'Alex', text: 'Updated SSL certificates' },
    { agent: 'Sam', text: 'Fixed authentication bug in /api/auth' },
    { agent: 'Jessica', text: 'Sent 156 outreach emails' },
    { agent: 'Max', text: 'Created project brief for new client' },
    { agent: 'Levi', text: 'Deployed website update to staging' },
    { agent: 'Alex', text: 'Patched 3 vulnerable dependencies' },
    { agent: 'Sam', text: 'Analyzed competitor pricing data' },
  ];

  const VISIBLE = 6;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % allEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visible = [];
  for (let i = 0; i < VISIBLE; i++) {
    visible.push(allEvents[(startIndex + i) % allEvents.length]);
  }

  return (
    <div className="live-feed">
      <div className="live-feed-header">
        <span className="live-feed-dot" />
        <span className="live-feed-title">Live Activity</span>
      </div>
      <div className="live-feed-items">
        {visible.map((event, i) => (
          <div
            key={`${startIndex}-${i}`}
            className="live-feed-item"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img
              src={AGENTS[event.agent]?.avatar}
              alt={event.agent}
              className="live-feed-avatar"
            />
            <div className="live-feed-content">
              <span className="live-feed-agent">{event.agent}</span>
              <span className="live-feed-text">{event.text}</span>
            </div>
            <span className="live-feed-time">{i === 0 ? 'now' : `${(i+1)*2}m`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -- Dashboard Toast Notification --------------------------------- */
function DashToast({ activeAgent }: { activeAgent: string }) {
  const [toast, setToast] = useState<{agent:string,text:string}|null>(null);

  const toasts: Record<string, string> = {
    Sam: 'Task completed: Deploy API v2.4',
    Jessica: 'New lead qualified',
    Max: 'Approval processed',
    Levi: 'Build successful',
    Alex: 'Security check passed',
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setToast({ agent: activeAgent, text: toasts[activeAgent] || '' });
    }, 2500);
    const hideTimer = setTimeout(() => {
      setToast(null);
    }, 6500);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, [activeAgent]);

  if (!toast) return null;

  return (
    <div className="dash-toast" key={toast.agent + toast.text}>
      <img src={AGENTS[toast.agent]?.avatar} alt="" className="dash-toast-avatar" />
      <div>
        <div className="dash-toast-agent">{toast.agent}</div>
        <div className="dash-toast-text">{toast.text}</div>
      </div>
    </div>
  );
}

/* -- Chat Typing Animation ---------------------------------------- */
function ChatTyping({ activeAgent }: { activeAgent: string }) {
  const [state, setState] = useState<'idle'|'typing'|'response'>('idle');
  const [response, setResponse] = useState('');

  const responses: Record<string, string> = {
    Sam: 'API v2.4 deployed successfully. All tests passing.',
    Jessica: 'Lead score updated. Following up tomorrow.',
    Max: 'Sprint velocity looks good. On track for deadline.',
    Levi: 'Bundle reduced to 142KB. Performance improved.',
    Alex: 'No vulnerabilities found. All dependencies up to date.',
  };

  useEffect(() => {
    setState('idle');
    const typingTimer = setTimeout(() => setState('typing'), 4000);
    const responseTimer = setTimeout(() => {
      setState('response');
      setResponse(responses[activeAgent] || '');
    }, 5500);
    const clearTimer = setTimeout(() => setState('idle'), 7000);
    return () => { clearTimeout(typingTimer); clearTimeout(responseTimer); clearTimeout(clearTimer); };
  }, [activeAgent]);

  return (
    <div className="dash-chat">
      {state === 'response' && (
        <div className="dash-chat-response">
          <img src={AGENTS[activeAgent]?.avatar} alt="" className="dash-chat-resp-avatar" />
          <div className="dash-chat-resp-bubble">{response}</div>
        </div>
      )}
      <div className="dash-chat-input">
        <input
          type="text"
          placeholder={state === 'typing' ? `${activeAgent} is typing...` : 'Ask your agents anything...'}
          readOnly
          className={`dash-chat-field ${state === 'typing' ? 'dash-chat-typing' : ''}`}
        />
        <select className="dash-chat-agent-select" disabled>
          <option>{activeAgent}</option>
        </select>
        <button className="dash-chat-send">Send</button>
      </div>
    </div>
  );
}

/* -- Client logos -------------------------------------------------- */
const CLIENTS: { name: string; logo?: string; hasLogo: boolean }[] = [
  { name: 'KLM', logo: '/logos/klm.svg', hasLogo: true },
  { name: 'NS', logo: '/logos/ns.svg', hasLogo: true },
  { name: 'Qarin', hasLogo: false },
  { name: 'Fuse', hasLogo: false },
  { name: 'Eye Wish', hasLogo: false },
  { name: 'Ultimate Rentals', hasLogo: false },
  { name: 'Gratisverhuizen', hasLogo: false },
  { name: 'Jaro Groep', hasLogo: false },
  { name: 'Propty', hasLogo: false },
  { name: 'Autoranq', hasLogo: false },
  { name: 'Webgroeiers', hasLogo: false },
];

export default function Home() {
  const { t, tArray } = useTranslation()
  const revealRef = useReveal()

  /* Rotating words for full-width hero */
  const words = tArray('hero.rotatingWords')
  const [wordIndex, setWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const currentWord = words[wordIndex] || ''

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  /* Scroll-based tilt for hero dashboard */
  // tilt removed

  // scroll tilt removed

  /* Parallax-lite on the hero slideshow */
  const [heroParallax, setHeroParallax] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setHeroParallax(window.scrollY * 0.15);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  

  /* Task counter that ticks up */
  const [taskCount, setTaskCount] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaskCount(prev => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  /* Active agent rotation */
  const [activeAgent, setActiveAgent] = useState('Sam');
  useEffect(() => {
    const agents = ['Sam', 'Jessica', 'Max', 'Levi', 'Alex'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % agents.length;
      setActiveAgent(agents[i]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);


  /* KPI values that animate with agent activity */
  const [kpis, setKpis] = useState({
    revenue: 47250,
    tasks: 847,
    queued: 12,
    docs: 8,
    approvals: 3,
  });

  /* Update KPIs when active agent changes */
  useEffect(() => {
    const timer = setTimeout(() => {
      setKpis(prev => {
        switch (activeAgent) {
          case 'Sam': return { ...prev, tasks: prev.tasks + 1 };
          case 'Jessica': return { ...prev, revenue: prev.revenue + Math.floor(Math.random() * 500 + 100) };
          case 'Max': return { ...prev, approvals: Math.max(0, prev.approvals - 1) };
          case 'Levi': return { ...prev, tasks: prev.tasks + 1 };
          case 'Alex': return prev;
          default: return prev;
        }
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeAgent]);

  /* Active agent task descriptions */
  const agentActions: Record<string, string> = {
    Sam: 'Deploying API v2.4 to production...',
    Jessica: 'Qualifying leads from outreach campaign...',
    Max: 'Reviewing pull requests and approvals...',
    Levi: 'Optimizing frontend bundle size...',
    Alex: 'Running security vulnerability scan...',
  };
  const currentAction = agentActions[activeAgent] || '';

  /* Dashboard stat cards (translated) */
  const DASH_STATS = [
    { label: t('dashboard.stats.activeProjects'), value: '5', icon: 'cpu' },
    { label: t('dashboard.stats.deployments'), value: String(taskCount), icon: 'layers' },
    { label: t('dashboard.stats.uptime'), value: '99.9%', icon: 'shield' },
    { label: t('dashboard.stats.avgResponse'), value: t('dashboard.stats.avgResponse'), icon: 'clock' },
  ]

  /* Agent activity rows (translated) */
  const AGENT_ACTIVITY_COLORS = ['#22c55e', '#3b82f6', '#a855f7', '#f59e0b']
  const AGENT_ACTIVITY = [0, 1, 2, 3].map((i) => ({
    name: t(`dashboard.agentActivity.${i}.name`),
    task: t(`dashboard.agentActivity.${i}.task`),
    time: t(`dashboard.agentActivity.${i}.time`),
    color: AGENT_ACTIVITY_COLORS[i],
  }))

  /* Testimonials (translated) */
  const TESTIMONIALS = [0, 1, 2].map((i) => ({
    quote: t(`socialProof.testimonials.${i}.quote`),
    author: t(`socialProof.testimonials.${i}.author`),
    role: t(`socialProof.testimonials.${i}.role`),
    initials: t(`socialProof.testimonials.${i}.author`).split(' ').map((w: string) => w[0]).join(''),
  }))

  return (
    <>
      <Nav />

      <main ref={revealRef}>
        {/* HERO — Full-width video/slideshow with overlaid content */}
        <section className="hero-fullwidth">
          {/* Background: slideshow (swap for video when ready) */}
          <div className="hero-video-bg" style={{ transform: `translateY(${heroParallax}px)` }}>
            <div className="hero-slide hero-slide-1" />
            <div className="hero-slide hero-slide-2" />
            <div className="hero-slide hero-slide-3" />
            <div className="hero-slide hero-slide-4" />
            {/* Uncomment when real video is available:
            <video
              autoPlay muted loop playsInline
              className="hero-video-element"
              poster="/images/slide-city.jpg"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            */}
            <div className="hero-video-overlay" />
          </div>

          {/* Content overlaid */}
          <div className="hero-fullwidth-content">
            <div className="container-main">
              <h1 className="hero-fw-h1">
                <span className="hero-word-your">{t('hero.headlinePre')}</span>{' '}
                <span className="rotating-word-container">
                  <span className={`rotating-word-pill rotating-word-pill-light ${isAnimating ? 'rotating-out' : 'rotating-in'}`}>
                    {currentWord}
                  </span>
                </span>{' '}
                <span className="hero-rest">{t('hero.headlinePost')} {t('hero.headlineLine2')}</span>
              </h1>
              <p className="hero-fw-sub">{t('hero.subline')}</p>
              <div className="hero-fw-ctas">
                <Link href="/contact" className="hero-fw-btn-primary">{t('cta.primary')}</Link>
                <Link href="/diensten" className="hero-fw-btn-secondary">{t('hero.ctaSecondary')}</Link>
              </div>
              <p className="hero-fw-tagline">{t('hero.tagline')}</p>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS */}
        <section className="clients-strip">
          <div className="container-main" style={{textAlign:'center'}}>
            <p className="clients-label">{t('clients.label')}</p>
            <div className="clients-marquee-container">
              <div className="clients-marquee-track">
                {[...CLIENTS, ...CLIENTS].map((client, i) => (
                  <div key={i} className="client-item">
                    {client.hasLogo ? (
                      <img src={client.logo} alt={client.name} className="client-logo-img" />
                    ) : (
                      <span className="client-logo-text">{client.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider reveal" />

        {/* IMPACT — Stripe bento style */}
        <section className="section-py">
          <div className="container-main">
            <div style={{textAlign:'center', marginBottom:64}}>
              <p className="feature-eyebrow reveal">{t('impact.eyebrow')}</p>
              <h2 className="feature-h2 reveal reveal-delay-1" style={{textAlign:'center'}}>{t('impact.headline')}</h2>
            </div>

            <div className="impact-grid">
              {/* Large card: Software */}
              <div className="impact-card impact-card-lg reveal reveal-glow reveal-delay-1">
                <div className="impact-card-content">
                  <span className="impact-label">SOFTWARE</span>
                  <h3 className="impact-title">{t('impact.software.title')}</h3>
                  <p className="impact-desc">{t('impact.software.desc')}</p>
                </div>
                <div className="impact-visual" style={{
                  backgroundImage: 'url(/images/card-bg-dev.jpg)',
                  backgroundSize: 'cover',
                  borderRadius: 12,
                  padding: 20,
                  marginTop: 20,
                  minHeight: 180,
                }}>
                  <div style={{fontFamily:'monospace', fontSize:12, lineHeight:2, color:'#8898AA'}}>
                    <div><span style={{color:'#635BFF'}}>const</span> app = <span style={{color:'#80E0A7'}}>createApp</span>();</div>
                    <div><span style={{color:'#635BFF'}}>await</span> app.deploy();</div>
                    <div><span style={{color:'#80E0A7'}}>// Live in production</span></div>
                  </div>
                </div>
              </div>

              {/* Large card: Marketing */}
              <div className="impact-card impact-card-lg reveal reveal-glow reveal-delay-2">
                <div className="impact-card-content">
                  <span className="impact-label">MARKETING</span>
                  <h3 className="impact-title">{t('impact.marketing.title')}</h3>
                  <p className="impact-desc">{t('impact.marketing.desc')}</p>
                </div>
                <div className="impact-visual" style={{
                  backgroundImage: 'url(/images/card-bg-marketing.jpg)',
                  backgroundSize: 'cover',
                  borderRadius: 12,
                  padding: 20,
                  marginTop: 20,
                  minHeight: 180,
                }}>
                  <div style={{display:'flex', alignItems:'flex-end', gap:5, height:140}}>
                    {[35,55,45,70,50,85,65,95,75,110,80,120].map((h,i) => (
                      <div key={i} style={{flex:1, height:h*0.9, background:'linear-gradient(to top, #2563eb, #635BFF)', borderRadius:'3px 3px 0 0', opacity:0.5+i*0.04}} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Medium cards row */}
              <div className="impact-card impact-card-md reveal reveal-glow reveal-delay-1">
                <div className="impact-card-content">
                  <span className="impact-label">WEBSITES</span>
                  <h3 className="impact-title">{t('impact.websites.title')}</h3>
                  <p className="impact-desc">{t('impact.websites.desc')}</p>
                </div>
              </div>

              <div className="impact-card impact-card-md reveal reveal-glow reveal-delay-2">
                <div className="impact-card-content">
                  <span className="impact-label">SEO</span>
                  <h3 className="impact-title">{t('impact.seo.title')}</h3>
                  <p className="impact-desc">{t('impact.seo.desc')}</p>
                </div>
              </div>

              <div className="impact-card impact-card-md reveal reveal-glow reveal-delay-3">
                <div className="impact-card-content">
                  <span className="impact-label">RECRUITMENT</span>
                  <h3 className="impact-title">{t('impact.recruitment.title')}</h3>
                  <p className="impact-desc">{t('impact.recruitment.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider reveal" />

        {/* TOOLBOX */}
        <ToolboxSection />

        {/* SERVICE PACKAGES */}
        <section className="section-py">
          <div className="container-main">
            <div style={{textAlign:'center', marginBottom:64}}>
              <p className="feature-eyebrow reveal">{t('packages.eyebrow')}</p>
              <h2 className="feature-h2 reveal reveal-delay-1" style={{textAlign:'center'}}>{t('packages.headline')}</h2>
              <p className="feature-sub reveal reveal-delay-2" style={{textAlign:'center', maxWidth:600, margin:'0 auto'}}>{t('packages.subline')}</p>
            </div>

            <div className="packages-grid">
              {/* Package 1: Website */}
              <div className="package-card reveal reveal-glow reveal-delay-1">
                <div className="package-icon">&#127760;</div>
                <h3 className="package-title">{t('packages.website.title')}</h3>
                <p className="package-desc">{t('packages.website.desc')}</p>
                <ul className="package-features">
                  <li>Responsive design</li>
                  <li>CMS integratie</li>
                  <li>SEO geoptimaliseerd</li>
                  <li>Analytics dashboard</li>
                  <li>SSL & hosting</li>
                </ul>
                <div className="package-price">
                  <span className="package-from">{t('packages.from')}</span>
                  <span className="package-amount">&euro;2.500</span>
                </div>
                <a href="/contact" className="package-cta">{t('packages.cta')}</a>
              </div>

              {/* Package 2: Webshop */}
              <div className="package-card package-card-featured reveal reveal-glow reveal-delay-2">
                <div className="package-badge">{t('packages.popular')}</div>
                <div className="package-icon">&#128722;</div>
                <h3 className="package-title">{t('packages.webshop.title')}</h3>
                <p className="package-desc">{t('packages.webshop.desc')}</p>
                <ul className="package-features">
                  <li>Product catalogus</li>
                  <li>Betaalintegratie (iDEAL, Stripe)</li>
                  <li>Voorraadbeheer</li>
                  <li>Order management</li>
                  <li>Klantportaal</li>
                  <li>Email automatisering</li>
                </ul>
                <div className="package-price">
                  <span className="package-from">{t('packages.from')}</span>
                  <span className="package-amount">&euro;5.000</span>
                </div>
                <a href="/contact" className="package-cta">{t('packages.cta')}</a>
              </div>

              {/* Package 3: Software op maat */}
              <div className="package-card reveal reveal-glow reveal-delay-3">
                <div className="package-icon">&#9889;</div>
                <h3 className="package-title">{t('packages.custom.title')}</h3>
                <p className="package-desc">{t('packages.custom.desc')}</p>
                <ul className="package-features">
                  <li>API development</li>
                  <li>Database architectuur</li>
                  <li>Admin dashboard</li>
                  <li>Gebruikersportaal</li>
                  <li>CI/CD pipeline</li>
                  <li>24/7 monitoring</li>
                </ul>
                <div className="package-price">
                  <span className="package-from">{t('packages.from')}</span>
                  <span className="package-amount">&euro;10.000</span>
                </div>
                <a href="/contact" className="package-cta">{t('packages.cta')}</a>
              </div>

              {/* Package 4: Marketing */}
              <div className="package-card reveal reveal-glow reveal-delay-4">
                <div className="package-icon">&#128200;</div>
                <h3 className="package-title">{t('packages.marketing.title')}</h3>
                <p className="package-desc">{t('packages.marketing.desc')}</p>
                <ul className="package-features">
                  <li>SEO strategie & uitvoering</li>
                  <li>Content marketing</li>
                  <li>Social media management</li>
                  <li>Google Ads campagnes</li>
                  <li>Maandelijkse rapportage</li>
                </ul>
                <div className="package-price">
                  <span className="package-from">{t('packages.from')}</span>
                  <span className="package-amount">&euro;1.500<span style={{fontSize:'0.6em',fontWeight:400}}>/mnd</span></span>
                </div>
                <a href="/contact" className="package-cta">{t('packages.cta')}</a>
              </div>
            </div>

            <p className="packages-note reveal" style={{textAlign:'center', marginTop:32, fontSize:'0.875rem', color:'var(--text-tertiary)'}}>
              {t('packages.note')}
            </p>
          </div>
        </section>

        <div className="section-divider reveal" />

        {/* SOCIAL PROOF */}
        <section className="section-py">
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p className="feature-eyebrow reveal" style={{ textAlign: 'center' }}>
                {t('socialProof.eyebrow')}
              </p>
              <h2 className="feature-h2 reveal reveal-delay-1" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
                {t('socialProof.headline')}
              </h2>
            </div>


            {/* Review badges */}
            <div className="review-badges reveal reveal-delay-2">
              <div className="review-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <div className="review-stars">
                  {'*****'.split('').map((_, i) => <span key={i} className="star-gold">&#9733;</span>)}
                </div>
                <span className="review-text">{t('socialProof.googleReview')}</span>
              </div>
              <div className="review-badge">
                <img src="/logos/trustpilot.svg" alt="Trustpilot" style={{width:18, height:18, filter:'none'}} />
                <div className="review-stars">
                  {'*****'.split('').map((_, i) => <span key={i} className="star-gold">&#9733;</span>)}
                </div>
                <span className="review-text">{t('socialProof.trustpilotReview')}</span>
              </div>
            </div>

            {/* Testimonial cards */}
            <div className="testimonials-grid">
              {TESTIMONIALS.map((item, i) => (
                <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                  <div className="testimonial-stars">
                    {'*****'.split('').map((_, j) => <span key={j} className="star-gold">&#9733;</span>)}
                  </div>
                  <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{item.initials}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span className="testimonial-role">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider reveal" />

        {/* PREMIUM CTA BAND */}
        <section className="cta-band">
          <div className="cta-band-bg">
            <div className="cta-mesh" />
          </div>
          <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
            <div className="cta-band-content reveal">
              <div className="cta-band-left">
                <p className="cta-band-eyebrow">{t('ctaBand.eyebrow')}</p>
                <h2 className="cta-band-headline">{t('ctaBand.headline')}</h2>
                <p className="cta-band-sub">{t('ctaBand.subline')}</p>
                <div className="cta-band-actions">
                  <a href="/contact" className="cta-band-primary">{t('ctaBand.primary')}</a>
                  <a href="/inzichten" className="cta-band-secondary">{t('ctaBand.secondary')}</a>
                </div>
                <div className="cta-band-trust">
                  <span className="cta-band-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                    {t('ctaBand.trust1')}
                  </span>
                  <span className="cta-band-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                    {t('ctaBand.trust2')}
                  </span>
                  <span className="cta-band-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                    {t('ctaBand.trust3')}
                  </span>
                </div>
              </div>
              <div className="cta-band-right">
                <div className="cta-band-card">
                  <div className="cta-card-stat">
                    <span className="cta-card-number">10x</span>
                    <span className="cta-card-label">{t('ctaBand.stat1')}</span>
                  </div>
                  <div className="cta-card-divider" />
                  <div className="cta-card-stat">
                    <span className="cta-card-number">90%</span>
                    <span className="cta-card-label">{t('ctaBand.stat2')}</span>
                  </div>
                  <div className="cta-card-divider" />
                  <div className="cta-card-stat">
                    <span className="cta-card-number">24/7</span>
                    <span className="cta-card-label">{t('ctaBand.stat3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS & CASES */}
        <section className="section-py">
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p className="feature-eyebrow reveal" style={{ textAlign: 'center' }}>
                {t('blog.eyebrow')}
              </p>
              <h2 className="feature-h2 reveal reveal-delay-1" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
                {t('blog.headline')}
              </h2>
            </div>

            <div className="blog-grid">
              {[
                { image: '/images/article-case-study.png', link: '/cases' },
                { image: '/images/article-ai-agents.png', link: '/blog' },
                { image: '/images/article-marketing.png', link: '/blog' },
              ].map((article, i) => (
                <article key={i} className={`blog-card reveal reveal-delay-${i + 1}`}>
                  <div className="blog-card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={article.image} alt={t(`blog.articles.${i}.title`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="blog-category" style={{ position: 'absolute', top: 12, left: 12 }}>{t(`blog.articles.${i}.category`)}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{t(`blog.articles.${i}.title`)}</h3>
                    <p className="blog-card-desc">{t(`blog.articles.${i}.desc`)}</p>
                    <Link href={article.link} className="feature-link">
                      {t('blog.readMore')} <Icon name="arrow" size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py" style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 80 }}>
          <div className="container-main">
            <p className="reveal" style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
              {t('bottomCta.text')}
            </p>
            <a href="/contact" className="btn-primary reveal reveal-delay-1">{t('bottomCta.button')}</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
