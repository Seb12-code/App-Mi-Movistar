import { FormEvent, ReactNode, useState } from 'react'

type Screen = 'home' | 'services' | 'support' | 'claims' | 'profile' | 'notifications'
type ActionId =
  | 'pay'
  | 'benefit'
  | 'mobile-detail'
  | 'add-service'
  | 'internet'
  | 'password'
  | 'security'
  | 'email'
  | 'phone-data'
  | 'packages'
  | 'line-settings'
type IconName =
  | 'home'
  | 'phone'
  | 'chat'
  | 'file'
  | 'user'
  | 'bell'
  | 'chevron'
  | 'arrow'
  | 'wifi'
  | 'card'
  | 'gift'
  | 'shield'
  | 'help'
  | 'send'
  | 'plus'
  | 'check'
  | 'lock'
  | 'edit'
  | 'settings'
  | 'logout'
  | 'headset'
  | 'eye'

function Icon({ name, size = 22, className = '' }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4M11 18h2" /></>,
    chat: <><path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 20 15Z" /><path d="M8 11h8M8 15h5" /></>,
    file: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <><path d="m15 18-6-6 6-6" /><path d="M9 12h12" /></>,
    wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20M6 15h4" /></>,
    gift: <><rect x="3" y="9" width="18" height="12" rx="2" /><path d="M12 9v12M3 13h18M12 9H8a2.5 2.5 0 1 1 2.2-3.7ZM12 9h4a2.5 2.5 0 1 0-2.2-3.7Z" /></>,
    shield: <><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z" /><path d="m9 12 2 2 4-4" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.7 2.7 0 1 1 4 2.4c-1 .6-1.5 1.1-1.5 2.1M12 17h.01" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    logout: <><path d="M10 17l5-5-5-5M15 12H3M14 3h6v18h-6" /></>,
    headset: <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h2v7H6a2 2 0 0 1-2-2ZM20 14a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2ZM16 19c0 2-1 3-4 3" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  }
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function MovistarLogo({ small = false }: { small?: boolean }) {
  return (
    <div className={`brand-logo ${small ? 'brand-logo--small' : ''}`} aria-label="Movistar">
      <svg viewBox="0 0 68 44" role="img"><path d="M7 10c5-7 12-1 18 4 3 3 6 2 9-1C42 5 46 2 52 3c8 2 10 11 7 20-3 10-10 18-19 17-7-1-10-7-16-5-8 3-15 3-19-3-5-7-3-16 2-22Z" fill="currentColor" /></svg>
      {!small && <span>movistar</span>}
    </div>
  )
}

const navItems: { id: Exclude<Screen, 'notifications'>; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Inicio', icon: 'home' },
  { id: 'services', label: 'Servicios', icon: 'phone' },
  { id: 'support', label: 'Atención', icon: 'chat' },
  { id: 'claims', label: 'Reclamos', icon: 'file' },
  { id: 'profile', label: 'Perfil', icon: 'user' },
]

function Header({ title, onNotifications, unread = true }: { title?: string; onNotifications: () => void; unread?: boolean }) {
  return (
    <header className="app-header">
      {title ? <h1>{title}</h1> : <MovistarLogo small />}
      <button className="icon-button" onClick={onNotifications} aria-label="Notificaciones">
        <Icon name="bell" size={21} />
        {unread && <span className="notification-dot" />}
      </button>
    </header>
  )
}

function BottomNav({ active, go }: { active: Screen; go: (screen: Screen) => void }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => go(item.id)}>
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(onLogin, 500)
  }
  return (
    <main className="login-screen">
      <div className="login-hero">
        <div className="login-orb orb-one" />
        <div className="login-orb orb-two" />
        <MovistarLogo />
        <div>
          <p>Bienvenido a</p>
          <h1>Mi Movistar</h1>
          <span>Todo lo que necesitas, en un solo lugar.</span>
        </div>
      </div>
      <form className="login-form" onSubmit={submit}>
        <div className="form-heading">
          <h2>Ingresa a tu cuenta</h2>
          <p>Gestiona tus servicios de forma fácil y segura.</p>
        </div>
        <label>
          Número de celular
          <div className="input-wrap">
            <span className="prefix">+51</span>
            <input type="tel" defaultValue="987 654 321" aria-label="Número de celular" />
          </div>
        </label>
        <label>
          Contraseña
          <div className="input-wrap">
            <input type={showPassword ? 'text' : 'password'} defaultValue="movistar123" aria-label="Contraseña" />
            <button type="button" className="field-action" onClick={() => setShowPassword(!showPassword)} aria-label="Mostrar contraseña"><Icon name="eye" size={19} /></button>
          </div>
        </label>
        <button type="button" className="text-link">¿Olvidaste tu contraseña?</button>
        <button className="primary-button" type="submit">{loading ? 'Ingresando…' : 'Ingresar'}</button>
        <p className="secure-note"><Icon name="shield" size={16} /> Tus datos están protegidos y cifrados</p>
      </form>
    </main>
  )
}

function Home({ go, openAction }: { go: (screen: Screen) => void; openAction: (action: ActionId) => void }) {
  return (
    <>
      <Header onNotifications={() => go('notifications')} />
      <div className="screen-content home-content">
        <section className="welcome-row">
          <div><p>¡Hola,</p><h1>María Fernanda!</h1><span>Qué bueno verte de nuevo.</span></div>
          <div className="avatar">MF</div>
        </section>
        <section className="plan-card">
          <div className="plan-top">
            <div><span>Plan móvil</span><h2>Movistar Ilimitado 69.90</h2><p>987 654 321</p></div>
            <span className="status-pill">Activo</span>
          </div>
          <div className="data-summary"><div><strong>31.8</strong><span> GB disponibles</span></div><b>40 GB</b></div>
          <div className="progress"><span style={{ width: '79.5%' }} /></div>
          <div className="plan-footer"><span>Renueva el 18 de junio</span><button onClick={() => go('services')}>Ver detalle <Icon name="chevron" size={15} /></button></div>
        </section>
        <section className="billing-card">
          <div className="billing-icon"><Icon name="file" /></div>
          <div><span>Recibo de junio</span><strong>S/ 69.90</strong><small>Vence el 22 de junio</small></div>
          <button className="small-primary" onClick={() => openAction('pay')}>Pagar ahora</button>
        </section>
        <div className="section-title"><h2>Accesos rápidos</h2></div>
        <section className="quick-grid">
          <button onClick={() => go('services')}><span><Icon name="wifi" /></span><b>Ver consumo</b></button>
          <button onClick={() => openAction('pay')}><span><Icon name="card" /></span><b>Pagar recibo</b></button>
          <button onClick={() => go('support')}><span><Icon name="chat" /></span><b>Ayuda virtual</b></button>
          <button onClick={() => go('claims')}><span><Icon name="file" /></span><b>Mis reclamos</b></button>
        </section>
        <section className="info-banner">
          <div className="info-icon"><Icon name="gift" /></div>
          <div><strong>¡Beneficio para ti!</strong><p>Disfruta 3 meses de Movistar TV App sin costo.</p><button onClick={() => openAction('benefit')}>Conocer más</button></div>
        </section>
      </div>
    </>
  )
}

function Services({ go, openAction }: { go: (screen: Screen) => void; openAction: (action: ActionId) => void }) {
  const [tab, setTab] = useState<'movil' | 'hogar'>('movil')
  return (
    <>
      <Header title="Mis servicios" onNotifications={() => go('notifications')} />
      <div className="screen-content">
        <div className="segmented"><button className={tab === 'movil' ? 'active' : ''} onClick={() => setTab('movil')}>Móvil</button><button className={tab === 'hogar' ? 'active' : ''} onClick={() => setTab('hogar')}>Hogar</button></div>
        {tab === 'movil' ? (
          <>
            <section className="service-card featured">
              <div className="service-heading"><div className="service-icon"><Icon name="phone" /></div><div><small>Línea principal</small><h2>987 654 321</h2></div><span className="status-pill">Activo</span></div>
              <div className="service-plan"><span>Tu plan</span><strong>Movistar Ilimitado</strong><b>S/ 69.90 <small>/ mes</small></b></div>
              <div className="consumption">
                <div className="donut"><div><strong>31.8</strong><span>GB</span></div></div>
                <div className="consumption-info"><h3>Datos móviles</h3><strong>31.8 GB de 40 GB</strong><p>Te quedan 12 días</p><div className="progress"><span style={{ width: '79.5%' }} /></div></div>
              </div>
              <div className="mini-stats"><div><Icon name="phone" size={18} /><span>Llamadas<strong>Ilimitadas</strong></span></div><div><Icon name="chat" size={18} /><span>SMS<strong>Ilimitados</strong></span></div></div>
              <button className="outline-button" onClick={() => openAction('mobile-detail')}>Ver detalle del servicio</button>
            </section>
            <button className="add-service" onClick={() => openAction('add-service')}><span><Icon name="plus" /></span><div><strong>Agregar otro servicio</strong><small>Vincula una línea o servicio hogar</small></div><Icon name="chevron" /></button>
          </>
        ) : (
          <section className="service-card">
            <div className="service-heading"><div className="service-icon"><Icon name="wifi" /></div><div><small>Internet Hogar</small><h2>Fibra Óptica 600 Mbps</h2></div><span className="status-pill">Activo</span></div>
            <p className="address">Av. Arequipa 2450, Lince, Lima</p>
            <div className="home-speed"><div><strong>600</strong><span>Mbps<br />Velocidad</span></div><div><strong>24/7</strong><span>Soporte<br />técnico</span></div></div>
            <button className="outline-button" onClick={() => openAction('internet')}>Gestionar mi internet</button>
          </section>
        )}
      </div>
    </>
  )
}

function Support({ go }: { go: (screen: Screen) => void }) {
  const [messages, setMessages] = useState<string[]>([])
  const [text, setText] = useState('')
  const send = (value: string) => {
    if (!value.trim()) return
    setMessages((m) => [...m, value.trim()])
    setText('')
  }
  return (
    <div className="chat-screen">
      <header className="chat-header"><div className="bot-avatar"><Icon name="headset" /></div><div><h1>Movi, tu asistente</h1><span><i /> En línea</span></div><button className="icon-button" onClick={() => go('home')}><Icon name="home" size={20} /></button></header>
      <div className="chat-body">
        <div className="day-label">Hoy</div>
        <div className="bot-message">¡Hola, María! Soy <strong>Movi</strong>, tu asistente virtual. Estoy aquí para ayudarte las 24 horas.<span>10:24 a. m.</span></div>
        <div className="bot-message">¿Qué necesitas hacer hoy?</div>
        {messages.map((message, i) => (
          <div className="message-group" key={`${message}-${i}`}>
            <div className="user-message">{message}<span>10:25 a. m. ✓✓</span></div>
            <div className="bot-message">Entendido. Consulté tu información en el sistema y puedo ayudarte con eso. ¿Deseas ver el detalle o hablar con un asesor?<span>Ahora</span></div>
          </div>
        ))}
        <div className="suggestions">
          {['Consultar mi saldo', 'Ver consumo de datos', 'Problemas con mi servicio', 'Estado de mi reclamo'].map((s) => <button key={s} onClick={() => send(s)}>{s}<Icon name="chevron" size={16} /></button>)}
        </div>
        <p className="ai-note"><Icon name="shield" size={14} /> Asistente con IA conectado a tu cuenta Movistar</p>
      </div>
      <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(text) }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe tu consulta..." />
        <button aria-label="Enviar"><Icon name="send" size={20} /></button>
      </form>
    </div>
  )
}

function Claims({ go }: { go: (screen: Screen) => void }) {
  const [creating, setCreating] = useState(false)
  const [success, setSuccess] = useState(false)
  const [reason, setReason] = useState('Problemas con mi servicio móvil')
  const [hasNewClaim, setHasNewClaim] = useState(false)
  const [claimDetail, setClaimDetail] = useState<'active' | 'new' | 'history-charge' | 'history-benefit' | null>(null)
  if (success) return (
    <>
      <Header title="Reclamo registrado" onNotifications={() => go('notifications')} unread={false} />
      <div className="success-screen">
        <div className="success-check"><Icon name="check" size={38} /></div>
        <h1>¡Listo, María!</h1>
        <p>Registramos tu reclamo correctamente. Te notificaremos sobre cualquier actualización.</p>
        <div className="tracking-code"><span>Código de seguimiento</span><strong>REC-2025-04892</strong><small>Registrado el 10 jun. 2025, 10:28 a. m.</small></div>
        <div className="timeline">
          <div className="done"><i><Icon name="check" size={14} /></i><span><strong>Reclamo recibido</strong><small>10 jun. · 10:28 a. m.</small></span></div>
          <div><i /><span><strong>En evaluación</strong><small>Tiempo estimado: 2 días hábiles</small></span></div>
          <div><i /><span><strong>Respuesta</strong></span></div>
        </div>
        <button className="primary-button" onClick={() => { setSuccess(false); setCreating(false) }}>Ver mis reclamos</button>
        <button className="text-link" onClick={() => go('home')}>Volver al inicio</button>
      </div>
    </>
  )
  if (creating) return (
    <>
      <header className="app-header title-with-back"><button className="icon-button" onClick={() => setCreating(false)}><Icon name="arrow" /></button><h1>Nuevo reclamo</h1><span /></header>
      <form className="screen-content claim-form" onSubmit={(e) => { e.preventDefault(); setHasNewClaim(true); setSuccess(true) }}>
        <div className="form-step"><span>1</span><div><strong>Cuéntanos qué pasó</strong><small>Te ayudaremos a resolverlo.</small></div></div>
        <label>Servicio relacionado<select><option>Línea móvil 987 654 321</option><option>Internet Hogar</option></select></label>
        <label>Motivo del reclamo<select value={reason} onChange={(e) => setReason(e.target.value)}><option>Problemas con mi servicio móvil</option><option>Cobro no reconocido</option><option>Facturación incorrecta</option><option>Calidad de atención</option></select></label>
        <label>Describe el problema<textarea placeholder="Cuéntanos todos los detalles para poder ayudarte..." maxLength={500} /><small className="counter">0 / 500</small></label>
        <div className="tip-box"><Icon name="help" size={20} /><p><strong>Tip</strong> Incluye fechas, montos o lugares relacionados con el problema.</p></div>
        <label className="upload-box"><Icon name="plus" /><strong>Adjuntar evidencia</strong><small>Foto o documento (máx. 10 MB)</small><input type="file" hidden /></label>
        <button className="primary-button" type="submit">Registrar reclamo</button>
        <p className="legal-note">Al continuar, confirmas que la información proporcionada es correcta.</p>
      </form>
    </>
  )
  return (
    <>
      <Header title="Reclamos y solicitudes" onNotifications={() => go('notifications')} />
      <div className="screen-content">
        <button className="new-claim" onClick={() => setCreating(true)}><span><Icon name="plus" /></span><div><strong>Registrar un reclamo</strong><small>Cuéntanos qué sucedió</small></div><Icon name="chevron" /></button>
        <div className="section-title"><h2>En seguimiento</h2><span>{hasNewClaim ? '2 activos' : '1 activo'}</span></div>
        {hasNewClaim && <article className="claim-card new-record">
          <div className="claim-top"><span className="received-pill">Recibido</span><small>REC-2025-04892</small></div>
          <h3>{reason}</h3><p>Registrado hoy, 10:28 a. m.</p>
          <div className="claim-progress"><i className="complete" /><i /><i /></div>
          <div className="claim-labels"><span>Recibido</span><span>Evaluación</span><span>Respuesta</span></div>
          <button onClick={() => setClaimDetail('new')}>Ver seguimiento <Icon name="chevron" size={17} /></button>
        </article>}
        <article className="claim-card">
          <div className="claim-top"><span className="warning-pill">En evaluación</span><small>REC-2025-04218</small></div>
          <h3>Intermitencia en internet móvil</h3><p>Registrado el 06 jun. 2025</p>
          <div className="claim-progress"><i className="complete" /><i className="complete" /><i /></div>
          <div className="claim-labels"><span>Recibido</span><span>Evaluación</span><span>Respuesta</span></div>
          <button onClick={() => setClaimDetail('active')}>Ver seguimiento <Icon name="chevron" size={17} /></button>
        </article>
        <div className="section-title"><h2>Historial</h2></div>
        <button className="history-card" onClick={() => setClaimDetail('history-charge')}><div className="history-icon"><Icon name="check" /></div><div><span className="resolved">Resuelto</span><h3>Cobro duplicado en recibo</h3><small>REC-2025-03106 · 18 may. 2025</small></div><Icon name="chevron" size={18} /></button>
        <button className="history-card" onClick={() => setClaimDetail('history-benefit')}><div className="history-icon"><Icon name="check" /></div><div><span className="resolved">Resuelto</span><h3>Activación de beneficio</h3><small>SOL-2025-02651 · 02 may. 2025</small></div><Icon name="chevron" size={18} /></button>
      </div>
      {claimDetail && <div className="action-overlay" onMouseDown={() => setClaimDetail(null)}>
        <section className="action-sheet claim-detail-sheet" onMouseDown={(e) => e.stopPropagation()}>
          <div className="sheet-handle" />
          <div className="sheet-title"><div><small>{claimDetail.startsWith('history') ? 'HISTORIAL' : 'SEGUIMIENTO EN LÍNEA'}</small><h2>Detalle del reclamo</h2></div><button onClick={() => setClaimDetail(null)}>×</button></div>
          <div className="claim-detail-head"><span className={claimDetail.startsWith('history') ? 'resolved-pill' : claimDetail === 'new' ? 'received-pill' : 'warning-pill'}>{claimDetail.startsWith('history') ? 'Resuelto' : claimDetail === 'new' ? 'Recibido' : 'En evaluación'}</span><small>{claimDetail === 'new' ? 'REC-2025-04892' : claimDetail === 'history-charge' ? 'REC-2025-03106' : claimDetail === 'history-benefit' ? 'SOL-2025-02651' : 'REC-2025-04218'}</small></div>
          <h3 className="claim-detail-title">{claimDetail === 'new' ? reason : claimDetail === 'history-charge' ? 'Cobro duplicado en recibo' : claimDetail === 'history-benefit' ? 'Activación de beneficio' : 'Intermitencia en internet móvil'}</h3>
          <div className="timeline detailed">
            <div className="done"><i><Icon name="check" size={14} /></i><span><strong>Solicitud recibida</strong><small>Registramos tu caso correctamente.</small></span></div>
            <div className={claimDetail === 'new' ? '' : 'done'}><i>{claimDetail !== 'new' && <Icon name="check" size={14} />}</i><span><strong>Evaluación del caso</strong><small>{claimDetail === 'new' ? 'Iniciaremos la revisión en breve.' : 'Un especialista revisó la información.'}</small></span></div>
            <div className={claimDetail.startsWith('history') ? 'done' : ''}><i>{claimDetail.startsWith('history') && <Icon name="check" size={14} />}</i><span><strong>{claimDetail.startsWith('history') ? 'Caso resuelto' : 'Respuesta final'}</strong><small>{claimDetail.startsWith('history') ? 'La solución fue enviada por correo.' : 'Te notificaremos cuando esté lista.'}</small></span></div>
          </div>
          {claimDetail.startsWith('history') && <div className="resolution-box"><strong>Respuesta de Movistar</strong><p>{claimDetail === 'history-charge' ? 'Se validó el cobro duplicado y se aplicó una devolución de S/ 69.90 a tu recibo.' : 'El beneficio fue activado correctamente sin costo adicional.'}</p></div>}
          <button className="outline-button" onClick={() => setClaimDetail(null)}>Cerrar</button>
        </section>
      </div>}
    </>
  )
}

function Profile({ go, logout, openAction, emailAddress, contactPhone, passwordUpdated, securityUpdated }: { go: (screen: Screen) => void; logout: () => void; openAction: (action: ActionId) => void; emailAddress: string; contactPhone: string; passwordUpdated: boolean; securityUpdated: boolean }) {
  const [push, setPush] = useState(true)
  const [email, setEmail] = useState(false)
  return (
    <>
      <Header title="Mi perfil" onNotifications={() => go('notifications')} />
      <div className="screen-content profile-content">
        <section className="profile-head"><div className="profile-avatar">MF<button><Icon name="edit" size={13} /></button></div><h2>María Fernanda López</h2><p>DNI ••••••42</p></section>
        <div className="profile-group"><h3>Mis datos</h3>
          <button onClick={() => openAction('email')}><span className="list-icon"><Icon name="user" /></span><div><small>Correo electrónico</small><strong>{emailAddress}</strong></div><Icon name="chevron" /></button>
          <button onClick={() => openAction('phone-data')}><span className="list-icon"><Icon name="phone" /></span><div><small>Celular de contacto</small><strong>{contactPhone}</strong></div><Icon name="chevron" /></button>
        </div>
        <div className="profile-group"><h3>Preferencias y seguridad</h3>
          <button><span className="list-icon"><Icon name="bell" /></span><div><strong>Notificaciones push</strong><small>Alertas y novedades</small></div><label className="switch"><input type="checkbox" checked={push} onChange={() => setPush(!push)} /><i /></label></button>
          <button><span className="list-icon"><Icon name="chat" /></span><div><strong>Notificaciones por correo</strong><small>Recibos y promociones</small></div><label className="switch"><input type="checkbox" checked={email} onChange={() => setEmail(!email)} /><i /></label></button>
          <button onClick={() => openAction('password')}><span className="list-icon"><Icon name="lock" /></span><div><strong>Cambiar contraseña</strong><small>{passwordUpdated ? 'Actualizada hoy' : 'Última actualización: hace 3 meses'}</small></div><Icon name="chevron" /></button>
          <button onClick={() => openAction('security')}><span className="list-icon"><Icon name="shield" /></span><div><strong>Seguridad de la cuenta</strong><small>{securityUpdated ? 'Protección alta · Actualizada' : 'Biometría y dispositivos'}</small></div><Icon name="chevron" /></button>
        </div>
        <button className="logout-button" onClick={logout}><Icon name="logout" /> Cerrar sesión</button>
        <p className="version">Mi Movistar v6.0.0</p>
      </div>
    </>
  )
}

function Notifications({ back }: { back: () => void }) {
  const [read, setRead] = useState(false)
  return (
    <>
      <header className="app-header title-with-back"><button className="icon-button" onClick={back}><Icon name="arrow" /></button><h1>Notificaciones</h1><button className="mark-read" onClick={() => setRead(true)}>Leer todo</button></header>
      <div className="screen-content notifications">
        <p className="date-group">HOY</p>
        <article className={read ? '' : 'unread'}><div className="notif-icon blue"><Icon name="file" /></div><div><strong>Tu recibo ya está disponible</strong><p>Revisa el detalle y paga hasta el 22 de junio.</p><small>Hace 25 min</small></div></article>
        <article className={read ? '' : 'unread'}><div className="notif-icon amber"><Icon name="help" /></div><div><strong>Actualizamos tu reclamo</strong><p>El reclamo REC-2025-04218 está en evaluación.</p><small>Hace 2 h</small></div></article>
        <p className="date-group">AYER</p>
        <article><div className="notif-icon violet"><Icon name="gift" /></div><div><strong>Un beneficio para ti</strong><p>Activa 3 meses de Movistar TV App sin costo.</p><small>Ayer, 4:32 p. m.</small></div></article>
        <article><div className="notif-icon green"><Icon name="check" /></div><div><strong>Pago procesado</strong><p>Recibimos tu pago de S/ 69.90. ¡Gracias!</p><small>Ayer, 9:10 a. m.</small></div></article>
      </div>
    </>
  )
}

function ActionCenter({ action, close, openAction, onCompleted }: { action: ActionId; close: () => void; openAction: (action: ActionId) => void; onCompleted: (action: ActionId) => void }) {
  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serviceType, setServiceType] = useState<'mobile' | 'home'>('mobile')
  const [addingCard, setAddingCard] = useState(false)
  const [biometrics, setBiometrics] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  const completeAfterDelay = () => {
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      onCompleted(action)
      setCompleted(true)
    }, 700)
  }

  const titles: Record<ActionId, string> = {
    pay: 'Pagar recibo',
    benefit: 'Beneficio exclusivo',
    'mobile-detail': 'Detalle de tu línea',
    'add-service': 'Agregar servicio',
    internet: 'Gestionar internet',
    password: 'Cambiar contraseña',
    security: 'Seguridad de la cuenta',
    email: 'Actualizar correo',
    'phone-data': 'Celular de contacto',
    packages: 'Comprar paquetes',
    'line-settings': 'Configurar mi línea',
  }

  const successContent: Record<ActionId, { title: string; text: string }> = {
    pay: { title: '¡Pago realizado!', text: 'Procesamos tu pago de S/ 69.90. Enviamos la constancia a tu correo.' },
    benefit: { title: '¡Beneficio activado!', text: 'Ya tienes Movistar TV App sin costo por 3 meses. Recibirás tus accesos por correo.' },
    'mobile-detail': { title: 'Solicitud completada', text: 'La configuración de tu servicio fue actualizada correctamente.' },
    'add-service': { title: '¡Servicio vinculado!', text: 'Validamos tus datos y agregamos el servicio a tu cuenta Mi Movistar.' },
    internet: { title: 'Reinicio completado', text: 'Tu router se reinició correctamente. La conexión puede tardar un minuto en volver.' },
    password: { title: 'Contraseña actualizada', text: 'Tu nueva contraseña ya está activa. También cerramos las sesiones de otros dispositivos.' },
    security: { title: 'Seguridad actualizada', text: 'Guardamos tus nuevas preferencias de seguridad correctamente.' },
    email: { title: 'Correo actualizado', text: 'Enviamos un enlace de confirmación a tu nuevo correo electrónico.' },
    'phone-data': { title: 'Celular actualizado', text: 'Tu número de contacto fue actualizado correctamente.' },
    packages: { title: '¡Paquete activado!', text: 'Activamos 10 GB adicionales. Puedes usarlos desde este momento.' },
    'line-settings': { title: 'Configuración guardada', text: 'Los cambios de tu línea fueron aplicados correctamente.' },
  }

  if (completed) {
    const content = successContent[action]
    return (
      <div className="action-overlay" onMouseDown={close}>
        <section className="action-sheet action-success" onMouseDown={(e) => e.stopPropagation()}>
          <div className="sheet-handle" />
          <div className="success-check compact"><Icon name="check" size={28} /></div>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
          {action === 'pay' && <div className="receipt-number"><span>N.º de operación</span><strong>MV-84592017</strong></div>}
          <button className="primary-button" onClick={close}>Entendido</button>
        </section>
      </div>
    )
  }

  return (
    <div className="action-overlay" onMouseDown={close}>
      <section className="action-sheet" onMouseDown={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="sheet-title"><div><small>MI MOVISTAR</small><h2>{titles[action]}</h2></div><button onClick={close} aria-label="Cerrar">×</button></div>

        {action === 'pay' && <>
          <div className="amount-box"><span>Total a pagar</span><strong>S/ 69.90</strong><small>Recibo de junio · vence 22 jun.</small></div>
          <p className="field-label">Selecciona un medio de pago</p>
          {!addingCard ? <>
            <label className="payment-option selected"><div className="card-brand">VISA</div><span><strong>Visa terminada en 4821</strong><small>Tarjeta guardada</small></span><i><Icon name="check" size={13} /></i></label>
            <button className="payment-option" onClick={() => setAddingCard(true)}><div className="add-card"><Icon name="plus" size={17} /></div><span><strong>Agregar otra tarjeta</strong><small>Crédito o débito</small></span><Icon name="chevron" size={17} /></button>
            <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Procesando pago…' : 'Pagar S/ 69.90'}</button>
          </> : <>
            <div className="inline-back"><button onClick={() => setAddingCard(false)}><Icon name="arrow" size={18} /></button><strong>Nueva tarjeta</strong></div>
            <label className="sheet-field">Número de tarjeta<input inputMode="numeric" defaultValue="4111 1111 1111 1111" maxLength={19} /></label>
            <label className="sheet-field">Nombre del titular<input defaultValue="MARÍA FERNANDA LÓPEZ" /></label>
            <div className="field-row"><label className="sheet-field">Vencimiento<input defaultValue="12/28" /></label><label className="sheet-field">CVV<input type="password" defaultValue="123" maxLength={3} /></label></div>
            <label className="save-card-check"><input type="checkbox" defaultChecked /><span>Guardar esta tarjeta para próximos pagos</span></label>
            <button className="primary-button" onClick={() => setAddingCard(false)}>Guardar y seleccionar</button>
          </>}
          <p className="secure-note"><Icon name="lock" size={14} /> Pago seguro y protegido</p>
        </>}

        {action === 'benefit' && <>
          <div className="benefit-visual"><Icon name="gift" size={36} /><span>3 meses</span></div>
          <h3 className="sheet-subtitle">Movistar TV App para ti</h3>
          <p className="sheet-copy">Disfruta canales en vivo, series, películas y contenido infantil desde todos tus dispositivos.</p>
          <ul className="feature-list"><li><Icon name="check" /> Sin costo durante 3 meses</li><li><Icon name="check" /> Hasta 2 dispositivos a la vez</li><li><Icon name="check" /> Cancela cuando quieras</li></ul>
          <div className="price-row"><span>Luego del periodo promocional</span><strong>S/ 19.90/mes</strong></div>
          <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Activando…' : 'Activar beneficio'}</button>
        </>}

        {action === 'mobile-detail' && <>
          <div className="detail-number"><span className="service-icon"><Icon name="phone" /></span><div><small>Línea principal</small><strong>987 654 321</strong></div><span className="status-pill">Activo</span></div>
          <div className="detail-list"><div><span>Plan actual</span><strong>Movistar Ilimitado 69.90</strong></div><div><span>Ciclo de facturación</span><strong>Del 18 al 17 de cada mes</strong></div><div><span>Contrato</span><strong>Sin plazo forzoso</strong></div><div><span>Datos compartidos</span><strong>Activado</strong></div></div>
          <button className="management-option" onClick={() => openAction('packages')}><span><Icon name="wifi" /></span><div><strong>Comprar paquetes</strong><small>Datos, llamadas y roaming</small></div><Icon name="chevron" /></button>
          <button className="management-option" onClick={() => openAction('line-settings')}><span><Icon name="settings" /></span><div><strong>Configurar mi línea</strong><small>Buzón, desvíos y restricciones</small></div><Icon name="chevron" /></button>
          <button className="outline-button" onClick={close}>Cerrar detalle</button>
        </>}

        {action === 'add-service' && <>
          <p className="sheet-copy left">Selecciona el servicio que deseas vincular a tu cuenta.</p>
          <div className="service-selector"><button className={serviceType === 'mobile' ? 'active' : ''} onClick={() => setServiceType('mobile')}><Icon name="phone" /><span>Línea móvil</span></button><button className={serviceType === 'home' ? 'active' : ''} onClick={() => setServiceType('home')}><Icon name="wifi" /><span>Servicio hogar</span></button></div>
          <label className="sheet-field">{serviceType === 'mobile' ? 'Número de celular' : 'Código de cliente'}<input defaultValue={serviceType === 'mobile' ? '999 888 777' : ''} placeholder={serviceType === 'mobile' ? '9XX XXX XXX' : 'Ej. 10024589'} /></label>
          <label className="sheet-field">DNI del titular<input defaultValue="74859642" /></label>
          <div className="privacy-box"><Icon name="shield" /><p>Validaremos que seas titular del servicio antes de vincularlo.</p></div>
          <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Validando datos…' : 'Validar y agregar'}</button>
        </>}

        {action === 'internet' && <>
          <div className="router-status"><div className="router-icon"><Icon name="wifi" size={30} /></div><div><span><i /> Servicio operativo</span><strong>Fibra Óptica 600 Mbps</strong><small>Última revisión: ahora</small></div></div>
          <div className="speed-grid"><div><Icon name="arrow" /><span>Descarga<strong>584 Mbps</strong></span></div><div><Icon name="send" /><span>Subida<strong>572 Mbps</strong></span></div></div>
          <button className="management-option"><span><Icon name="wifi" /></span><div><strong>Cambiar clave WiFi</strong><small>Red: MOVISTAR_5G_A21</small></div><Icon name="chevron" /></button>
          <button className="management-option"><span><Icon name="shield" /></span><div><strong>Dispositivos conectados</strong><small>5 dispositivos en línea</small></div><Icon name="chevron" /></button>
          <button className="outline-button restart-button" onClick={completeAfterDelay}>{loading ? 'Reiniciando router…' : 'Reiniciar mi router'}</button>
        </>}

        {action === 'password' && <>
          <p className="sheet-copy left">Crea una contraseña segura que no uses en otras aplicaciones.</p>
          <label className="sheet-field">Contraseña actual<input type="password" defaultValue="movistar123" /></label>
          <label className="sheet-field">Nueva contraseña<input type="password" defaultValue="NuevaClave2025!" /></label>
          <label className="sheet-field">Confirmar nueva contraseña<input type="password" defaultValue="NuevaClave2025!" /></label>
          <div className="password-rules"><strong>Tu contraseña es segura</strong><span><i /> 8 caracteres o más</span><span><i /> Incluye mayúscula y número</span></div>
          <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Actualizando…' : 'Actualizar contraseña'}</button>
        </>}

        {action === 'security' && <>
          <div className="security-score"><Icon name="shield" size={30} /><div><span>Nivel de seguridad</span><strong>Protección alta</strong></div></div>
          <div className="security-options">
            <div><span><strong>Ingreso con biometría</strong><small>Huella o reconocimiento facial</small></span><label className="switch"><input type="checkbox" checked={biometrics} onChange={() => setBiometrics(!biometrics)} /><i /></label></div>
            <div><span><strong>Verificación en dos pasos</strong><small>Código por SMS al iniciar sesión</small></span><label className="switch"><input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} /><i /></label></div>
          </div>
          <p className="field-label">DISPOSITIVOS CON SESIÓN ACTIVA</p>
          <div className="device-row"><Icon name="phone" /><span><strong>iPhone 15</strong><small>Lima · Este dispositivo</small></span><b>Activo</b></div>
          <div className="device-row"><Icon name="settings" /><span><strong>Chrome en Windows</strong><small>Lima · Hace 2 días</small></span><button>Cerrar</button></div>
          <button className="primary-button" onClick={completeAfterDelay}>Guardar cambios</button>
        </>}

        {(action === 'email' || action === 'phone-data') && <>
          <p className="sheet-copy left">Mantén tus datos actualizados para recibir alertas y recuperar tu cuenta.</p>
          <label className="sheet-field">{action === 'email' ? 'Correo electrónico actual' : 'Celular actual'}<input disabled defaultValue={action === 'email' ? 'maria.lopez@email.com' : '987 654 321'} /></label>
          <label className="sheet-field">{action === 'email' ? 'Nuevo correo electrónico' : 'Nuevo celular'}<input defaultValue={action === 'email' ? 'maria.fernanda@email.com' : '999 123 456'} /></label>
          <label className="sheet-field">Confirma con tu contraseña<input type="password" defaultValue="movistar123" /></label>
          <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Guardando…' : 'Guardar cambio'}</button>
        </>}

        {action === 'packages' && <>
          <p className="sheet-copy left">Elige un paquete. Se cargará a tu próximo recibo.</p>
          <div className="package-list"><button><span><b>5 GB</b><small>Vigencia 7 días</small></span><strong>S/ 7.90</strong></button><button className="selected"><em>Más elegido</em><span><b>10 GB</b><small>Vigencia 15 días</small></span><strong>S/ 12.90</strong></button><button><span><b>20 GB</b><small>Vigencia 30 días</small></span><strong>S/ 19.90</strong></button></div>
          <button className="primary-button" onClick={completeAfterDelay}>{loading ? 'Activando…' : 'Activar 10 GB por S/ 12.90'}</button>
        </>}

        {action === 'line-settings' && <>
          <div className="security-options line-options">
            <div><span><strong>Buzón de voz</strong><small>Recibe mensajes cuando no contestas</small></span><label className="switch"><input type="checkbox" defaultChecked /><i /></label></div>
            <div><span><strong>Roaming internacional</strong><small>Uso de la línea fuera de Perú</small></span><label className="switch"><input type="checkbox" /><i /></label></div>
            <div><span><strong>Bloquear llamadas premium</strong><small>Evita cobros por números especiales</small></span><label className="switch"><input type="checkbox" defaultChecked /><i /></label></div>
          </div>
          <button className="primary-button" onClick={completeAfterDelay}>Guardar configuración</button>
        </>}
      </section>
    </div>
  )
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [screen, setScreen] = useState<Screen>('home')
  const [previous, setPrevious] = useState<Screen>('home')
  const [action, setAction] = useState<ActionId | null>(null)
  const [completedActions, setCompletedActions] = useState<ActionId[]>([])
  const [profileData, setProfileData] = useState({ email: 'maria.lopez@email.com', phone: '987 654 321' })
  const go = (next: Screen) => {
    if (next === 'notifications') setPrevious(screen)
    setScreen(next)
  }
  return (
    <div className="page-shell">
      <div className="phone-frame">
        {!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : (
          <div className="app-shell">
            {screen === 'home' && <Home go={go} openAction={setAction} />}
            {screen === 'services' && <Services go={go} openAction={setAction} />}
            {screen === 'support' && <Support go={go} />}
            {screen === 'claims' && <Claims go={go} />}
            {screen === 'profile' && <Profile go={go} openAction={setAction} emailAddress={profileData.email} contactPhone={profileData.phone} passwordUpdated={completedActions.includes('password')} securityUpdated={completedActions.includes('security')} logout={() => { setLoggedIn(false); setScreen('home') }} />}
            {screen === 'notifications' && <Notifications back={() => setScreen(previous)} />}
            {screen !== 'support' && screen !== 'notifications' && <BottomNav active={screen} go={go} />}
            {action && <ActionCenter key={action} action={action} close={() => setAction(null)} openAction={setAction} onCompleted={(done) => {
              setCompletedActions((items) => items.includes(done) ? items : [...items, done])
              if (done === 'email') setProfileData((data) => ({ ...data, email: 'maria.fernanda@email.com' }))
              if (done === 'phone-data') setProfileData((data) => ({ ...data, phone: '999 123 456' }))
            }} />}
          </div>
        )}
      </div>
    </div>
  )
}
